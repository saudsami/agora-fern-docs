Keep the content unchanged, as far as possible.
Make the following changes when migrating a docusaurus doc to fern:

- Frontmatter
  - keep the `title`
  - change `sidebar_position` to `position`. keep the value
  - remove `type` and `platform_selector`
  - keep `description`
  - add `max-toc-depth: 3`

- imports
  - remove `Tabs`, `TabItem`, `CodeBlock`
  - remove any other unused or incompatible imports and inform me in the conversion notes

- Replace: 
  - `<Vg k="COMPANY" />` with Agora
  - `<Vg k="CONSOLE" />` with Agora Console
  - `<Vpd k="NAME" />` with the product name. If you are not clear which product this doc is for, ask before updating.
  - If there are any other unresolved `<Vg>` `<Vpd>` or `<Vpl>` values, inform me in the notes

- Replace `<Admonitions>` with `<Callout>` component
  - for `type="info"` use `intent="note"`
  - for `type="caution"` use `intent="warning"`
  - other `intents` available are `success`, `error`, `launch`, `tip`, `check`; use where appropriate.

- Replace `<details><summary>header</summary>Content</details>` with 

  ```xml
  <Accordion title="header">
  Content
  </Accordion>
  ```

- Update `<Tabs>` component
  - Replace `<Tabs groupId="group"><TabItem value="language" label="title">Tab content</TabItem></Tabs>`

    ```xml
    <Tabs>
      <Tab title="title" language="typescript">
      Tab content
      </Tab>
    </Tabs>
    ```
  
- Replace `CodeBlock` component with a ``` style block and unescape any escaped chars.

- If a `<Tabs>` contains only code blocks and no other content then use the following construct instead of Tabs:

  ````xml
  <CodeBlocks>
    ```ruby title="hello_world.rb"
    puts "Hello World"
    ```

    ```php title="hello_world.php"
    <?php
    echo "Hello World";
    ?>
    ```

    ```rust title="hello_world.rs"
    fn main() {
        println!("Hello World");
    }
    ```
  </CodeBlocks>
  ````

- Image paths: Modify image paths from ![](/images/path-to/image.png) to  ![](/assets/path-to/image.png). Inform the image paths that I need to copy in the migration notes.


- Codeblock titles: When migrating simple codeblocks, add a suitable title where it adds value. Do not make any assumptions to create a title. Use something appropriate from the context. This is nice to have, not a strict requirement. Skip when in doubt.

  ```json title="200 OK"
  {
    "agent_id": "1NT29X10YHxxxxxWJOXLYHNYB",
    "create_ts": 1737111452,
    "status": "RUNNING"
  }
  ```

