(function () {
  const classes = {
    buttonPrevious: "button-previous",
    buttonNext: "button-next",
    progress: "progress",
    progressActive: "progress-active",
    step: "step",
    active: "active",
    transitionDelay800ms: "transition-delay-800ms",
  };

  let index = -1;

  /**
   *
   * @param {HTMLElement} buttonPrevious
   * @param {HTMLElement} buttonNext
   * @param {HTMLElement[]} steps
   * @param {HTMLElement} progressActive
   *
   */
  function handleDoubleButtonOnclick(
    buttonPrevious,
    buttonNext,
    steps,
    progressActive
  ) {
    const delta = 100 / (steps.length - 1);
    let equation = 0;

    buttonPrevious.onclick = function () {
      equation -= delta;

      if (equation < 0) {
        equation = 0;
      }

      for (let i = steps.length - 1; i >= 0; --i) {
        steps[i].classList.remove(classes.transitionDelay800ms);
      }

      if (index > -1) {
        index--;
      }

      const jndex = index + 1;

      if (jndex < 4) {
        buttonNext.classList.add(classes.active);
      }

      if (jndex === 0) {
        buttonPrevious.classList.remove(classes.active);
      }

      progressActive.style.width = `${equation}%`;
      steps[jndex].classList.remove(classes.active);
    };

    buttonNext.onclick = function () {
      /**
       * + steps: 1 2 3 4
       *   + steps.length: 4
       * + index: -1
       * + steps index: 0 1 2 3
       * -> block ++ number
       *    if (index < 3)
       *      index++
       *
       */

      if (index < 3) {
        index++;
      }

      if (index > -1) {
        buttonPrevious.classList.add(classes.active);
      }

      /**
       * + delta = 100 / 3
       *   + delta = 100 / (steps.length - 1)
       * + steps index: 0 1 2 3
       *   + 0: width = 0
       *   + 1: width = 100 / 3
       *     + 1: width += delta
       *   + 2: width = 200 / 3
       *     + 2: width += delta
       *
       *
       *
       */

      if (index > 0 && index < steps.length - 1) {
        equation += delta;
        steps[index].classList.add(classes.transitionDelay800ms);
      }

      if (index === 3) {
        buttonNext.classList.remove(classes.active);
        steps[index].classList.add(classes.transitionDelay800ms);

        equation = 100;
      }

      progressActive.style.width = `${equation}%`;
      steps[index].classList.add(classes.active);
    };
  }

  function main() {
    const buttonPrevious = document.getElementsByClassName(
      classes.buttonPrevious
    )[0];
    const progress = document.getElementsByClassName(classes.progress)[0];
    const buttonNext = document.getElementsByClassName(classes.buttonNext)[0];
    const steps = document.getElementsByClassName(classes.step);
    const progressActive = document.getElementsByClassName(
      classes.progressActive
    )[0];

    handleDoubleButtonOnclick(
      buttonPrevious,
      buttonNext,
      steps,
      progressActive
    );
  }

  main();
})();
