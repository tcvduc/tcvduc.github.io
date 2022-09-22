(function () {
  const classes = {
    circle: "circle",
    progress: "progress",
    active: "active",
    buttonNext: "buttonNext",
    buttonPrevious: "buttonPrevious",
  };

  let currentCircleActive = 1;

  /**
   *
   * @param {HTMLElement} buttonNext
   * @param {HTMLElement} buttonPrevious
   * @param {HTMLElement} progress
   * @param {HTMLElement[]} circles
   *
   */
  function progressProcess(progress, circles, buttonNext, buttonPrevious) {
    for (let i = circles.length - 1; i >= 0; --i) {
      if (i < currentCircleActive) {
        circles[i].classList.add(classes.active);
      }

      if (i >= currentCircleActive) {
        circles[i].classList.remove(classes.active);
      }
    }

    const equation = ((currentCircleActive - 1) / (circles.length - 1)) * 100;
    progress.style.width = equation + "%";

    if (currentCircleActive > 1) {
      buttonPrevious.disabled = false;
      if (currentCircleActive === circles.length) {
        buttonNext.disabled = true;
      }

      if (currentCircleActive !== circles.length) {
        buttonNext.disabled = false;
      }
    }

    if (currentCircleActive === 1) {
      buttonPrevious.disabled = true;
    }
  }

  /**
   *
   * @param {HTMLElement} buttonNext
   * @param {HTMLElement} buttonPrevious
   * @param {HTMLElement} progress
   * @param {HTMLElement[]} circles
   *
   */
  function buttonNextOnclickProcess(
    buttonNext,
    buttonPrevious,
    progress,
    circles
  ) {
    buttonNext.onclick = function () {
      currentCircleActive++;

      if (currentCircleActive >= circles.length) {
        currentCircleActive = circles.length;
      }

      progressProcess(progress, circles, buttonNext, buttonPrevious);
    };
  }

  /**
   *
   * @param {HTMLElement} buttonPrevious
   * @param {HTMLElement} buttonNext
   * @param {HTMLElement} progress
   * @param {HTMLElement[]} circles
   *
   */
  function buttonPreviousOnclickProcess(
    buttonPrevious,
    buttonNext,
    progress,
    circles
  ) {
    buttonPrevious.onclick = function () {
      currentCircleActive--;

      if (currentCircleActive <= 1) {
        currentCircleActive = 1;
      }

      progressProcess(progress, circles, buttonNext, buttonPrevious);
    };
  }

  function main() {
    const circles = document.getElementsByClassName(classes.circle);
    const progress = document.getElementsByClassName(classes.progress)[0];
    const buttonNext = document.getElementsByClassName(classes.buttonNext)[0];
    const buttonPrevious = document.getElementsByClassName(
      classes.buttonPrevious
    )[0];

    buttonNextOnclickProcess(buttonNext, buttonPrevious, progress, circles);
    buttonPreviousOnclickProcess(buttonPrevious, buttonNext, progress, circles);
  }

  main();
})();
