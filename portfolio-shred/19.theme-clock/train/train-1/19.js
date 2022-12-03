(function () {
  const classes = {
    barSecond: "barSecond",
    buttonMode: "buttonMode",
    barMinute: "barMinute",
    active: "active",
    clock: "clock",
    centerPoint: "centerPoint",
  };

  const maxSecondTimeUnit = 60;
  const maxMinuteTimeUnit = 60;
  const maxHourTimeUnit = 24;

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
   * @param {HTMLElement} centerPoint
   *
   *
   *
   */
  function clockOnclick(clock, barMinute, centerPoint) {
    clock.onclick = function () {
      toggleElementClassName(centerPoint, classes.active);
    };
  }

  /**
   *
   * @param {HTMLElement} barSecond
   */
  function barSecondClockWiseRotateActive(barSecond) {
    let oneSecondIntervalUnit = 1000;
    let oneSecondIntervalUnitFastDebug = 1;

    let secondTimeUnit = 0;
    let minuteTimeUnit = 0;
    let hourTimeUnit = 0;

    const timeInterval = window.setInterval(function () {
      secondTimeUnit++;
      oneSecondIntervalUnit += 1000;
      if (secondTimeUnit === maxSecondTimeUnit) {
        secondTimeUnit = 0;
        minuteTimeUnit++;
      }

      if (minuteTimeUnit === maxMinuteTimeUnit) {
        minuteTimeUnit = 0;
        hourTimeUnit++;
      }

      console.log(`${hourTimeUnit}:${minuteTimeUnit}:${secondTimeUnit}`);
    }, oneSecondIntervalUnitFastDebug);
  }

  function main() {
    const clock = window.document.getElementsByClassName(classes.clock)[0];
    const barMinute = window.document.getElementsByClassName(
      classes.barMinute
    )[0];
    const centerPoint = window.document.getElementsByClassName(
      classes.centerPoint
    )[0];
    const barSecond = window.document.getElementsByClassName(
      classes.barSecond
    )[0];

    clockOnclick(clock, barMinute, centerPoint);
    barSecondClockWiseRotateActive(barSecond);
  }

  main();
})();
