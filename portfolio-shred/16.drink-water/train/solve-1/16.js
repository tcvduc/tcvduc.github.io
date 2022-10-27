(function () {
  const classes = {
    active: "active",
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
   */
  function bottleOfWater250mlsOnclick(bottleOfWater250mls) {
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
      };
    }
  }

  function main() {
    const bottleOfWater250mls = window.document.getElementsByClassName(
      classes.bottleOfWater250ml
    );

    bottleOfWater250mlsOnclick(bottleOfWater250mls);
  }

  main();
})();
