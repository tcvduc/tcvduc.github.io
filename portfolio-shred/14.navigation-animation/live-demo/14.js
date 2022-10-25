(function () {
  const classes = {
    active: "active",
    navigation: "navigation",
    listLink: "listLink",
    displayNone: "displayNone",
    navigateIcon: "navigateIcon",
    line1: "line1",
    line2: "line2",
  };

  /**
   *
   * @param {HTMLElement} navigateIcon
   * @param {HTMLElement} navigation
   * @param {HTMLElement} listLink
   * @param {HTMLElement} line1
   * @param {HTMLElement} line2
   *
   *
   *
   *
   */
  function navigateIconOnclick(
    navigateIcon,
    navigation,
    listLink,
    line1,
    line2
  ) {
    navigateIcon.onclick = function () {
      navigation.classList.toggle(classes.active);

      line1.classList.toggle(classes.active);
      line2.classList.toggle(classes.active);
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
    const navigateIcon = window.document.getElementsByClassName(
      classes.navigateIcon
    )[0];

    navigateIconOnclick(navigateIcon, navigation, listLink, line1, line2);
  }

  main();
})();
