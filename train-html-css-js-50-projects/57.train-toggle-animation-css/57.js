(function () {
  const classes = {
    layer: "layer",
    square: "square",
    animationRotateClockWise45Deg: "animationRotateClockWise45Deg",
    animationRotateCounterClockWise45Deg:
      "animationRotateCounterClockWise45Deg",
    buttonToggleAnimation: "buttonToggleAnimation",
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
   *
   */
  function toggleClassNameElement(element, className) {
    const flag = wasElementHasClassName(element, className);

    return flag === true
      ? element.classList.remove(className)
      : element.classList.add(className);
  }

  /**
   *
   * @param {HTMLElement} element
   * @param {string} className
   *
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
   * @param {string} class1
   * @param {string} class2
   *
   */
  function toggleElementDoubleClasses(element, class1, class2) {
    const flag = wasElementHasClassName(element, class1);

    if (!flag) {
      element.classList.add(class1);
      element.classList.remove(class2);

      return;
    }

    if (flag) {
      element.classList.remove(class1);
      element.classList.add(class2);
    }
  }

  /**
   *
   * @param {HTMLElement} buttonToggleAnimation
   * @param {HTMLElement} square
   *
   */
  function buttonToggleAnimationOnclick(buttonToggleAnimation, square) {
    buttonToggleAnimation.onclick = function () {
      toggleElementDoubleClasses(
        square,
        classes.animationRotateClockWise45Deg,
        classes.animationRotateCounterClockWise45Deg
      );
    };
  }

  function main() {
    const layer = document.getElementsByClassName(classes.layer)[0];
    const buttonToggleAnimation = document.getElementsByClassName(
      classes.buttonToggleAnimation
    )[0];
    const square = document.getElementsByClassName(classes.square)[0];

    buttonToggleAnimationOnclick(buttonToggleAnimation, square);
    dragElement(layer);
  }

  main();
})();
