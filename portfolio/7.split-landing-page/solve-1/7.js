(function () {
  const classes = {
    width25Percent: "width-25-percent",
    width75Percent: "width-75-percent",
    column: "column",
    scale1dot2: "scale-1dot2",
    layerBackground1: "layer-background-1",
    layerBackground2: "layer-background-2",
  };

  /**
   *
   * @param {HTMLElement[]} columns
   * @param {HTMLElement} layerBackground1
   * @param {HTMLElement} layerBackground2
   *
   *
   *
   */
  function handleColumnOnMouseOver(
    columns,
    layerBackground1,
    layerBackground2
  ) {
    for (let i = columns.length - 1; i >= 0; --i) {
      columns[i].onmouseover = function () {
        for (let j = columns.length - 1; j >= 0; --j) {
          if (j !== i) {
            columns[j].classList.add(classes.width25Percent);
          }
        }

        if (i === 0) {
          layerBackground1.classList.add(classes.scale1dot2);
        }

        if (i === 1) {
          layerBackground2.classList.add(classes.scale1dot2);
        }

        columns[i].classList.add(classes.width75Percent);
      };

      columns[i].onmouseleave = function () {
        for (let k = columns.length - 1; k >= 0; --k) {
          if (k !== i) {
            columns[k].classList.remove(classes.width25Percent);
          }
        }

        if (i === 0) {
          layerBackground1.classList.remove(classes.scale1dot2);
        }

        if (i === 1) {
          layerBackground2.classList.remove(classes.scale1dot2);
        }

        columns[i].classList.remove(classes.width75Percent);
      };
    }
  }

  function main() {
    const columns = document.getElementsByClassName(classes.column);
    const layerBackground1 = document.getElementsByClassName(
      classes.layerBackground1
    )[0];
    const layerBackground2 = document.getElementsByClassName(
      classes.layerBackground2
    )[0];

    handleColumnOnMouseOver(columns, layerBackground1, layerBackground2);
  }

  main();
})();
