/**
 * The Ret
 * + steps index:          0 1 2 3
 * + connect string index: 0 1 2
 *
 * + active step index:           0
 * + active connect string index: null
 *
 * + active step index:           1
 * + active connect string index: 0
 *
 * + active step index:           2
 * + active connect string index: 1
 *
 * + active step index:           3
 * + active connect string index: 2
 *
 * + Version 1
 *   + change the color
 *   + display immediately
 *
 * + Version 2
 *   + change the color
 *   + display smoother
 *   + the connect string change color from the left to right
 *
 *
 *
 *
 */

const classes = {
  buttonPrevious: "buttonPrevious",
  buttonNext: "buttonNext",
  activeStep: "activeStep",
  activeStepVersion2: "activeStepVersion2",
  disableStepVersion2: "disableStepVersion2",
  connectString: "connectString",
  activeConnectString: "activeConnectString",
  activeConnectStringVersion2Bar: "activeConnectStringVersion2Bar",
  step: "step",
  disable: "disable",
};

const globalVariableMaxStepIndex = 3;
const globalVariableMinStepIndex = 0;
const globalVariableTransitionDurationMillisecondUnit = 100;
let currentMaxStepIndex = -1;
const connectStringVelocity = 2.5;

/**
 *
 * @param {HTMLElement} button
 */
function disableButton(button) {
  button.disabled = true;
  button.classList.add(classes.disable);
}

/**
 *
 * @param {HTMLElement} button
 */
function activateButton(button) {
  button.disabled = false;
  button.classList.remove(classes.disable);
}

/**
 *
 * @param {HTMLElement} step
 */
function activeStepVersion1(step) {
  step.classList.add(classes.activeStep);
}

/**
 *
 * @param {HTMLElement} step
 */
function disableStepVersion1(step) {
  step.classList.remove(classes.activeStep);
}

/**
 *
 * @param {HTMLElement} step
 */
function disableStepVersion2(step) {
  step.classList.remove(classes.activeStepVersion2);
  step.classList.add(classes.disableStepVersion2);

  window.setTimeout(function () {
    step.classList.remove(classes.disableStepVersion2);
  }, globalVariableTransitionDurationMillisecondUnit);
}

/**
 *
 * @param {HTMLCollection} steps
 * @param {number} currentMaxStepIndex
 *
 */
function activeStepVersion2(steps, currentMaxStepIndex) {
  if (currentMaxStepIndex === 0) {
    steps[currentMaxStepIndex].classList.add(classes.activeStepVersion2);

    return;
  }

  return window.setTimeout(function () {
    steps[currentMaxStepIndex].classList.add(classes.activeStepVersion2);
  }, 150);
}

/**
 *
 * @param {HTMLElement} connectString
 */
function activeConnectStringVersion1(connectString) {
  connectString.children[0].classList.add(classes.activeConnectString);
}

/**
 *
 * @param {HTMLElement} activeConnectStringVersion2Bar
 */
function activeConnectStringVersion2(activeConnectStringVersion2Bar) {
  /**
   * + 1px -> 10px: 9s
   * + 1px -> 2px: ret s
   *   + ret = 1s
   *   + ret = 10 - 9 = 1
   * + 1px -> 10px have 9 `->`
   *   + ret = 9 / 9 = 1
   * + 1px -> 10px have x `->`
   *   + x = 10 - 1
   *   + x = 9
   *
   * + The Equation
   *   + a-px -> b-px: t-s
   *   + a-px -> (a + 1)-px: ret-s
   *   + a-px -> b-px have x-`->`
   *     + x = b - a
   *   + ret-s = x / t
   *
   * + The Example
   *   + 1-px -> 10-px: 9-s
   *   + 1-px -> (1 + 1)-px: ret-s
   *   + 1-px -> 2-px: ret-s
   *   + 1-px -> 10-px have x-`->`
   *     + x = 10 - 1
   *     + x = 9
   *   + ret-s = x / t
   *   + ret-s = 9 / 9
   *   + ret-s = 1-s
   *
   *
   *
   *
   *
   *
   *
   *
   *
   * + 1px -> 2px: 1s (1)
   * + 2px -> 3px: 1s (2)
   * + 3px -> 4px: 1s (3)
   * + 4px -> 5px: 1s (4)
   * + 5px -> 6px: 1s (5)
   * + 6px -> 7px: 1s (6)
   * + 7px -> 8px: 1s (7)
   * + 8px -> 9px: 1s (8)
   * + 9px -> 10px: 1s (9)
   * + ret = 9, 1s ?
   *
   * + 1px -> 3px: 2s
   * + 1 -> 2 -> 3
   *     1s   1s -> 2s
   *
   * + 1px -> 10px: 18s
   * + 1px -> 2px: ret s
   *   + 1px -> 10px have 9 `->`
   *   + ret = 18 / 9 = 2s
   * -> 1px -> 2px: 2s
   *
   * + The Equation
   *   + a-px -> b-px: t-s
   *   + a-px -> (a + 1)-px: ret-s
   *   + a-px -> b-px have x-`->`
   *     + x = b - a
   *   + ret-s = x / t
   *
   * + 1 -> 2
   *   + 1 -> 2
   *     +  1 `->`
   *
   * + 1 -> 3
   *   + 1 -> 2 -> 3
   *     + 2 `->`
   *
   * + 0 -> 1
   *   + 1 `->`
   * + 0 -> 2
   *   + 0 -> 1 -> 2
   *     + 2 `->`
   * + 0 -> 3
   *   + 0 -> 1 -> 2 -> 3
   *     + 3 `->`
   *
   *
   *
   *
   * + 0-px -> 100-px: 100-ms
   * + 0-px -> 1-px: ret-ms
   * + 0-px -> 100-px have x-`->`
   *   + x = b - a
   *   + x = 100 - 0
   *   + x = 100
   * + ret-s = x / t
   * + ret-s = 100 / 100
   * + ret-s = 1
   *
   * + Actual Work run time: 385ms
   *
   *
   *
   *
   *
   */
  let width = 0;
  const widthUnit = "%";
  const interval = window.setInterval(function () {
    if (width === 100) {
      activeConnectStringVersion2Bar.style.width = `${width}${widthUnit}`;
      window.clearInterval(interval);
      return;
    }

    activeConnectStringVersion2Bar.style.width = `${width}${widthUnit}`;

    width += connectStringVelocity;
  }, 0);
}

