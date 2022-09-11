(function () {
  const classes = {
    element: "element",
  };

  /**
   *
   * @param {HTMLElement} element
   */
  function dragElement(element) {
    let previousClientX = 0;
    let currentClientX = 0;
    let previousClientY = 0;
    let currentClientY = 0;

    element.onmousedown =
      /**
       *
       * @param {MouseEvent} event
       */
      function (event) {
        previousClientX = event.clientX;
        previousClientY = event.clientY;

        window.onmouseup =
          /**
           *
           * @param {MouseEvent} event
           */
          function (event) {
            window.onmousemove = null;
            window.onmouseup = null;
          };

        window.onmousemove =
          /**
           *
           * @param {MouseEvent} event
           */
          function (event) {
            const { clientX, clientY } = event;

            currentClientX = clientX - previousClientX;
            previousClientX = clientX;

            currentClientY = clientY - previousClientY;
            previousClientY = clientY;

            const topEquation = element.offsetTop + currentClientY;
            const leftEquation = element.offsetLeft + currentClientX;

            element.style.top = topEquation + "px";
            element.style.left = leftEquation + "px";
          };
      };
  }

  function main() {
    const element = document.getElementsByClassName(classes.element)[0];

    dragElement(element);
  }

  main();
})();
