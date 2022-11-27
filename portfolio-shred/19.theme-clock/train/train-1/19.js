(function () {
  const classes = {
    buttonMode: "buttonMode",
    barMinute: "barMinute",
    active: "active",
    clock: "clock",
  };

  const modeColors = {
    darkMode: function () {},
    lightMode: function () {},
  };

  /**
   *
   * @param {HTMLElement} element
   * @param {string} className
   *
   */
  function toggleElementClassName(element, className) {
    const regex = new RegExp(className, "g");
    const elementClasses = element.classList;

    return regex.test(elementClasses)
      ? element.classList.remove(className)
      : element.classList.add(className);
  }

  /**
   *
   * @param {HTMLElement} clock
   * @param {HTMLElement} barMinute
   *
   */
  function clockOnclick(clock, barMinute) {
    clock.onclick = function () {
      toggleElementClassName(barMinute, classes.active);
    };
  }

  function main() {
    const clock = window.document.getElementsByClassName(classes.clock)[0];
    const barMinute = window.document.getElementsByClassName(
      classes.barMinute
    )[0];

    clockOnclick(clock, barMinute);
  }

  main();
})();
