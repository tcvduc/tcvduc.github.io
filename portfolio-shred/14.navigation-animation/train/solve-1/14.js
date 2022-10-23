(function () {
  const classes = {
    active: "active",
    navigation: "navigation",
  };

  /**
   *
   * @param {HTMLElement} navigation
   */
  function navigationOnclick(navigation) {
    navigation.onclick = function () {
      navigation.classList.toggle(classes.active);
    };
  }

  function main() {
    const navigation = window.document.getElementsByClassName(
      classes.navigation
    )[0];

    navigationOnclick(navigation);
  }

  main();
})();
