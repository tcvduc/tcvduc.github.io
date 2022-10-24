(function () {
  const classes = {
    active: "active",
    navigation: "navigation",
    listLink: "listLink",
    displayNone: "displayNone",
    svgNavigationIcon: "svgNavigationIcon",
    line1: "line1",
    line2: "line2",
  };

  /**
   *
   * @param {HTMLElement} navigation
   * @param {HTMLElement} listLink
   * @param {HTMLElement} line1
   * @param {HTMLElement} line2
   *
   *
   *
   */
  function navigationOnclick(navigation, listLink, line1, line2) {
    navigation.onclick = function () {
      line1.classList.toggle(classes.active);
      line2.classList.toggle(classes.active);

      // navigation.classList.toggle(classes.active);
      // listLink.classList.toggle(classes.displayNone);
    };
  }

  function main() {
    const navigation = window.document.getElementsByClassName(
      classes.navigation
    )[0];

    const listLink = window.document.getElementsByClassName(
      classes.listLink
    )[0];

    const line1 = window.document.getElementsByClassName(classes.line1)[0];
    const line2 = window.document.getElementsByClassName(classes.line2)[0];

    navigationOnclick(navigation, listLink, line1, line2);
  }

  main();
})();
