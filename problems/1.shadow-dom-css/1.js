const htmlCode = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>HTML Shadow DOM</title>
    <style>
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 24px;
      }

      :root {
        --bg-color: cornflowerblue;
      }

      body {
        width: 100%;
        height: 100vh;
        background-color: antiquewhite;
      }

      .square {
        width: 500px;
        height: 500px;
        border: 5px solid #000;
        background-color: var(--bg-color);
      }
    </style>
  </head>
  <body>
    <div class="square"></div>
  </body>
</html>

`;

customElements.define(
  "square-element",
  class extends HTMLElement {
    connectedCallback() {
      const shadow = this.attachShadow({ mode: "open" });

      shadow.innerHTML = htmlCode;
    }
  }
);
