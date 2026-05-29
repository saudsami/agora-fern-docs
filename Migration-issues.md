# Agora docs: Docusaurus to Fern migration

## Issues

### Minor issues

- Hide platform label in Tabs: The Single tab label "Platforms" does not add any value. Is it possible to hide it?
- The auto-generated Next Steps link is broken on multi-platform docs



### Multi-platform page support

For some Agora products, such as Video calling and Signaling, we need platform-specific versions for each doc (Android, iOS, Flutter, Web, macOS, Windows, etc.) The available platforms may vary by product and for each doc. In our current Docusaurus implementation this is handled using a `PlatformWrapper` component and a global platform selector dropdown that persists across page navigation.

To implement this in fern, I have tried the following solutions:

- Fern versioning: This feature is basically meant for iterative product versions (v1, v2) but I repurposed it for platforms. This generally works, but presents the following issues:

    - Versioning is one-dimensional, so using it for platforms consumes the only available dimension, leaving no native way to also version docs by API version (v1, v2). 
    - When I use the fern `If` component to reuse common page content and selectively show/hide text by platform with this approach, it renders fine on the html page but when I view the markdown version using the **View as Markdown** option, the content is not properly filtered. I tried writing my own custom component but ran into the same problem
 
- Tabs component: We lose unique URLs per platform-page, causing search indexing issues 

- I also tried adding a custom dropdown component to each page with `hidden` platform pages that are revealed on selecting a platform from the dropdown. The hidden pages are correctly hidden on initial load but reappear in the sidebar after the user navigates to them. Wrapping hidden pages inside a hidden section does not resolve the issue.

### Variable substitution in "View as Markdown"

Agora's documentation uses three types of variables for consistency and content-reuse across products and platforms: 
    - `Vg` component: Global variables. For example, <Vg k="COMPANY" />
    - `Vpd` component: Product-specific. For example, <Vpd k="NAME" /> Name of the current product
    - `Vpl` component: Platform-specific. For example, <Vpl k="NAME" /> Name of the current platform

I tried migrating the 3 components to fern. The approach works in the html version of the page but the values don't show in the markdown version. 

### No global MDX component imports
Fern requires every custom React component to be explicitly imported in each MDX file. There seems to be no equivalent to Docusaurus's global MDXComponents configuration, which allows common custom components like `<Vg>` (global variables) and `<PlatformWrapper>` to be available across all pages without an import statement. 