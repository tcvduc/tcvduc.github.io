(function () {
  const classes = {
    layer: "layer",
    input: "input",
    searchIcon: "searchIcon",
    borderRadius2px: "borderRadius2px",
    paddingLeft0PaddingRight0: "paddingLeft0PaddingRight0",
    animationWidth50pxTo200px: "animationWidth50pxTo200px",
    animationWidth200pxTo50px: "animationWidth200pxTo50px",
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
      element.classList.add(class2);
      element.classList.remove(class1);
    }
  }

  /**
   *
   * @param {HTMLElement} searchIcon
   * @param {HTMLElement} layer
   * @param {HTMLElement} input
   *
   */
  function searchIconOnClick(searchIcon, layer, input) {
    searchIcon.onclick = function () {
      toggleElementDoubleClasses(
        layer,
        classes.animationWidth50pxTo200px,
        classes.animationWidth200pxTo50px
      );
    };
  }

  function main() {
    const layer = document.getElementsByClassName(classes.layer)[0];
    const searchIcon = document.getElementsByClassName(classes.searchIcon)[0];
    const input = document.getElementsByClassName(classes.input)[0];

    searchIconOnClick(searchIcon, layer, input);

    dragElement(layer);
  }

  main();
})();
