(function () {
  const classes = {
    active: "active",
    layerInfo: "layerInfo",
    layerWater: "layerWater",
    infoLitter: "infoLitter",
    bottleOfWater250ml: "bottleOfWater250ml",
  };

  /**
   *
   * @param {HTMLElement} element
   * @param {string} className
   */
  function wasElementHasClassName(element, className) {
    let ret = false;

    for (let i = element.classList.length - 1; i >= 0; --i) {
      if (element.classList[i].includes(className)) {
        ret = true;
        break;
      }
    }

    return ret;
  }

  /**
   *
   * @param {HTMLElement[]} bottleOfWater250mls
   * @param {HTMLElement} layerInfo
   * @param {HTMLElement} layerWater
   * @param {HTMLElement} infoLitter
   *
   */
  function bottleOfWater250mlsOnclick(
    bottleOfWater250mls,
    layerInfo,
    layerWater,
    infoLitter
  ) {
    for (let i = bottleOfWater250mls.length - 1; i >= 0; --i) {
      const element = bottleOfWater250mls[i];
      element.onclick = function () {
        if (i === bottleOfWater250mls.length - 1) {
          element.classList.toggle(classes.active);
        }

        if (
          bottleOfWater250mls[i + 1] !== undefined &&
          !bottleOfWater250mls[i + 1].classList.contains(classes.active) &&
          element.classList.contains(classes.active)
        ) {
          element.classList.remove(classes.active);
          infoHandler(bottleOfWater250mls, layerInfo, layerWater, infoLitter);

          return;
        }

        if (
          bottleOfWater250mls[i + 1] !== undefined &&
          !bottleOfWater250mls[i + 1].classList.contains(classes.active) &&
          !element.classList.contains(classes.active)
        ) {
          element.classList.add(classes.active);
        }

        for (let j = i - 1; j >= 0; --j) {
          if (!wasElementHasClassName(bottleOfWater250mls[j], classes.active)) {
            bottleOfWater250mls[j].classList.add(classes.active);
          }
        }

        for (let k = bottleOfWater250mls.length - 1; k >= i + 1; --k) {
          bottleOfWater250mls[k].classList.remove(classes.active);
        }

        infoHandler(bottleOfWater250mls, layerInfo, layerWater, infoLitter);
      };
    }
  }

  /**
   *
   * @param {HTMLElement[]} bottleOfWater250mls
   * @param {HTMLElement} infoLitter
   *
   */
  function calculateInfoLitRemain(bottleOfWater250mls, infoLitter) {
    /**
     * Problem: Calculate Info Lit Remain
     *
     * Understanding The Problem
     * + active length min: 0
     * + active length max: 8
     * + Lit min: 0
     * + Lit max: 2
     *
     * + active 0 - lit 0
     * + active 8 - lit 2
     *
     * Approach
     * + active 0 - 0 lit ?
     *   + x0 = 0 x 2 / 8
     * + active 1 - x1 lit ?
     *   + x1 = 1 x 2 / 8
     * + active 2 - x2 lit ?
     *   + x2 = 2 x 2 / 8
     * + active 3 - x3 lit ?
     *   + x3 = 3 x 2 / 8
     * + active 4 - x4 lit ?
     *   + x4 = 4 x 2 / 8
     * + active 5 - x5 lit ?
     *   + x5 = 5 x 2 / 8
     * + active 6 - x6 lit ?
     *   + x6 = 6 x 2 / 8
     * + active 7 - x7 lit ?
     *   + x7 = 7 x 2 / 8
     * + active 8 - 2 lit ?
     *   + x8 = 8 x 2 / 8
     *
     * Equation
     * active(i) = i * LitMax / ActiveMax
     *
     * Why do you have that equation?
     * -> You have that equation because
     * you tried something and watch
     * the result, the result is correct.
     *
     * That equation is an abstract of
     * solved one real world problem.
     *
     * One hundred percent done!
     *
     *
     *
     * + step 1: get active min - done
     * + step 2: get active max - done
     * + step 3: get lit min - done
     * + step 4: get lit max - done
     * + step 5: get current bottle active - done
     * + step 6: apply the equation - done
     * + step 7: display the result - done
     * + step 8: refactor code - done
     *
     *
     *
     */
    const activeMax = bottleOfWater250mls.length;
    const litMax = 2;

    let currentBottleActive = 0;

    for (let i = bottleOfWater250mls.length - 1; i >= 0; --i) {
      if (bottleOfWater250mls[i].classList.contains(classes.active)) {
        currentBottleActive = i + 1;
        break;
      }
    }

    let ret = (currentBottleActive * litMax) / activeMax;

    infoLitter.innerHTML = `${ret}L`;
  }

  /**
   *
   * @param {HTMLElement[]} bottleOfWater250mls
   * @param {HTMLElement} layerWater
   *
   */
  function calculatePercent(bottleOfWater250mls, layerWater) {
    /**
     * Problem: Calculate Percent
     *
     * Understanding The Problem
     * + active min: 0
     * + active max: 8
     * + percent min: 0
     * + percent max: 100
     *
     * + active 0 - percent 0
     * + active 8 - percent 100
     *
     * Approach
     * + active 0 - percent 0
     * + active 1 - percent x1
     *   + x1 = 1 x 100 / 8
     * + active 2 - percent x2
     *   + x2 = 2 x 100 / 8
     * + active 8 - percent 100
     *
     * Equation
     * active(i) = i x PercentMax / ActiveMax
     *
     *
     *
     */
    const activeMax = bottleOfWater250mls.length;
    const percentMax = 100;
    let currentActive = 0;

    for (let i = bottleOfWater250mls.length - 1; i >= 0; --i) {
      if (bottleOfWater250mls[i].classList.contains(classes.active)) {
        currentActive = i + 1;
        break;
      }
    }

    let ret = (currentActive * percentMax) / activeMax;

    layerWater.innerHTML = `${ret}%`;
  }

  /**
   *
   * @param {HTMLElement[]} bottleOfWater250mls
   * @param {HTMLElement} layerInfo
   * @param {HTMLElement} layerWater
   * @param {HTMLElement} infoLitter
   *
   */
  function infoHandler(bottleOfWater250mls, layerInfo, layerWater, infoLitter) {
    /**
     * Problem: Info Handler
     * + calculate info lit remain - done
     * + calculate percent - done
     * + calculate layer info height
     * + calculate layer water height
     *
     *
     */
    calculateInfoLitRemain(bottleOfWater250mls, infoLitter);
    calculatePercent(bottleOfWater250mls, layerWater);
  }

  function main() {
    const bottleOfWater250mls = window.document.getElementsByClassName(
      classes.bottleOfWater250ml
    );

    const layerInfo = window.document.getElementsByClassName(
      classes.layerInfo
    )[0];

    const layerWater = window.document.getElementsByClassName(
      classes.layerWater
    )[0];

    const infoLitter = window.document.getElementsByClassName(
      classes.infoLitter
    )[0];

    bottleOfWater250mlsOnclick(
      bottleOfWater250mls,
      layerInfo,
      layerWater,
      infoLitter
    );
  }

  main();
})();
