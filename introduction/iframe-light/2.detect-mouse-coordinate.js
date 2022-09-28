(function () {
  const classes = {
    title: "title",
  };

  function detectMouseCoordinate() {
    window.onmousemove =
      /**
       *
       * @param {MouseEvent} event
       */
      function (event) {
        const { pageX: x, pageY: y } = event;
        // console.log(`(${x},${y})`);
      };
  }

  function main() {
    detectMouseCoordinate();
  }

  main();
})();
