(function () {
  const classes = {
    circle: "circle",
    progress: "progress",
    buttonPrevious: "buttonPrevious",
    buttonNext: "buttonNext",
    active: "active",
  };

  let currentCircleActiveIndex = 1;

  /**
   *
   * @param {HTMLElement} buttonPrevious
   * @param {HTMLElement[]} circles
   * @param {HTMLElement} progress
   * @param {HTMLElement} buttonNext
   *
   *
   */
  function buttonPreviousOnclickProcess(
    buttonPrevious,
    circles,
    progress,
    buttonNext
  ) {
    buttonPrevious.onclick = function () {
      currentCircleActiveIndex--;

      if (currentCircleActiveIndex <= 1) {
        currentCircleActiveIndex = 1;
      }

      processingProgressBar(progress, circles, buttonNext, buttonPrevious);
    };
  }

  /**
   *
   * @param {HTMLElement} buttonNext
   * @param {HTMLElement[]} circles
   * @param {HTMLElement} progress
   * @param {HTMLElement} buttonPrevious
   *
   *
   */
  function buttonNextOnclickProcess(
    buttonNext,
    circles,
    progress,
    buttonPrevious
  ) {
    buttonNext.onclick = function () {
      currentCircleActiveIndex++;

      if (currentCircleActiveIndex >= circles.length) {
        currentCircleActiveIndex = circles.length;
      }

      processingProgressBar(progress, circles, buttonNext, buttonPrevious);
    };
  }

  /**
   *
   * @param {HTMLElement} progress
   * @param {HTMLElement[]} circles
   * @param {HTMLElement} buttonNext
   * @param {HTMLElement} buttonPrevious
   *
   */
  function processingProgressBar(
    progress,
    circles,
    buttonNext,
    buttonPrevious
  ) {
    for (let i = circles.length - 1; i >= 0; --i) {
      if (i < currentCircleActiveIndex) {
        circles[i].classList.add(classes.active);
      }

      if (i >= currentCircleActiveIndex) {
        circles[i].classList.remove(classes.active);
      }
    }

    const equation =
      ((currentCircleActiveIndex - 1) / (circles.length - 1)) * 100;

    progress.style.width = equation + "%";

    if (currentCircleActiveIndex > 1) {
      buttonPrevious.disabled = false;
      if (currentCircleActiveIndex === circles.length) {
        buttonNext.disabled = true;
      }
      if (currentCircleActiveIndex !== circles.length) {
        buttonNext.disabled = false;
      }
    }

    if (currentCircleActiveIndex === 1) {
      buttonPrevious.disabled = true;
    }
  }

  function main() {
    const circles = document.getElementsByClassName(classes.circle);
    const progress = document.getElementsByClassName(classes.progress)[0];
    const buttonPrevious = document.getElementsByClassName(
      classes.buttonPrevious
    )[0];
    const buttonNext = document.getElementsByClassName(classes.buttonNext)[0];

    buttonPreviousOnclickProcess(buttonPrevious, circles, progress, buttonNext);
    buttonNextOnclickProcess(buttonNext, circles, progress, buttonPrevious);
  }

  main();
})();
