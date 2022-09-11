(function () {
  const htmlCode = `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Shadow DOM HTML</title>
    <style>
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      .layer {
        width: 100%;
        height: 100vh;
        background-color: blanchedalmond;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .square {
        --size: 300px;

        width: var(--size);
        height: var(--size);
        border: 1px solid #000;
        background-color: cornflowerblue;
        cursor: pointer;
      }

      .active {
        background-color: rgb(160, 188, 239);
      }
    </style>
  </head>
  <body>
    <div class="layer">
      <div class="square"></div>
    </div>

    <script>
      (function () {
        const classes = {
          square: "square",
          active: "active",
        };

        /**
         *
         * @param {HTMLElement} square
         */
        function handleSquareOnclick(square) {
          square.onclick = function () {
            square.classList.toggle(classes.active);
          };
        }

        function main() {
          const square = document.getElementsByClassName(classes.square)[0];

          handleSquareOnclick(square);
        }

        main();
      })();
    </script>
  </body>
</html>

  `;

  const classes = {
    square: "square",
    active: "active",
  };

  /**
   *
   * @param {HTMLElement} square
   */
  function handleSquareOnclick(square) {
    square.onclick = function () {
      square.classList.toggle(classes.active);
    };
  }

  function main() {
    const square = document.getElementsByClassName(classes.square)[0];

    handleSquareOnclick(square);
  }

  function main() {
    customElements.define(
      "square-active",

      class extends HTMLElement {
        connectedCallback() {
          const shadow = this.attachShadow({ mode: "open" });

          shadow.innerHTML = htmlCode;
        }
      }
    );
  }

  main();
})();
