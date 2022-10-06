(function () {
  const classes = {
    rectangle: "rectangle",
    h3: "h3",
    displayNone: "displayNone",
    opacity0: "opacity0",
    temporary: "temporary",
    left0: "left0",
    right0: "right0",

    layerMultipleRectangles: "layer-multiple-rectangles",
  };

  /**
   *
   * @param {string|number} content
   */
  function createAnRectangle(content) {
    const htmlCode = `
    <div class="text">${content}</div>
    `;
    const ret = document.createElement("div");
    ret.classList.add(classes.rectangle);
    ret.classList.add(classes.opacity0);
    ret.innerHTML = htmlCode;
    return ret;
  }

  /**
   *
   * @param {number} n
   */
  function generateNRectangle(n) {
    const ret = [];
    for (let i = n; i >= 1; --i) {
      ret.push(createAnRectangle(i));
    }
    return ret;
  }

  /**
   *
   * @param {number} number
   */
  function wasOddNumber(number) {
    return number % 2 !== 0;
  }

  /**
   *
   * @param {HTMLElement} layerMultipleRectangles
   */
  function initRectangle(layerMultipleRectangles, number) {
    const twentyRectangles = generateNRectangle(number);

    for (let i = twentyRectangles.length - 1; i >= 0; --i) {
      layerMultipleRectangles.appendChild(twentyRectangles[i]);
    }
  }

  /**
   *
   * @param {HTMLElement[]} rectangles
   */
  function getMaxRectangleDisplayedIndex(rectangles) {
    let ret = rectangles.length - 1;
    for (let i = 0; i <= rectangles.length - 1; ++i) {
      if (rectangles[i].classList.contains(classes.opacity0)) {
        ret = i - 1;
        break;
      }
    }

    return ret;
  }

  /**
   *
   * @param {HTMLElement} element
   */
  function getElementOffsetWithWebPage(element) {
    let offsetLeft = 0;
    let offsetTop = 0;

    while (element && !isNaN(element.offsetLeft) && !isNaN(element.offsetTop)) {
      offsetLeft += element.offsetLeft;
      offsetTop += element.offsetTop;

      element = element.offsetParent;
    }

    return {
      offsetLeft,
      offsetTop,
    };
  }

  /**
   *
   * @param {HTMLElement} element
   */
  function getElementOffsetTopWithDeviceScreen(element) {
    return element.getBoundingClientRect().y;
  }

  function getMaxWebPageHeight() {
    return document.body.getBoundingClientRect().height;
  }

  /**
   *
   * @param {HTMLElement[]} rectangles
   */
  function handleWindowOnScroll(rectangles) {
    /**
     * Init default rectangle
     * when web site was not scroll
     *
     */
    const screenHeight = window.innerHeight;
    const rectangleHeight = document
      .getElementsByClassName(classes.rectangle)[0]
      .getBoundingClientRect().height;
    const h3TitleHeight = document
      .getElementsByClassName(classes.h3)[0]
      .getBoundingClientRect().height;
    const delta1 = 24 + 24 + h3TitleHeight;
    const totalRectangles = 20;

    let heightIncreasing = 0;
    heightIncreasing += delta1;
    let maxRectangleIndexToDisplay = 0;

    for (let i = 1; i <= totalRectangles; ++i) {
      heightIncreasing += rectangleHeight + 24;

      if (heightIncreasing >= screenHeight) {
        maxRectangleIndexToDisplay = i - 1;
        break;
      }
    }

    for (let i = 0; i <= maxRectangleIndexToDisplay; ++i) {
      rectangles[i].classList.remove(classes.opacity0);
      rectangles[i].style.left = "initial";
      rectangles[i].style.right = "initial";
    }

    const delta2 = screenHeight + 24 + 24 - rectangleHeight;

    window.onscroll =
      /**
       *
       * @param {Event} event
       */
      function (event) {
        const maxRectangleDisplayedIndex =
          getMaxRectangleDisplayedIndex(rectangles);
        const nextMaxRectangleDisplayedIndex = maxRectangleDisplayedIndex + 1;
        const numberRectangleDisplay = nextMaxRectangleDisplayedIndex + 1;

        const nextMaxRectangleOffsetTopWithScreen =
          getElementOffsetTopWithDeviceScreen(
            rectangles[nextMaxRectangleDisplayedIndex]
          );

        const maxRectangleDisplayedOffsetWithDeviceScreen =
          getElementOffsetTopWithDeviceScreen(
            rectangles[maxRectangleDisplayedIndex]
          );

        if (nextMaxRectangleDisplayedIndex <= rectangles.length - 1) {
          // scroll down animation
          if (nextMaxRectangleOffsetTopWithScreen <= delta2) {
            // odd rectangle
            if (wasOddNumber(numberRectangleDisplay)) {
              rectangles[nextMaxRectangleDisplayedIndex].classList.remove(
                classes.opacity0
              );

              rectangles[nextMaxRectangleDisplayedIndex].classList.add(
                classes.left0
              );
            }

            // even rectangle
            if (!wasOddNumber(numberRectangleDisplay)) {
              rectangles[nextMaxRectangleDisplayedIndex].classList.remove(
                classes.opacity0
              );

              rectangles[nextMaxRectangleDisplayedIndex].classList.add(
                classes.right0
              );
            }
          }

          // scroll up animation

          const delta4 = maxRectangleDisplayedOffsetWithDeviceScreen.toFixed(0);
          const delta5 = screenHeight - 24 - 24 - rectangleHeight;
          const delta6 = delta5 - delta4;
          if (delta6 <= -90) {
            // odd rectangle
            if (wasOddNumber(maxRectangleDisplayedIndex + 1)) {
              rectangles[maxRectangleDisplayedIndex].classList.add(
                classes.opacity0
              );

              rectangles[maxRectangleDisplayedIndex].classList.remove(
                classes.left0
              );
            }

            // even rectangle
            if (!wasOddNumber(maxRectangleDisplayedIndex + 1)) {
              rectangles[maxRectangleDisplayedIndex].classList.add(
                classes.opacity0
              );

              rectangles[maxRectangleDisplayedIndex].classList.remove(
                classes.right0
              );
            }
          }
        }
      };
  }

  function main() {
    const rectangles = document.getElementsByClassName(classes.rectangle);
    const layerMultipleRectangles = document.getElementsByClassName(
      classes.layerMultipleRectangles
    )[0];

    const number = 20;

    initRectangle(layerMultipleRectangles, number);
    handleWindowOnScroll(rectangles);
  }

  main();
})();
