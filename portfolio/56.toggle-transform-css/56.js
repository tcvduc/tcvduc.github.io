(function () {
  const classes = {
    layer: "layer",
    buttonToggleAnimate: "buttonToggleAnimate",
    square: "square",
    rotateClockWise45deg: "rotateClockWise45deg",
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
   * @param {HTMLElement} element
   * @param {string} className
   */
  function wasElementHasClassName(element, className) {
    let ret = false;

    for (let i = element.classList.length - 1; i >= 0; --i) {
      if (element.classList[i].includes(className)) {
        ret = true;
        break;
      }
    }

    return ret;
  }

  /**
   *
   * @param {HTMLElement} element
   * @param {string} className
   *
   */
  function toggleElementClassName(element, className) {
    const flag = wasElementHasClassName(element, className);

    return flag === true
      ? element.classList.remove(className)
      : element.classList.add(className);
  }

  /**
   *
   * @param {HTMLElement} buttonToggleAnimate
   * @param {HTMLElement} square
   *
   */
  function buttonToggleAnimateOnclick(buttonToggleAnimate, square) {
    buttonToggleAnimate.onclick = function () {
      toggleElementClassName(square, classes.rotateClockWise45deg);
    };
  }

  function main() {
    const layer = document.getElementsByClassName(classes.layer)[0];
    const buttonToggleAnimate = document.getElementsByClassName(
      classes.buttonToggleAnimate
    )[0];
    const square = document.getElementsByClassName(classes.square)[0];

    buttonToggleAnimateOnclick(buttonToggleAnimate, square);
    dragElement(layer);
  }

  main();
})();
