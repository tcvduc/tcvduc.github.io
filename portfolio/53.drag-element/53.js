(function () {
  /**
   * Problem: Drag The Element
   * + onmousedown
   *   + flag wasOnmousedown = true
   *   + get the first time coordinates
   * + onmousemove
   *   + mousedown first then detect mouse move
   *   + flag wasOnmousemove = true
   * + onmouseup
   *   + mousedown then mousemove then mouseup
   *   + get the last time coordinates
   *
   * + use the first time coordinates and last time coordinates
   * to calculate the spacing the number that use to move
   * the square
   *
   *
   *
   */
  const classes = {
    square: "square",
  };

  const mouseEvent = {
    wasOnMouseDown: false,
    wasOnMouseMove: false,
    wasOnMouseUp: false,
  };

  const positionObject = {
    theMouseDownCoordinate: {
      x1: null, // x1
      y1: null, // y1
    },
    theMouseUpCoordinate: {
      x3: null,
      y3: null,
    },
    theMouseMoveCoordinate: {
      x2: null, // x2
      y2: null, // y2
    },
    widthMovementNumber: null,
    heightMovementNumber: null,
    deltaX: 0,
    deltaY: 0,
  };

  /**
   *
   * @param {Array} a
   */
  function arrayPush(a, element) {
    /**
     * -------0 1 2 3 4
     * - a = [1,2,3,4,5]
     * - element = 6
     * ---------0 1 2 3 4 5
     * - ret = [1,2,3,4,5,6]
     *
     */
    const ret = new Array(a.length + 1);

    for (let i = a.length - 1; i >= 0; --i) {
      ret[i] = a[i];
    }

    ret[ret.length - 1] = element;

    return ret;
  }

  /**
   *
   * @param {Array} a
   */
  function arrayToString(a) {
    /**
     * -------0 1 2 3 4
     * - a = [1,2,3,4,5]
     * ---------01234
     * - ret = "12345"
     *
     *
     */
    let ret = "";

    for (let i = 0; i <= a.length - 1; ++i) {
      ret += a[i];
    }

    return ret;
  }

  /**
   *
   * @param {Array} a
   */
  function arrayNumberToNumber(a) {
    /**
     * -------0 1 2 3 4
     * - a = [1,2,3,4,5]
     * - n = 12345
     *
     * + ret = null
     * + i = 0
     *   + ret = 1
     * + i = 1
     *   + ret = 12
     *     + ret = 1 * 10 + 2
     *     + ret = 10 + 2
     *     + ret = 12
     * + i = 2
     *   + ret = 123
     *     + ret = 12 * 10 + 3
     *     + ret = 120 + 3
     *     + ret = 123
     *
     * -> ret = ret * 10 + a[i]
     *
     *
     *
     *
     */

    let ret = 0;

    for (let i = 0; i <= a.length - 1; ++i) {
      ret = ret * 10 + a[i];
    }

    return ret;
  }

  /**
   *
   * @param {string} pixel
   */
  function getPixelNumber(pixel) {
    /**
     * + 1px
     *   + ret = 1
     * + 12px
     *   + ret = 12
     *
     * --0123
     * + 12px
     * + i = 0
     *   + ret = [1]
     * + i = 1
     *   + ret = [1, 2]
     * + i = 2
     *   + break
     *
     */
    let ret = [];

    for (let i = 0; i <= pixel.length - 1; ++i) {
      if (pixel[i] === "p") {
        break;
      }
      ret = arrayPush(ret, +pixel[i]);
    }

    return arrayNumberToNumber(ret);
  }

  /**
   *
   * @param {HTMLElement} square
   */
  function dragTheSquare(square) {
    square.onmousedown = function (event) {
      const { pageX, pageY } = event;

      mouseEvent.wasOnMouseDown = true;
      mouseEvent.wasOnMouseUp = false;

      positionObject.theMouseDownCoordinate.x1 = pageX;
      positionObject.theMouseDownCoordinate.y1 = pageY;

      positionObject.widthMovementNumber = currentSquareLeftValue;
      positionObject.heightMovementNumber = currentSquareTopValue;
    };

    square.onmouseup = function (event) {
      if (mouseEvent.wasOnMouseDown && mouseEvent.wasOnMouseMove) {
        const { pageX, pageY } = event;

        mouseEvent.wasOnMouseUp = true;
        mouseEvent.wasOnMouseDown = false;
        mouseEvent.wasOnMouseMove = false;

        positionObject.theMouseUpCoordinate.x3 = pageX;
        positionObject.theMouseUpCoordinate.y3 = pageY;

        positionObject.widthMovementNumber =
          positionObject.theMouseUpCoordinate.x3 -
          positionObject.theMouseDownCoordinate.x1;

        positionObject.heightMovementNumber =
          positionObject.theMouseUpCoordinate.y3 -
          positionObject.theMouseDownCoordinate.y1;
      }
    };

    square.onmousemove = function (event) {
      mouseEvent.wasOnMouseMove = true;

      if (mouseEvent.wasOnMouseUp) {
        return;
      }

      if (mouseEvent.wasOnMouseDown) {
        const { pageX, pageY, clientX } = event;

        const currentSquareLeftValue = getPixelNumber(square.style.left);
        const currentSquareTopValue = getPixelNumber(square.style.top);

        positionObject.theMouseMoveCoordinate.x2 = pageX;
        positionObject.theMouseMoveCoordinate.y2 = pageY;

        let deltaX =
          positionObject.theMouseMoveCoordinate.x2 -
          positionObject.theMouseDownCoordinate.x1;

        if (currentSquareLeftValue === 0) {
          positionObject.widthMovementNumber = deltaX;

          // positionObject.heightMovementNumber =
          //   positionObject.theMouseMoveCoordinate.y2 -
          //   positionObject.theMouseDownCoordinate.y1;

          square.style.left = `${positionObject.widthMovementNumber}px`;
          return;
        }

        if (currentSquareLeftValue >= 200) {
          positionObject.widthMovementNumber = currentSquareLeftValue;

          // console.log("deltaX: ", deltaX);
          console.log(pageX);
          // deltaX =

          square.style.left = `${positionObject.widthMovementNumber}px`;

          return;
        }

        if (currentSquareLeftValue !== 0) {
          positionObject.widthMovementNumber = deltaX;

          square.style.left = `${positionObject.widthMovementNumber}px`;

          return;
        }
      }
    };
  }

  function main() {
    const square = document.getElementsByClassName(classes.square)[0];
    dragTheSquare(square);
  }

  main();
})();
