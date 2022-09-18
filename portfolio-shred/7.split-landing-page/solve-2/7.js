(function () {
  const classes = {
    left: "left",
    right: "right",
    container: "container",
    hoverLeft: "hover-left",
    hoverRight: "hover-right",
  };

  /**
   *
   * @param {HTMLElement} left
   * @param {HTMLElement} container
   *
   *
   */
  function handleLeftElementOnMouseEnterAndOnMouseLeave(left, container) {
    left.onmouseenter = function () {
      container.classList.add(classes.hoverLeft);
    };

    left.onmouseleave = function () {
      container.classList.remove(classes.hoverLeft);
    };
  }

  /**
   *
   * @param {HTMLElement} right
   * @param {HTMLElement} container
   *
   */
  function handleRightElementOnMouseEnterAndOnMouseLeave(right, container) {
    right.onmouseover = function () {
      container.classList.add(classes.hoverRight);
    };

    right.onmouseleave = function () {
      container.classList.remove(classes.hoverRight);
    };
  }

  function main() {
    const left = document.getElementsByClassName(classes.left)[0];
    const right = document.getElementsByClassName(classes.right)[0];
    const container = document.getElementsByClassName(classes.container)[0];

    handleLeftElementOnMouseEnterAndOnMouseLeave(left, container);

    handleRightElementOnMouseEnterAndOnMouseLeave(right, container);
  }

  main();
})();
