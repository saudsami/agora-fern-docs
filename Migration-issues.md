# Agora docs: Docusaurus to Fern migration

## Issues

### Multi-platform page support

Agora's documentation requires each page to support multiple platform-specific versions (Android, iOS, Flutter, Web, macOS, Windows, etc.), with the available platforms varying per product. In the current Docusaurus implementation this is handled via a `PlatformWrapper` component and a global platform selector dropdown that persists across page navigation.

Fern has no native equivalent. We explored the following approaches:

- Fern versioning — designed for API versions (v1, v2) but can be repurposed for platforms. However, versioning is one-dimensional, so using it for platforms consumes the only version dimension available, leaving no native way to also version docs by API version (v1, v2). Combining both dimensions would require a custom component for one of them, the same problem we are trying to solve. Also requires the Enterprise plan for more than 10 versions.
- Tabs component — loses unique URLs per platform, causing search indexing issues we are trying to move away from
- Custom dropdown component with pages/sections marked `hidden: true` in `docs.yml`: correctly hide on initial load but reappear in the sidebar after the user navigates to them, making the sidebar unpredictable. Wrapping hidden pages inside a hidden section does not resolve the issue.
- Global platform selector in the header — Fern supports replacing the default header with a custom React component, but provides no starter component. The entire header (logo, search, product switcher, version dropdown, theme toggle) would need to be rebuilt from scratch. Additionally, custom header components do not work in local development, only in preview and production, making iteration painful.

### Variable substitution in "View as Markdown"

Agora's documentation uses three types of variables: global (Vg), product-specific (Vpd), and platform-specific (Vpl). In Docusaurus, these are resolved at render time and appear correctly in all views of the page content.
In Fern, global variables can be migrated to built-in ${ENV_VAR} build-time substitution, which resolves correctly in "View as Markdown" and llms.txt. However, product and platform variables are implemented as client-side React components that read from the URL at runtime. Since "View as Markdown" reads the raw MDX source rather than the rendered output, these variables appear as unresolved component tags (e.g. <Vpd k="SDK" />) instead of their actual values. This also affects llms.txt and any AI tool that consumes the raw markdown.
There is no workaround for Vpd and Vpl within Fern's current architecture — their values are inherently context-dependent and cannot be determined at build time. The only mitigation would be to hardcode platform and product names in shared content rather than using variables, which significantly increases maintenance overhead at Agora's scale.

### ProductWrapper and PlatformWrapper content filtering not reflected in exported markdown
ProductWrapper and PlatformWrapper filter page content at runtime based on the current URL. The "View as Markdown", llms.txt, and any AI tool consuming the raw MDX source will see the unfiltered content — all platform-specific sections rendered simultaneously regardless of platform or notAllowed props. This means a page with Android, Flutter, iOS, and Web implementations wrapped in PlatformWrapper blocks will export all four implementations in the markdown, producing redundant and potentially contradictory content for AI consumers.
This is the same root cause as the variable substitution issue — Fern has no build-time awareness of platform or product context. A proper solution would require Fern to support per-version markdown export, generating a separate markdown output for each platform version rather than a single unfiltered document. 

## Limitations

### Lack of component swizzling
Fern does not support component swizzling or any mechanism to override its built-in UI components. Customization is limited to adding custom React components for use within MDX page content, applying CSS overrides via .fern-* selectors, injecting custom JavaScript, and replacing the header and footer. Core structural components such as the sidebar, navigation, and product switcher cannot be replaced or extended with custom logic.
In Docusaurus, swizzling allows built-in components to be wrapped or replaced entirely, which is how the platform selector dropdown and PlatformWrapper behavior are implemented at a structural level. Without an equivalent in Fern, similar functionality can only be approximated within page content via custom React components, not at the navigation or layout level. This means bugs or limitations in Fern's built-in components — such as hidden pages reappearing in the sidebar — cannot be worked around on the implementation side and require a fix from Fern.

### No global MDX component imports
Fern requires every custom React component to be explicitly imported in each MDX file. There is no equivalent to Docusaurus's global MDXComponents configuration, which allows components like `<Vg>` (global variables) and `<PlatformWrapper>` to be available across all pages without an import statement. At Agora's scale — hundreds of pages each using PlatformWrapper and potentially a PlatformSelector — this means every page requires the same boilerplate import lines, increasing authoring overhead and the risk of inconsistency across pages.