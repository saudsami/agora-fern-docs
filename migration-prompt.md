Keep the content as is as far as possible.
Make the following changes when migrating a docusaurus doc to fern:

- Frontmatter
  - keep the `title`
  - change `sidebar_position` to `position`. keep the value
  - remove `type` and `platform_selector`
  - keep `description`
  - add `max-toc-depth: 3`

- imports
  - remove `Tabs`, `TabItem`, `CodeBlock`

- Replace: 
  - `<Vg k="COMPANY" />` with Agora
  - `<Vg k="CONSOLE" />` with Agora Console
  - `<Vpd k="NAME" />` with the product name. If you are not clear which product this doc is for, ask before updating.

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

  ```xml
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
  ```

- Image paths: Modify image paths from ![](/images/path-to/image.png) to  ![](/assets/path-to/image.png)


- Codeblock titles: When migrating simple codeblocks, add a suitable title where it adds value. This is nice to have, not a strict requirement.

  ```json title="200 OK"
  {
    "agent_id": "1NT29X10YHxxxxxWJOXLYHNYB",
    "create_ts": 1737111452,
    "status": "RUNNING"
  }
  ```
