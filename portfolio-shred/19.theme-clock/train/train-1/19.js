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

      if (hourTimeUnit === maxHourTimeUnit) {
        hourTimeUnit = 0;
      }

      // console.log(`${hourTimeUnit}:${minuteTimeUnit}:${secondTimeUnit}`);
    }, oneSecondIntervalUnitFastDebug);
  }
  /**
   *
   * @param {Array} a
   * @param {any} element
   */
  function push(a, element) {
    /**
     * + a = [1,2,3,4,5]
     * + element = 6
     * + ret = [1,2,3,4,5,6]
     *
     */
    const ret = new Array(a.length + 1);

    for (let i = ret.length - 1 - 1; i >= 0; --i) {
      ret[i] = a[i];
    }

    ret[ret.length - 1] = element;

    return ret;
  }

  /**
   *
   * @param {Array} a
   */
  function reverseArray(a) {
    /**
     * -------0 1 2
     * + a = [1,2,3]
     *
     * ---------0 1 2
     * + ret = [3,2,1]
     *
     * + ret[0] = a[2]
     * + ret[1] = a[1]
     * + ret[2] = a[0]
     *
     *
     * + i: length -> 0
     * + ret[i] = a[length - i - 1]
     */

    const length = a.length;
    const ret = new Array(length);

    for (let i = length - 1; i >= 0; --i) {
      ret[i] = a[length - i - 1];
    }

    return ret;
  }

  /**
   *
   * @param {Array} a
   */
  function pop(a) {
    /**
     * -------0 1 2 3
     * + a = [1,2,3,4]
     * ---------0 1 2
     * + ret = [1,2,3]
     *
     */
    const ret = new Array(a.length - 1);

    for (let i = ret.length - 1; i >= 0; --i) {
      ret[i] = a[i];
    }

    return ret;
  }

  /**
   *
   * @param {Array} a
   * @param {string} factor
   */
  function join(a, factor) {
    /**
     * + a = ['1','0']
     * + factor = '-'
     * + ret = "1-0"
     *
     */
    let ret = "";

    for (let i = 0; i <= a.length - 1; ++i) {
      if (i === a.length - 1) {
        ret += a[i];
        break;
      }

      ret += a[i] + factor;
    }

    return ret;
  }

  /**
   *
   * @param {string} pixel
   */
  function getPixelNumber(pixel) {
    /**
     * --0123
     * + 10px
     * + length: 4
     * + traverse to 1:
     *   + 1 = 4 - 1 - 1 - 1
     *   + 1 = length - 1 - 1 -1
     * + ret: 10
     *
     */
    let ret = [];
    const length = pixel.length;

    for (let i = length - 1 - 1 - 1; i >= 0; --i) {
      ret = push(ret, pixel[i]);
    }

    ret = reverseArray(ret);

    ret = join(ret, "");

    return +ret;
  }

  /**
   *
   * @param {HTMLElement} element
   */
  function dragElement(element) {
    let x1 = 0;
    let x2 = 0;
    let y1 = 0;
    let y2 = 0;

    element.onmousedown =
      /**
       *
       * @param {MouseEvent} event
       */
      function (event) {
        const { pageX, pageY } = event;
        x1 = pageX;
        y1 = pageY;

        window.onmousemove =
          /**
           *
           * @param {MouseEvent} event
           */
          function (event) {
            const { pageX, pageY } = event;
            x2 = pageX;
            y2 = pageY;

            const deltaX = x2 - x1;
            x1 = x2;

            const elementLeftNumber = getPixelNumber(element.style.left);

            console.log("deltaX: ", deltaX);
            console.log("elementLeftNumber: ", elementLeftNumber);

            const s = `calc(50% + ${elementLeftNumber + deltaX}px)`;

            console.log("s: ", s);
            element.style.left = `calc(50% + ${
              elementLeftNumber + deltaX
            }px)px`;
          };

        window.onmouseup =
          /**
           *
           * @param {MouseEvent} event
           */
          function (event) {
            window.onmousemove = null;
            element.onmousedown = null;
          };
      };
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

    dragElement(barMinute);
  }

  main();
})();
