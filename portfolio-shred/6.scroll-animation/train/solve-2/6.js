(function () {
  const classes = {
    rectangle: "rectangle",
    layerRectangles: "layer-rectangles",
    opacity0: "opacity0",
    h3: "h3",
    left0: "left0",
    right0: "right0",
  };

  const totalRectangles = 30;

  /**
   *
   * @param {string} content
   */
  function createAnRectAngle(content) {
    const ret = document.createElement("div");
    ret.classList.add(classes.rectangle);
    ret.innerHTML = content;
    return ret;
  }

  /**
   *
   * @param {number} k
   */
  function generateKRectangles(k) {
    const ret = [];
    for (let i = 1; i <= k; ++i) {
      const rectangle = createAnRectAngle(i);
      ret.push(rectangle);
    }
    return ret;
  }

  /**
   *
   * @param {HTMLElement} layerRectangles
   */
  function initialRectanglesOnWebPage(layerRectangles) {
    const rectangles = generateKRectangles(totalRectangles);
    for (let i = 0; i <= rectangles.length - 1; i++) {
      layerRectangles.appendChild(rectangles[i]);
    }
  }

  /**
   *
   * @param {HTMLElement} element
   */
  function getElementOffsetWatchWithDeviceScreen(element) {
    return {
      offsetTop: element.getBoundingClientRect().y,
      offsetLeft: element.getBoundingClientRect().x,
    };
  }

  /**
   *
   * @param {HTMLElement[]} rectangles
   */
  function getMaxRectangleIndexDisplayed(rectangles) {
    let ret = 0;

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
   * @param {number} n
   */
  function wasOddNumber(n) {
    return n % 2 !== 0;
  }

  /**
   *
   * @param {HTMLElement[]} rectangles
   */
  function handleWindowOnscroll(rectangles) {
    /**
     * 1. When the page first loaded
     * There are only few rectangles must be
     * displayed not all.
     * -> Handle display few rectangles
     *
     */

    // display none rectangles
    for (let i = rectangles.length - 1; i >= 0; --i) {
      rectangles[i].classList.add(classes.opacity0);
    }

    const h3Element = document.getElementsByClassName(classes.h3)[0];

    const marginValue = 24;
    const delta1 =
      marginValue + marginValue + h3Element.getBoundingClientRect().height;
    const screenHeight = screen.height;
    const rectangleHeight = rectangles[0].getBoundingClientRect().height;

    let delta2 = 0;
    delta2 += delta1;

    let maxIndexRectangleInitial = 0;

    for (let i = 0; i <= rectangles.length - 1; ++i) {
      delta2 += marginValue + rectangleHeight;

      if (delta2 >= screenHeight) {
        maxIndexRectangleInitial = i;
        break;
      }
    }

    // display init rectangles
    for (let i = 0; i <= maxIndexRectangleInitial; ++i) {
      rectangles[i].classList.remove(classes.opacity0);
      const rectangleContent = i + 1;

      if (wasOddNumber(rectangleContent)) {
        rectangles[i].classList.add(classes.left0);
      }

      if (!wasOddNumber(rectangleContent)) {
        rectangles[i].classList.add(classes.right0);
      }
    }

    window.onscroll =
      /**
       *
       * @param {Event} event
       */
      function (event) {
        const maxRectangleDisplayedIndex =
          getMaxRectangleIndexDisplayed(rectangles);
        const maxRectangleDisplayed = rectangles[maxRectangleDisplayedIndex];
        const maxRectangleDisplayedOffsetTopWithDeviceScreen =
          getElementOffsetWatchWithDeviceScreen(
            maxRectangleDisplayed
          ).offsetTop;
        const nextRectangleIndexToDisplay = maxRectangleDisplayedIndex + 1;
        const nextRectangleOffsetTopWithScreen =
          getElementOffsetWatchWithDeviceScreen(
            rectangles[nextRectangleIndexToDisplay]
          ).offsetTop;
        const delta3 = nextRectangleOffsetTopWithScreen;
        const delta4 =
          screenHeight - rectangleHeight - marginValue - marginValue;
        if (
          maxRectangleDisplayedIndex <= rectangles.length - 1 &&
          maxRectangleDisplayedIndex !== 0
        ) {
          // scroll down animation
          if (delta3 <= delta4) {
            const rectangleContent = nextRectangleIndexToDisplay + 1;
            if (wasOddNumber(rectangleContent)) {
              rectangles[nextRectangleIndexToDisplay].classList.remove(
                classes.opacity0
              );
              rectangles[nextRectangleIndexToDisplay].classList.add(
                classes.left0
              );
            }
            if (!wasOddNumber(rectangleContent)) {
              rectangles[nextRectangleIndexToDisplay].classList.remove(
                classes.opacity0
              );
              rectangles[nextRectangleIndexToDisplay].classList.add(
                classes.right0
              );
            }
          }
          // scroll up animation
          const delta5 = maxRectangleDisplayedOffsetTopWithDeviceScreen + 150;
          const delta6 = screenHeight - rectangleHeight / 2;
          if (delta5 >= delta6) {
            if (wasOddNumber(maxRectangleDisplayedIndex + 1)) {
              maxRectangleDisplayed.classList.add(classes.opacity0);
              maxRectangleDisplayed.classList.remove(classes.left0);
            }
            if (!wasOddNumber(maxRectangleDisplayedIndex + 1)) {
              maxRectangleDisplayed.classList.add(classes.opacity0);
              maxRectangleDisplayed.classList.remove(classes.right0);
            }
          }
        }
        if (maxRectangleDisplayedIndex === 0) {
          // last rectangle scroll up animation
          const lastRectangleIndex = rectangles.length - 1;
          const lastRectangleContent = lastRectangleIndex + 1;
          const lastRectangle = rectangles[rectangles.length - 1];
          const lastRectangleOffsetTopWatchWithDeviceScreen =
            getElementOffsetWatchWithDeviceScreen(lastRectangle).offsetTop;
          const delta7 = lastRectangleOffsetTopWatchWithDeviceScreen;
          const delta8 = screenHeight - rectangleHeight - 24;
          if (delta7 >= delta8) {
            if (wasOddNumber(lastRectangleContent)) {
              lastRectangle.classList.add(classes.opacity0);
              lastRectangle.classList.add(classes.left0);
            }
            if (!wasOddNumber(lastRectangleContent)) {
              lastRectangle.classList.add(classes.opacity0);
              lastRectangle.classList.remove(classes.right0);
            }
          }
        }
      };
  }

  function main() {
    const rectangles = document.getElementsByClassName(classes.rectangle);
    const layerRectangles = document.getElementsByClassName(
      classes.layerRectangles
    )[0];

    initialRectanglesOnWebPage(layerRectangles);
    handleWindowOnscroll(rectangles);
  }

  main();
})();
