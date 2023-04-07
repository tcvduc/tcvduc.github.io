(function () {
  const classes = {
    buttonMenu: "buttonMenu",
  };

  /**
   *
   * @param {HTMLElement} buttonMenu
   */
  function handleButtonMenuOnclick(buttonMenu) {
    buttonMenu.onclick = function () {};
  }

  function main() {
    const buttonMenu = window.document.getElementsByClassName(
      classes.buttonMenu
    )[0];

    handleButtonMenuOnclick(buttonMenu);
  }

  main();
})();
