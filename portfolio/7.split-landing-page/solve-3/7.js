(function () {
  const classes = {
    left: "left",
    right: "right",
    container: "container",
    leftHover: "leftHover",
    rightHover: "rightHover",
  };

  /**
   *
   * @param {HTMLElement} left
   * @param {HTMLElement} container
   *
   */
  function leftProcess(left, container) {
    left.onmouseenter = function () {
      container.classList.add(classes.leftHover);
    };

    left.onmouseleave = function () {
      container.classList.remove(classes.leftHover);
    };
  }

  /**
   *
   * @param {HTMLElement} right
   * @param {HTMLElement} container
   *
   */
  function rightProcess(right, container) {
    right.onmouseenter = function () {
      container.classList.add(classes.rightHover);
    };

    right.onmouseleave = function () {
      container.classList.remove(classes.rightHover);
    };
  }

  function main() {
    const left = document.getElementsByClassName(classes.left)[0];
    const right = document.getElementsByClassName(classes.right)[0];
    const container = document.getElementsByClassName(classes.container)[0];

    leftProcess(left, container);
    rightProcess(right, container);
  }

  main();
})();
