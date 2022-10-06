(function () {
  const classes = {
    layer: "layer",
    btn: "btn",
    input: "input",
    active: "active",
    transformTranslateX200px: "transformTranslateX200px",
  };

  /**
   *
   * @param {HTMLElement} element
   */
  function dragElement(element) {
    let x1 = 0;
    let x2 = 0;
    let y1 = 0;
    let y2 = 0;

    element.onmousedown =
      /**
       *
       * @param {MouseEvent} event
       */
      function (event) {
        const { pageX, pageY } = event;

        x1 = pageX;
        y1 = pageY;

        window.onmousemove =
          /**
           *
           * @param {MouseEvent} event
           */
          function (event) {
            const { pageX, pageY } = event;

            x2 = pageX;
            y2 = pageY;

            const deltaX = x2 - x1;
            x1 = pageX;

            const deltaY = y2 - y1;
            y1 = pageY;

            element.style.left = element.offsetLeft + deltaX + "px";
            element.style.top = element.offsetTop + deltaY + "px";
          };

        window.onmouseup = function () {
          window.onmousemove = null;
        };
      };
  }

  /**
   *
   * @param {HTMLElement} btn
   * @param {HTMLElement} input
   *
   */
  function btnOnClick(btn, input) {
    btn.onclick = function () {
      input.classList.toggle(classes.active);

      btn.classList.toggle(classes.transformTranslateX200px);
    };
  }

  function main() {
    const btn = document.getElementsByClassName(classes.btn)[0];
    const input = document.getElementsByClassName(classes.input)[0];
    const layer = document.getElementsByClassName(classes.layer)[0];

    dragElement(layer);
    btnOnClick(btn, input);
  }

  main();
})();
