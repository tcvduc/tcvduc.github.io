(function () {
  const classes = {
    circle: "circle",
    progress: "progress",
    circle: "circle",
    buttonPrevious: "buttonPrevious",
    buttonNext: "buttonNext",
    active: "active",
    disabled: "disabled",
  };

  let currentCircleActiveOrder = 1;
  let minimumCircleActiveOrder = 1;
  let maximumCircleActiveOrder = document.getElementsByClassName(
    classes.circle
  ).length;

  /**
   *
   * @param {HTMLElement} buttonPrevious
   * @param {HTMLElement} buttonNext
   * @param {HTMLElement} progress
   * @param {HTMLElement[]} circles
   *
   */
  function buttonPreviousProcess(
    buttonPrevious,
    buttonNext,
    progress,
    circles
  ) {
    buttonPrevious.onclick = function () {
      const ariaDisabled = buttonPrevious.ariaDisabled;
      const regex = /true/gm;

      if (regex.test(ariaDisabled)) {
        return;
      }

      currentCircleActiveOrder--;

      if (currentCircleActiveOrder <= minimumCircleActiveOrder) {
        currentCircleActiveOrder = minimumCircleActiveOrder;
      }

      progressProcess(buttonNext, buttonPrevious, progress, circles);
    };
  }

  /**
   *
   * @param {HTMLElement} buttonNext
   * @param {HTMLElement} buttonPrevious
   * @param {HTMLElement} progress
   * @param {HTMLElement[]} circles
   *
   */
  function buttonNextProcess(buttonNext, buttonPrevious, progress, circles) {
    buttonNext.onclick = function () {
      currentCircleActiveOrder++;

      if (currentCircleActiveOrder >= maximumCircleActiveOrder) {
        currentCircleActiveOrder = maximumCircleActiveOrder;
      }

      progressProcess(buttonNext, buttonPrevious, progress, circles);
    };
  }

  /**
   *
   * @param {HTMLElement} buttonNext
   * @param {HTMLElement} buttonPrevious
   * @param {HTMLElement} progress
   * @param {HTMLElement[]} circles
   *
   */
  function progressProcess(buttonNext, buttonPrevious, progress, circles) {
    for (let i = circles.length - 1; i >= 0; --i) {
      if (currentCircleActiveOrder > i) {
        circles[i].classList.add(classes.active);
      }

      if (currentCircleActiveOrder <= i) {
        circles[i].classList.remove(classes.active);
      }
    }

    if (currentCircleActiveOrder > minimumCircleActiveOrder) {
      buttonPrevious.ariaDisabled = false;

      if (currentCircleActiveOrder === maximumCircleActiveOrder) {
        buttonNext.ariaDisabled = true;
      }

      if (currentCircleActiveOrder < maximumCircleActiveOrder) {
        buttonNext.ariaDisabled = false;
      }
    }

    if (currentCircleActiveOrder === minimumCircleActiveOrder) {
      buttonPrevious.ariaDisabled = true;
    }

    const equation =
      ((currentCircleActiveOrder - 1) / (circles.length - 1)) * 100;
    progress.style.height = equation + "%";
  }

  function main() {
    const circles = document.getElementsByClassName(classes.circle);
    const progress = document.getElementsByClassName(classes.progress)[0];
    const buttonPrevious = document.getElementsByClassName(
      classes.buttonPrevious
    )[0];
    const buttonNext = document.getElementsByClassName(classes.buttonNext)[0];

    buttonPreviousProcess(buttonPrevious, buttonNext, progress, circles);
    buttonNextProcess(buttonNext, buttonPrevious, progress, circles);
  }

  main();
})();
