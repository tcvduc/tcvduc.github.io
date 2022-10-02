(function () {
  const classes = {
    layer: "layer",
    layerBlurry: "layerBlurry",
    loading: "loading",
  };

  /**
   *
   * @param {HTMLElement} layerBlurry
   * @param {HTMLElement} layer
   * @param {HTMLElement} loading
   */
  function layerBlurryOnload(layerBlurry, layer, loading) {
    /**
     * + blurry: 27
     *   + blurry -= 1
     *   + time: 100
     *
     * + percent: 0%
     *   + percent += x
     *   + time: 100
     *
     * + ret
     *   + blurry: 0
     *   + percent: 100%
     *
     * + 100 - 100ms - 0%
     * + 99  - 200ms - 1%
     * + 98  - 300ms - 2%
     * ...
     * + 2 - k1 - 98%
     * + 1 - k2 - 99%
     * + 0 - k3 - 100%
     *
     * + 100
     *   + 100 - 1
     *   + delta1 = 1
     * + 0%
     *   + (0 + 1) %
     *   + delta2 = 1
     *
     *
     * + blurry: 27 - 100ms - 0%
     * + blurry: 26 - 200ms - x1%
     * + blurry: 25 - 300ms - x2%
     * + blurry: 0 - 2800ms - 100%
     *
     * + The Essence
     *   + from 27 to 0
     *   + divide it into shreds
     *   + 27 - 26: 1 part
     *   + 26 - 25: 1 part
     *   + 25 - 24: 1 part
     *   ..
     *   + 1 - 0: 1 part
     * -> So does percent
     * + 100% divide this into 27 parts
     * + 100 / 27 = 100 / 27
     *
     * + Percent shreds ret
     *   + 1 part
     *     + 100 / 27
     *   + 2 part
     *     + 100 / 27 + 100 / 27
     *   + 3 part
     *     + 100 / 27 + 100 / 27 + 100 / 27
     *   ...
     *   + 27 part
     *     + 100 / 27 + .. + 100 / 27
     *     + (100 / 27) * 27
     *     + 100
     * -> delta = 100 / 27
     *
     *
     * + 27 - 1 = 26
     *  + 100 + 100 = 200
     *  + 100 * 2
     *  + 100 * (1 + 1)
     * + 27 - 2 = 25
     *  + 100 + 100 + 100 = 300
     *  + 100 * 3
     *  + 100 * (2 + 1)
     * -> 27 - 27 = 0
     *  + 100 * (27 + 1)
     *  + 100 * 28
     *  + 2800
     *
     *
     */
    window.onload = function () {
      let blurryVariable = 27;
      let delta = 100 / blurryVariable;
      let percent = 0;

      const interval = window.setInterval(function () {
        if (blurryVariable === 0) {
          window.clearInterval(interval);
          return;
        }

        blurryVariable -= 1;
        percent += delta;
        layer.style.filter = `blur(${blurryVariable}px)`;
        loading.innerHTML = `${percent.toFixed(0)}%`;
      }, 100);
    };
  }

  function main() {
    const layerBlurry = document.getElementsByClassName(classes.layerBlurry)[0];
    const layer = document.getElementsByClassName(classes.layer)[0];
    const loading = document.getElementsByClassName(classes.loading)[0];

    layerBlurryOnload(layerBlurry, layer, loading);
  }

  main();
})();
