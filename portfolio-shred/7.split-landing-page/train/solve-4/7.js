(function () {
  const classes = {
    buttonBuyNow1: "buttonBuyNow1",
    buttonBuyNow2: "buttonBuyNow2",
    layer: "layer",
    square1: "square1",
    square2: "square2",
    square1Hover: "square1Hover",
    square2Hover: "square2Hover",
  };

  /**
   *
   * @param {HTMLElement} square1
   * @param {HTMLElement} layer
   *
   */
  function square1Process(square1, layer) {
    square1.onmouseover = function () {
      layer.classList.add(classes.square1Hover);
    };

    square1.onmouseleave = function () {
      layer.classList.remove(classes.square1Hover);
    };
  }

  /**
   *
   * @param {HTMLElement} square2
   * @param {HTMLElement} layer
   *
   */
  function square2Process(square2, layer) {
    square2.onmouseover = function () {
      layer.classList.add(classes.square2Hover);
    };

    square2.onmouseleave = function () {
      layer.classList.remove(classes.square2Hover);
    };
  }

  function main() {
    const buttonBuyNow1 = document.getElementsByClassName(
      classes.buttonBuyNow1
    )[0];

    const buttonBuyNow2 = document.getElementsByClassName(
      classes.buttonBuyNow2
    )[0];

    const layer = document.getElementsByClassName(classes.layer)[0];

    const square1 = document.getElementsByClassName(classes.square1)[0];
    const square2 = document.getElementsByClassName(classes.square2)[0];

    square1Process(square1, layer);
    square2Process(square2, layer);
  }

  main();
})();
