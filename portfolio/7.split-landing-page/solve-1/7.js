(function () {
  const classes = {
    width25Percent: "width-25-percent",
    width75Percent: "width-75-percent",
    column: "column",
  };

  /**
   *
   * @param {HTMLElement[]} columns
   */
  function handleColumnOnMouseOver(columns) {
    for (let i = columns.length - 1; i >= 0; --i) {
      columns[i].onmouseover = function () {
        for (let j = columns.length - 1; j >= 0; --j) {
          if (j !== i) {
            columns[j].classList.add(classes.width25Percent);
          }
        }
        columns[i].classList.add(classes.width75Percent);
      };

      columns[i].onmouseleave = function () {
        for (let k = columns.length - 1; k >= 0; --k) {
          if (k !== i) {
            columns[k].classList.remove(classes.width25Percent);
          }
        }
        columns[i].classList.remove(classes.width75Percent);
      };
    }
  }

  function main() {
    const columns = document.getElementsByClassName(classes.column);

    handleColumnOnMouseOver(columns);
  }

  main();
})();