/**
 *
 * @param {HTMLElement} connectString
 */
function disableConnectStringVersion1(connectString) {
  connectString.classList.remove(classes.activeConnectString);
  console.log("connectString: ", connectString);
}

/**
 *
 * @param {HTMLElement} connectString
 */
function disableConnectStringVersion2(connectString) {
  const activeConnectStringVersion2Bar = connectString.children[0];
  let decreasingNumber = 100;

  console.log(activeConnectStringVersion2Bar);

  const interval = window.setInterval(function () {
    if (activeConnectStringVersion2Bar.style.width === 0) {
      activeConnectStringVersion2Bar.style.width = `${decreasingNumber}%`;
      window.clearInterval(interval);
      return;
    }

    decreasingNumber -= connectStringVelocity;
    activeConnectStringVersion2Bar.style.width = `${decreasingNumber}%`;
  }, 0);
}

/**
 *
 * @param {HTMLElement} buttonNext
 * @param {HTMLElement} buttonPrevious
 *
 */
function buttonNextAndButtonPreviousProcess(buttonNext, buttonPrevious) {
  const steps = document.getElementsByClassName(classes.step);
  const connectStrings = document.getElementsByClassName(classes.connectString);
  const activeConnectStringVersion2Bar = document.getElementsByClassName(
    classes.activeConnectStringVersion2Bar
  );

  buttonNext.onclick = function () {
    if (currentMaxStepIndex === globalVariableMaxStepIndex) {
      disableButton(buttonNext);

      return;
    }

    if (currentMaxStepIndex !== globalVariableMaxStepIndex) {
      currentMaxStepIndex++;
      activateButton(buttonPrevious);

      if (currentMaxStepIndex > -1 && currentMaxStepIndex !== 0) {
        activeConnectStringVersion2(
          activeConnectStringVersion2Bar[currentMaxStepIndex - 1]
        );

        activeStepVersion2(steps, currentMaxStepIndex);
      }

      if (currentMaxStepIndex === 0) {
        activeStepVersion2(steps, currentMaxStepIndex);
      }

      if (currentMaxStepIndex === globalVariableMaxStepIndex) {
        disableButton(buttonNext);

        return;
      }
    }
  };

  buttonPrevious.onclick = function () {
    if (currentMaxStepIndex === -1) {
      disableButton(buttonPrevious);
      return;
    }

    if (currentMaxStepIndex !== -1) {
      currentMaxStepIndex--;
      if (currentMaxStepIndex === -1) {
        disableButton(buttonPrevious);
        disableStepVersion2(steps[currentMaxStepIndex + 1]);
        return;
      }

      activateButton(buttonNext);

      disableStepVersion2(steps[currentMaxStepIndex + 1]);

      disableConnectStringVersion2(connectStrings[currentMaxStepIndex]);

      return;
    }
  };
}

function g() {
  const buttonNext = document.getElementsByClassName(classes.buttonNext)[0];
  const buttonPrevious = document.getElementsByClassName(
    classes.buttonPrevious
  )[0];

  buttonNextAndButtonPreviousProcess(buttonNext, buttonPrevious);
}

g();
