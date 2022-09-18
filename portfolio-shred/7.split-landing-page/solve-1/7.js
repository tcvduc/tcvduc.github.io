(function () {
  const classes = {
    width80Percent: "width-80-percent",
    width40Percent: "width-40-percent",
    column1: "column-1",
    column2: "column-2",
    zIndex10: "z-index-10",
    zIndex15: "z-index-15",
    scale1dot2: "scale-1dot2",
    layerBackground1: "layer-background-1",
    layerBackground2: "layer-background-2",
  };

  class Coordinate {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  }

  /**
   *
   * @param {HTMLElement} element
   */
  function getElementArea(element) {
    const width = element.getBoundingClientRect().width;
    const height = element.getBoundingClientRect().height;
    const offsetLeft = element.getBoundingClientRect().x;
    const offsetTop = element.getBoundingClientRect().y;

    const minimumElementAreaCoordinate = [offsetLeft, offsetTop];
    const maximumElementAreaCoordinate = [
      offsetLeft + width,
      offsetTop + height,
    ];

    return {
      minimumElementAreaCoordinate,
      maximumElementAreaCoordinate,
    };
  }

  /**
   *
   * @param {HTMLElement} column1
   * @param {Coordinate} mouseCoordinate
   */
  function detectWasMouseInColumn1Area(column1, mouseCoordinate) {
    const column1Area = getElementArea(column1);

    const [x1, y1] = [
      column1Area.minimumElementAreaCoordinate[0],
      column1Area.minimumElementAreaCoordinate[1],
    ];

    const [x2, y2] = [
      column1Area.maximumElementAreaCoordinate[0],
      column1Area.maximumElementAreaCoordinate[1],
    ];

    let flag1 = false;
    let flag2 = false;

    if (mouseCoordinate.x >= x1 && mouseCoordinate.x <= x2) {
      flag1 = true;
    }

    if (mouseCoordinate.y >= y1 && mouseCoordinate.y <= y2) {
      flag2 = true;
    }

    if (flag1 && flag2) {
      return true;
    }

    if (!(flag1 && flag2)) {
      return false;
    }
  }

  /**
   *
   * @param {HTMLElement} column2
   * @param {Coordinate} mouseCoordinate
   *
   *
   */
  function detectWasMouseInColumn2Area(column2, mouseCoordinate) {
    const column2Area = getElementArea(column2);

    const [x1, y1] = [
      column2Area.minimumElementAreaCoordinate[0],
      column2Area.minimumElementAreaCoordinate[1],
    ];

    const [x2, y2] = [
      column2Area.maximumElementAreaCoordinate[0],
      column2Area.maximumElementAreaCoordinate[1],
    ];

    const [x, y] = [mouseCoordinate.x, mouseCoordinate.y];

    let flag1 = false;
    let flag2 = false;

    if (x >= x1 && x <= x2) {
      flag1 = true;
    }

    if (y >= y1 && y <= y2) {
      flag2 = true;
    }

    if (flag1 && flag2) {
      return true;
    }

    if (!(flag1 && flag2)) {
      return false;
    }
  }

  /**
   *
   * @param {HTMLElement} element
   * @param {string} zIndex
   */
  function updateElementZIndex(element, zIndexClass) {
    element.classList.remove(classes.zIndex10);
    element.classList.remove(classes.zIndex15);

    element.classList.add(zIndexClass);
  }

  /**
   *
   * @param {HTMLElement} column1
   * @param {HTMLElement} column2
   * @param {HTMLElement} layerBackground1
   * @param {HTMLElement} layerBackground2
   *
   *
   *
   */
  function handleColumnOnMouseOver(
    column1,
    column2,
    layerBackground1,
    layerBackground2
  ) {
    let x = 0;
    let y = 0;
    let mouseCoordinateDebug = "";
    let mouseCoordinate = {
      x: 0,
      y: 0,
    };

    // detectColumn1Area(column1);

    window.onmousemove =
      /**
       *
       * @param {MouseEvent} event
       */
      function (event) {
        const { pageX, pageY } = event;

        x = pageX;
        y = pageY;

        mouseCoordinateDebug = `(${x},${y})`;

        mouseCoordinate.x = x;
        mouseCoordinate.y = y;

        // console.log(mouseCoordinate);

        const mouseInColumn1Area = detectWasMouseInColumn1Area(
          column1,
          mouseCoordinate
        );

        const mouseInColumn2Area = detectWasMouseInColumn2Area(
          column2,
          mouseCoordinate
        );

        if (mouseInColumn1Area) {
          column1.classList.remove(classes.width40Percent);
          column1.classList.add(classes.width80Percent);

          column2.classList.add(classes.width40Percent);
          column2.classList.remove(classes.width80Percent);

          // updateElementZIndex(column1, classes.zIndex15);
          // updateElementZIndex(column2, classes.zIndex10);

          return;
        }

        if (mouseInColumn2Area) {
          column1.classList.remove(classes.width80Percent);
          column1.classList.add(classes.width40Percent);

          column2.classList.add(classes.width80Percent);
          column2.classList.remove(classes.width40Percent);

          // updateElementZIndex(column1, classes.zIndex10);
          // updateElementZIndex(column2, classes.zIndex15);
        }
      };
  }

  function main() {
    const column1 = document.getElementsByClassName(classes.column1)[0];
    const column2 = document.getElementsByClassName(classes.column2)[0];

    const layerBackground1 = document.getElementsByClassName(
      classes.layerBackground1
    )[0];
    const layerBackground2 = document.getElementsByClassName(
      classes.layerBackground2
    )[0];

    handleColumnOnMouseOver(
      column1,
      column2,
      layerBackground1,
      layerBackground2
    );
  }

  main();
})();
