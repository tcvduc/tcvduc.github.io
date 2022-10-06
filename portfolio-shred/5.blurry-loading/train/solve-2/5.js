(function () {
  const classes = {
    layer: "layer",
    loadingNumber: "loadingNumber",
  };

  let blurryNumber = 30;

  /**
   *
   * @param {HTMLElement} loadingNumber
   * @param {HTMLElement} layer
   */
  function windowOnload(loadingNumber, layer) {
    let delta1 = 1;
    let delta2 = 100 / blurryNumber;
    let loading = 0;

    window.onload = function () {
      const interval = window.setInterval(function () {
        if (blurryNumber === 0) {
          window.clearInterval(interval);
          return;
        }

        blurryNumber -= delta1;
        loading += delta2;

        layer.style.filter = `blur(${blurryNumber}px)`;
        loadingNumber.innerHTML = `${loading.toFixed(0)}%`;
      }, 100);
    };
  }

  function main() {
    const loadingNumber = document.getElementsByClassName(
      classes.loadingNumber
    )[0];

    const layer = document.getElementsByClassName(classes.layer)[0];

    windowOnload(loadingNumber, layer);
  }

  main();
})();
