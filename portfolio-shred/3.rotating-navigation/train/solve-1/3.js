(function () {
  const classes = {
    hamburger: "hamburger",
    closer: "closer",

    menuContainer: "menu-container",
    transformRotateClockWise0Deg: "transformRotateClockWise0Deg",
    女: "女",
    coverLayer: "cover-layer",
    rotateCounterClockWise20Deg: "rotateCounterClockWise20Deg",
    initialTransition: "initialTransition",
    transition400ms: "transition400ms",
    container: "container",

    animationRotateCounterClockwise20Deg:
      "animationRotateCounterClockwise20Deg",

    animationRotateClockwise20Deg: "animationRotateClockwise20Deg",
    transformRotateCounterClockWise20deg:
      "transformRotateCounterClockWise20deg",

    transformRotateCounterClockWise70deg:
      "transformRotateCounterClockWise70deg",

    animationNavigateHome: "animationNavigateHome",
    animationNavigateAbout: "animationNavigateAbout",
    animationNavigateContact: "animationNavigateContact",

    home: "home",
    about: "about",
    contact: "contact",
  };

  const transitionDuration = 400;

  /**
   *
   * @param {string} className
   */
  function wasClassContainsTransformKeyword(className) {
    const regex = /transform/g;
    return regex.test(className);
  }

  /**
   *
   * @param {HTMLElement} closer
   * @param {HTMLElement} menuContainer
   * @param {HTMLElement} container
   * @param {HTMLElement} 女
   *
   */
  function closerOnclickProcess(closer, menuContainer, container, 女) {
    closer.onclick = function () {
      女.classList.remove(classes.transformRotateCounterClockWise70deg);
      container.classList.remove(classes.transformRotateCounterClockWise20deg);
    };
  }

  /**
   *
   * @param {HTMLElement} hamburger
   * @param {HTMLElement} menuContainer
   * @param {HTMLElement} container
   * @param {HTMLElement} home
   * @param {HTMLElement} about
   * @param {HTMLElement} contact
   *
   */
  function hamburgerOnclickProcess(
    hamburger,
    menuContainer,
    container,
    home,
    about,
    contact
  ) {
    hamburger.onclick = function () {
      container.classList.add(classes.transformRotateCounterClockWise20deg);

      menuContainer.classList.add(classes.transformRotateCounterClockWise70deg);

      home.classList.add(classes.animationNavigateHome);
      about.classList.add(classes.animationNavigateAbout);
      contact.classList.add(classes.animationNavigateContact);
    };
  }

  /**
   *
   * @param {HTMLElement} 女
   */
  function drag女(女) {
    let previousClientX = 0;
    let currentClientX = 0;
    let previousClientY = 0;
    let currentClientY = 0;

    女.onmousedown =
      /**
       *
       * @param {MouseEvent} event
       */
      function (event) {
        previousClientX = event.clientX;
        previousClientY = event.clientY;

        window.onmousemove =
          /**
           *
           * @param {MouseEvent} event
           */
          function (event) {
            currentClientX = event.clientX - previousClientX;
            previousClientX = event.clientX;

            currentClientY = event.clientY - previousClientY;
            previousClientY = event.clientY;

            const leftEquation = 女.offsetLeft + currentClientX;
            const topEquation = 女.offsetTop + currentClientY;

            女.style.left = leftEquation + "px";
            女.style.top = topEquation + "px";
          };

        window.onmouseup =
          /**
           *
           * @param {MouseEvent} event
           */
          function (event) {
            window.onmouseup = null;
            window.onmousemove = null;
            console.log("1");
          };
      };
  }

  /**
   *
   * @param {string} pixel
   */
  function getPixelNumber(pixel) {
    /**
     * - 32px
     * - ret = 32
     *
     */
    let ret = pixel.split("");

    ret.pop();
    ret.pop();
    ret = ret.join("");

    return +ret;
  }

  /**
   *
   * @param {HTMLElement} element
   */
  function initialTransitionCSS(element) {
    element.classList.add(classes.initialTransition);
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
            x1 = pageX;

            const deltaY = y2 - y1;
            y1 = pageY;

            element.style.left = element.offsetLeft + deltaX + "px";
            element.style.top = element.offsetTop + deltaY + "px";
          };

        window.onmouseup = function () {
          window.onmousemove = null;
        };
      };
  }

  function main() {
    const closer = document.getElementsByClassName(classes.closer)[0];
    const hamburger = document.getElementsByClassName(classes.hamburger)[0];
    const menuContainer = document.getElementsByClassName(
      classes.menuContainer
    )[0];

    const container = document.getElementsByClassName(classes.container)[0];
    const 女 = document.getElementsByClassName(classes.女)[0];

    const home = document.getElementsByClassName(classes.home)[0];
    const about = document.getElementsByClassName(classes.about)[0];
    const contact = document.getElementsByClassName(classes.contact)[0];

    closerOnclickProcess(closer, menuContainer, container, 女);

    hamburgerOnclickProcess(
      hamburger,
      menuContainer,
      container,
      home,
      about,
      contact
    );

    dragElement(女);
  }

  main();
})();
