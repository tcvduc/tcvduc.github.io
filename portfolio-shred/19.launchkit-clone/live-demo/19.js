(function () {
  const classes = {
    buttonMenu: "buttonMenu",
    barContent: "barContent",
    bar1: "bar1",
    bar2: "bar2",
    bar3: "bar3",
    moveBar3: "moveBar3",
    bar1Move: "bar1Move",
    bar2Move: "bar2Move",
    bar3Move: "bar3Move",
    displayNone: "displayNone",
    moveBarContent: "moveBarContent",
  };

  /**
   *
   * @param {HTMLElement} buttonMenu
   * @param {HTMLElement} bar1
   * @param {HTMLElement} bar2
   * @param {HTMLElement} bar3
   * @param {HTMLElement} barContent
   *
   *
   */
  function handleButtonMenuOnclick(buttonMenu, bar1, bar2, bar3, barContent) {
    buttonMenu.onclick = function () {
      bar3.classList.toggle(classes.bar3Move);
      bar1.classList.toggle(classes.bar1Move);
      bar2.classList.toggle(classes.bar2Move);
      barContent.classList.toggle(classes.moveBarContent);
    };
  }

  function main() {
    const buttonMenu = window.document.getElementsByClassName(
      classes.buttonMenu
    )[0];
    const bar1 = window.document.getElementsByClassName(classes.bar1)[0];
    const bar2 = window.document.getElementsByClassName(classes.bar2)[0];
    const bar3 = window.document.getElementsByClassName(classes.bar3)[0];
    const barContent = window.document.getElementsByClassName(
      classes.barContent
    )[0];
    handleButtonMenuOnclick(buttonMenu, bar1, bar2, bar3, barContent);
  }

  main();
})();
