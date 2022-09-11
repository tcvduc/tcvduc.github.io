(function () {
  const ids = {
    myDiv: "myDiv",
  };

  /**
   *
   * @param {HTMLElement} element
   */
  function dragElement(element) {
    let currentClientX = 0;
    let previousClientX = 0;
    let currentClientY = 0;
    let previousClientY = 0;

    element.onmousedown =
      /**
       *
       * @param {MouseEvent} event
       */
      function (event) {
        previousClientX = event.clientX;
        previousClientY = event.clientY;

        window.onmousemove =
          /**
           *
           * @param {MouseEvent} event
           */
          function (event) {
            const { clientX, clientY } = event;

            currentClientX = previousClientX - clientX;
            previousClientX = clientX;

            currentClientY = previousClientY - clientY;
            previousClientY = clientY;

            const leftEquation = element.offsetLeft - currentClientX;
            const topEquation = element.offsetTop - currentClientY;

            element.style.left = leftEquation + "px";
            element.style.top = topEquation + "px";
          };

        window.onmouseup =
          /**
           *
           * @param {MouseEvent} event
           */
          function (event) {
            window.onmousemove = null;
            window.onmouseup = null;
          };
      };
  }

  function main() {
    const myDiv = document.getElementById(ids.myDiv);
    dragElement(myDiv);
  }

  main();
})();
