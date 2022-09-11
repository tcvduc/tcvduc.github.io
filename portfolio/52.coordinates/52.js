(function () {
  const classes = {
    rectangle400x300: "rectangle400x300",
    rectangle10x100: "rectangle10x100",
    rectangle2x100vh: "rectangle2x100vh",
    rectangle100vwx2px: "rectangle100vwx2px",
    membrane: "membrane",
    positionRelative: "positionRelative",
    positionAbsolute: "positionAbsolute",
    coordinatesInformationElement: "coordinatesInformationElement",
  };

  const coordinates = {
    x: 0,
    y: 0,
  };

  const firstQuadrantCoordinateSystemCompute = {
    x: 70,
    y: 35,
  };

  const secondQuadrantCoordinateSystemCompute = {
    x: 35,
    y: 35,
  };

  const thirdQuadrantCoordinateSystemCompute = {
    x: 15,
    y: 15,
  };

  const fourthQuadrantCoordinateSystemCompute = {
    x: 70,
    y: 15,
  };

  /**
   *
   * @param {HTMLElement} element
   */
  function getElementOffset(element) {
    let offsetLeft = null;
    let offsetTop = null;

    while (
      element &&
      !window.isNaN(element.offsetTop) &&
      !window.isNaN(element.offsetLeft)
    ) {
      offsetLeft += element.offsetLeft;
      offsetTop += element.offsetTop;

      element = element.offsetParent;
    }

    return {
      offsetLeft,
      offsetTop,
    };
  }

  function createRectangle() {
    const ret = document.createElement("div");
    ret.classList.add(classes.rectangle2x100vh);
    ret.classList.add(classes.positionAbsolute);
    return ret;
  }

  function createHorizontalRectangle100vwx2px() {
    const ret = document.createElement("div");

    ret.classList.add(classes.rectangle100vwx2px);
    ret.classList.add(classes.positionAbsolute);

    return ret;
  }

  /**
   *
   * @param {coordinates} coordinates
   */
  function addOneVerticalRectangleElementAtPositionCoordinates(coordinates) {
    const membrane = document.getElementsByClassName(classes.membrane)[0];
    const rectangle = createRectangle();

    rectangle.style.left = coordinates.x;

    membrane.appendChild(rectangle);
  }

  /**
   *
   * @param {coordinates} coordinates
   */
  function addOneHorizontalRectangleElementAtPositionCoordinates(coordinates) {
    const membrane = document.getElementsByClassName(classes.membrane)[0];
    const horizontalRectangle100vw2px = createHorizontalRectangle100vwx2px();
    horizontalRectangle100vw2px.style.left = 0;
    horizontalRectangle100vw2px.style.top = coordinates.y;
    membrane.appendChild(horizontalRectangle100vw2px);
  }

  /**
   *
   * @param {coordinates} coordinates
   */
  function createCoordinatesInformationElement(coordinates) {
    const ret = document.createElement("div");
    ret.innerHTML = `(${coordinates.x},${coordinates.y})`;
    ret.classList.add(classes.coordinatesInformationElement);
    return ret;
  }

  /**
   *
   * @param {object} object1
   * @param {object} object2
   *
   */
  function wasTwoObjectEqual(object1, object2) {
    /**
     * object1 = {
     *  key1: "value1",
     *  key2: "value2"
     * }
     *
     * object2 = {
     *  key1: "value1",
     *  key2: "value2",
     * }
     *
     * object3 = {
     *  key1: "value1",
     *  key3: "value2",
     * }
     *
     *
     *
     */
    let countKey1 = 0;
    let countKey2 = 0;
    let object1ArrayKey = [];
    let object2ArrayKey = [];

    for (const key in object1) {
      countKey1++;
      object1ArrayKey.push(key);
    }

    for (const key in object2) {
      countKey2++;
      object2ArrayKey.push(key);
    }

    if (countKey1 !== countKey2) {
      return false;
    }

    for (let i = object1ArrayKey.length - 1; i >= 0; --i) {
      if (object1ArrayKey[i] !== object2ArrayKey[i]) {
        return false;
      }
    }

    for (const key in object1) {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }

    return true;
  }

  /**
   *
   * @param {coordinates} coordinates
   * @param {number} mouseSize
   */
  function addCoordinatesInformationAtPositionCoordinates(
    coordinates,
    mouseSize
  ) {
    const coordinatesInformationElement =
      createCoordinatesInformationElement(coordinates);

    const membrane = document.getElementsByClassName(classes.membrane)[0];

    const nearTopLeftMostCoordinates = {
      x: 73,
      y: 37,
    };

    const nearTopRightMostCoordinates = {
      x: 1400,
      y: 60,
    };

    const nearBottomRightMostCoordinates = {
      x: 1400,
      y: 700,
    };

    const nearBottomLeftMostCoordinates = {
      x: 100,
      y: 700,
    };

    const nearLeftMostCondition = {
      x: 75,
    };

    const nearTopMostCondition = {
      y: 40,
    };

    if (coordinates.x <= nearLeftMostCondition.x) {
      /**
       * Near Left Most - done
       * + Near Left Most - done
       * + Near Top Left Most - done
       * + Near Bottom Left Most - done
       *
       */

      if (
        coordinates.x <= nearTopLeftMostCoordinates.x &&
        coordinates.y <= nearTopLeftMostCoordinates.y
      ) {
        coordinatesInformationElement.style.top =
          coordinates.y + thirdQuadrantCoordinateSystemCompute.y;
        coordinatesInformationElement.style.left =
          coordinates.x + thirdQuadrantCoordinateSystemCompute.x;

        membrane.appendChild(coordinatesInformationElement);

        return;
      }

      if (
        coordinates.x <= nearBottomLeftMostCoordinates.x &&
        coordinates.y >= nearBottomLeftMostCoordinates.y
      ) {
        coordinatesInformationElement.style.left =
          coordinates.x + secondQuadrantCoordinateSystemCompute.x;

        coordinatesInformationElement.style.top =
          coordinates.y - secondQuadrantCoordinateSystemCompute.y;

        membrane.appendChild(coordinatesInformationElement);
        return;
      }

      coordinatesInformationElement.style.left =
        coordinates.x + secondQuadrantCoordinateSystemCompute.x;

      coordinatesInformationElement.style.top =
        coordinates.y - secondQuadrantCoordinateSystemCompute.y;

      membrane.appendChild(coordinatesInformationElement);
      return;
    }

    if (coordinates.y <= nearTopMostCondition.y) {
      /**
       * Near top most
       * + near top most
       * + near top right most
       *
       */
      if (
        coordinates.x >= nearTopRightMostCoordinates.x &&
        coordinates.y <= nearTopRightMostCoordinates.y
      ) {
        coordinatesInformationElement.style.left =
          coordinates.x - fourthQuadrantCoordinateSystemCompute.x;

        coordinatesInformationElement.style.top =
          coordinates.y + fourthQuadrantCoordinateSystemCompute.y;

        membrane.appendChild(coordinatesInformationElement);
        return;
      }

      coordinatesInformationElement.style.left =
        coordinates.x + thirdQuadrantCoordinateSystemCompute.x;

      coordinatesInformationElement.style.top =
        coordinates.y + thirdQuadrantCoordinateSystemCompute.y;

      membrane.appendChild(coordinatesInformationElement);
      return;
    }

    if (
      coordinates.x >= nearBottomRightMostCoordinates.x &&
      coordinates.y >= nearBottomRightMostCoordinates.y
    ) {
      coordinatesInformationElement.style.left =
        coordinates.x - firstQuadrantCoordinateSystemCompute.x;

      coordinatesInformationElement.style.top =
        coordinates.y - firstQuadrantCoordinateSystemCompute.y;

      membrane.appendChild(coordinatesInformationElement);
      return;
    }

    coordinatesInformationElement.style.left =
      coordinates.x - firstQuadrantCoordinateSystemCompute.x;

    coordinatesInformationElement.style.top =
      coordinates.y - firstQuadrantCoordinateSystemCompute.y;

    membrane.appendChild(coordinatesInformationElement);
  }

  function addToOriginCursorAVerticalAndAHorizontalLine() {
    window.onmousemove =
      /**
       *
       * @param {MouseEvent} event
       */
      function (event) {
        const { view } = event;
        const mouseSize = view.performance.eventCounts.size;
        const rectangle2x100vh = document.getElementsByClassName(
          classes.rectangle2x100vh
        )[0];

        const rectangle100vwx2px = document.getElementsByClassName(
          classes.rectangle100vwx2px
        )[0];

        const coordinatesInformationElement = document.getElementsByClassName(
          classes.coordinatesInformationElement
        )[0];

        if (
          rectangle2x100vh ||
          coordinatesInformationElement ||
          rectangle100vwx2px
        ) {
          rectangle2x100vh.remove();
          rectangle100vwx2px.remove();
          coordinatesInformationElement.remove();
        }

        const { pageX, pageY } = event;

        const coordinates = {
          x: pageX,
          y: pageY,
        };

        addOneVerticalRectangleElementAtPositionCoordinates(coordinates);
        addOneHorizontalRectangleElementAtPositionCoordinates(coordinates);
        addCoordinatesInformationAtPositionCoordinates(coordinates, mouseSize);
      };
  }

  /**
   *
   * @param {HTMLDivElement} rectangle400x300
   */
  function manipulateRectangle400x300(rectangle400x300) {
    const elementOffset = getElementOffset(rectangle400x300);
  }

  function main() {
    const rectangle400x300 = document.getElementsByClassName(
      classes.rectangle400x300
    )[0];

    manipulateRectangle400x300(rectangle400x300);
    addToOriginCursorAVerticalAndAHorizontalLine();

    const coordinates = {
      x: 1200,
      y: 100,
    };

    // addOneRectangleElementAtPosCoordinates(coordinates);
  }

  main();
})();
