(function () {
  const classes = {
    search: "search",
    btn: "btn",
    input: "input",
    active: "active",
  };

  /**
   *
   * @param {HTMLElement} btn
   * @param {HTMLElement} input
   * @param {HTMLElement} search
   *
   */
  function btnOnclick(btn, input, search) {
    btn.onclick = function () {
      search.classList.toggle(classes.active);
      input.focus();
    };
  }

  function main() {
    const search = document.getElementsByClassName(classes.search)[0];
    const btn = document.getElementsByClassName(classes.btn)[0];
    const input = document.getElementsByClassName(classes.input)[0];

    btnOnclick(btn, input, search);
  }

  main();
})();
