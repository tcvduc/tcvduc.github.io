(() => {
  const classes = {
    square: "square",
  };

  /**
   *
   * @param {String} pixel
   */
  function convertPixelToNumber(pixel) {
    /**
     * ---------0123
     * + pixel: 32px
     * + result: 32
     *
     *-------------0 1
     * + numbers: [3,2]
     * + result: 32
     *
     * + result = 0;
     * + i: 0
     *   + result = 3
     *     + result = result * 10 + numbers[i]
     *     + result = 0 * 10 + 3
     *     + result = 0 + 3
     *     + result = 3
     * + i: 1
     *   + result = 32
     *     + result = result * 10 + numbers[i]
     *     + result = 3 * 10 + 2
     *     + result = 30 + 2
     *     + result = 32
     *
     * Equation
     * 1. result = result * 10 + numbers[i]
     *
     *
     */

    let numbers = [];

    for (let i = 0; i <= pixel.length - 1 - 1 - 1; ++i) {
      numbers.push(pixel[i]);
    }

    let result = 0;

    for (let j = 0; j <= numbers.length - 1; ++j) {
      result = result * 10 + numbers[j];
    }

    return result;
  }

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
            const deltaY = y2 - y1;

            console.log(deltaX);
          };
      };

    window.onmouseup = function () {
      window.onmousemove = null;
    };
  }

  function main() {
    const square = window.document.getElementsByClassName(classes.square)[0];

    dragElement(square);
  }

  main();
})();
