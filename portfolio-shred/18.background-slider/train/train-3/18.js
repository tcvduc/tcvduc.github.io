(function () {
  const classes = {
    leftArrow: "left-arrow",
    rightArrow: "right-arrow",
    slide: "slide",
    active: "active",
    slideContainer: "slider-container",
  };

  let index = 0;

  /**
   *
   * @param {HTMLElement} leftArrow
   * @param {HTMLElement[]} slides
   * @param {HTMLElement} body
   *
   *
   */
  function leftArrowOnclick(leftArrow, slides, body) {
    leftArrow.onclick = function () {
      index--;

      if (index < 0) {
        index = slides.length - 1;
      }

      for (let i = slides.length - 1; i >= 0; --i) {
        slides[i].classList.remove(classes.active);
      }

      slides[index].classList.add(classes.active);

      body.style.backgroundImage = slides[index].style.backgroundImage;
    };
  }

  /**
   *
   * @param {HTMLElement} rightArrow
   * @param {HTMLElement[]} slides
   * @param {HTMLElement} body
   *
   */
  function rightArrowOnclick(rightArrow, slides, body) {
    rightArrow.onclick = function () {
      index++;

      if (index > slides.length - 1) {
        index = 0;
      }

      for (let i = slides.length - 1; i >= 0; --i) {
        slides[i].classList.remove(classes.active);
      }

      slides[index].classList.add(classes.active);

      body.style.backgroundImage = slides[index].style.backgroundImage;
    };
  }

  function main() {
    const leftArrow = window.document.getElementsByClassName(
      classes.leftArrow
    )[0];
    const rightArrow = window.document.getElementsByClassName(
      classes.rightArrow
    )[0];
    const slides = window.document.getElementsByClassName(classes.slide);
    const slideContainer = window.document.getElementsByClassName(
      classes.slideContainer
    )[0];
    const body = window.document.body;

    leftArrowOnclick(leftArrow, slides, body);
    rightArrowOnclick(rightArrow, slides, body);
  }

  main();
})();
