(function () {
  const classes = {
    barSecond: "barSecond",
    buttonMode: "buttonMode",
    barMinute: "barMinute",
    active: "active",
    clock: "clock",
    centerPoint: "centerPoint",
    circleBarMinute: "circleBarMinute",
    circleBarHour: "circleBarHour",
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
    if (clock) {
      clock.onclick = function () {
        if (centerPoint) {
          toggleElementClassName(centerPoint, classes.active);
        }
      };
    }
  }

  function debugSecondMatchDegreeCase1() {
    /**
     * + Second: 1 -> 5
     *   + Second Minimum: 1
     *   + Second Maximum: 5
     * + Degree: 1 -> 10
     *   + Degree Minimum: 1
     *   + Degree Maximum: 10
     * + The Equation
     *   + delta = degree maximum / second maximum
     *   + degree increasing = second increasing x delta
     *
     * + step 1: increase the second from 1 to 5 - done
     * + step 2: use the equation increase the degree - done
     * + step 3: watch ret - done
     *
     *
     */
    const secondMaximum = 5;
    const degreeMaximum = 10;
    const delta = degreeMaximum / secondMaximum;
    let secondIncrease = 1;
    let secondIntervalTimeUnit = 1000;
    let degreeIncrease = 0;

    const interval = window.setInterval(function () {
      console.log(`${secondIncrease} - ${degreeIncrease}`);
      if (secondIncrease === secondMaximum) {
        return window.clearInterval(interval);
      }
      secondIncrease++;
      degreeIncrease = secondIncrease * delta;
    }, secondIntervalTimeUnit);
  }

  function debugSecondMatchDegreeCase2() {
    /**
     * + Second: 0 -> 59
     *   + Second Minimum: 0
     *   + Second Maximum: 59
     * + Degree: 0 -> 359
     *   + Degree Minimum: 0
     *   + Degree Maximum: 359
     * + The Equation
     *   + delta = degree maximum / second maximum
     *   + degree increasing = second increasing x delta
     *
     * + step 1: increase the second from 0 to 59
     * + step 2: use the equation increase the degree
     * + step 3: watch ret
     *
     *
     */

    const secondIntervalTimeUnit = 100;
    const secondMaximum = 59;
    const degreeMaximum = 359;
    const delta = degreeMaximum / secondMaximum;

    let secondIncrease = 0;

    const interval = window.setInterval(function () {
      console.log("secondIncrease: ", secondIncrease);
      secondIncrease++;
      if (secondIncrease === secondMaximum) {
        console.log("secondIncrease: ", secondIncrease);
        secondIncrease = 0;
      }
    }, secondIntervalTimeUnit);
  }

  /**
   *
   * @param {HTMLElement} barSecond
   */
  function barSecondClockWiseRotateActive(barSecond) {
    if (barSecond) {
      /**
       * Problem: Second Bar Rotate Clock Wise
       *
       * + Second: 0 -> 59
       *   + second minimum: 0
       *   + second maximum: 59
       * + Degree: 0 -> 359
       *   + degree minimum: 0
       *   + degree maximum: 359
       * + The Equation
       *   + delta = degree maximum / second maximum
       *   + degree increasing = second increasing x delta
       *
       *
       * -> How to make second and degree match?
       * + Second: 1 -> 5
       *   + Second Minimum: 1
       *   + Second Maximum: 5
       * + Degree: 1 -> 10
       *   + Degree Minimum: 1
       *   + Degree Maximum: 10
       *
       * + Second: 1
       *   + Degree: 2 = second x 2
       *     + second: 1
       *     + 2: Degree Maximum / Second Maximum
       * + Second: 2
       *   + Degree: 4 = second x 2
       *     + second: 2
       *     + 2: Degree Maximum / Second Maximum
       * + Second: 3
       *   + Degree: 6 = second x 2
       * + Second: 4
       *   + Degree: 8 = second x 2
       * + Second: 5
       *   + Degree: 10 = second x 2
       *
       *
       *
       * -> delta = Degree Maximum / Second Maximum
       *
       * The Equation
       * + delta = Degree Maximum / Second Maximum
       * + DegreeIncreasing = SecondIncreasing x delta
       *
       *
       *
       *
       *
       */
      debugSecondMatchDegreeCase2();

      let oneSecondIntervalUnit = 1000;
      let oneSecondIntervalUnitFastDebug = 100;

      let secondTimeUnit = 0;
      let minuteTimeUnit = 58;
      let hourTimeUnit = 22;

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

        // console.log("Second: ", secondTimeUnit);

        // console.log(`${hourTimeUnit}:${minuteTimeUnit}:${secondTimeUnit}`);
      }, oneSecondIntervalUnitFastDebug);
    }
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

    if (element) {
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
  }

  /**
   *
   * @param {HTMLElement} circleBarMinute
   */
  function circleBarMinuteOnclick(circleBarMinute) {
    if (circleBarMinute) {
      circleBarMinute.onclick = function () {
        toggleElementClassName(circleBarMinute, classes.active);
      };
    }
  }

  /**
   *
   * @param {HTMLElement} circleBarHour
   */
  function circleBarHourOnclick(circleBarHour) {
    if (circleBarHour) {
      circleBarHour.onclick = function () {
        toggleElementClassName(circleBarHour, classes.active);
      };
    }
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
    const circleBarMinute = window.document.getElementsByClassName(
      classes.circleBarMinute
    )[0];
    const circleBarHour = window.document.getElementsByClassName(
      classes.circleBarHour
    )[0];

    clockOnclick(clock, barMinute, centerPoint);
    circleBarMinuteOnclick(circleBarMinute);
    circleBarHourOnclick(circleBarHour);

    barSecondClockWiseRotateActive(barSecond);

    dragElement(barMinute);
  }

  main();
})();
