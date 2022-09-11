(function () {
  const classes = {
    myCanvas: "myCanvas",
  };

  /**
   *
   * @param {HTMLCanvasElement} myCanvas
   */
  function initCanvas(myCanvas) {
    myCanvas.width = 350;
    myCanvas.height = 700;
  }

  /**
   *
   * @param {Car} car
   * @param {HTMLCanvasElement} myCanvas
   *
   */
  function animate(car, myCanvas) {
    const ctx = myCanvas.getContext("2d");

    car.update();
    car.draw(ctx);
  }

  function main() {
    const myCanvas = document.getElementsByClassName(classes.myCanvas)[0];
    const car = new Car();

    initCanvas(myCanvas);
    animate(car, myCanvas);
  }

  main();
})();
