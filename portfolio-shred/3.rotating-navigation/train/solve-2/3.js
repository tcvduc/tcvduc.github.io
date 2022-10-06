(function () {
  const classes = {
    layerMenu: "layer-menu",
    hamburger: "hamburger",
    close: "close",
    dogImage: "dogImage",
    transition0s: "transition0s",
    layer2: "layer-2",
    home: "home",
    about: "about",
    contact: "contact",
    animationHome: "animationHome",
    animationAbout: "animationAbout",
    animationContact: "animationContact",
    rotateCounterClockwise20deg: "rotateCounterClockwise20deg",
    rotateCounterClockwise70deg: "rotateCounterClockwise70deg",
  };

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
       * @param { MouseEvent} event
       */
      function (event) {
        const { pageX, pageY } = event;

        x1 = pageX;
        y1 = pageY;

        element.classList.add(classes.transition0s);

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

  /**
   *
   * @param {HTMLElement} hamburger
   * @param {HTMLElement} layerMenu
   * @param {HTMLElement} layer2
   * @param {HTMLElement} home
   * @param {HTMLElement} about
   * @param {HTMLElement} contact
   *
   *
   */
  function hamburgerOnclick(
    hamburger,
    layerMenu,
    layer2,
    home,
    about,
    contact
  ) {
    hamburger.onclick = function () {
      layerMenu.classList.remove(classes.transition0s);
      layerMenu.classList.add(classes.rotateCounterClockwise70deg);
      layer2.classList.add(classes.rotateCounterClockwise20deg);

      home.classList.add(classes.animationHome);
      about.classList.add(classes.animationAbout);
      contact.classList.add(classes.animationContact);
    };
  }

  /**
   *
   * @param {HTMLElement} close
   * @param {HTMLElement} layerMenu
   * @param {HTMLElement} layer2
   *
   */
  function closeOnclick(close, layerMenu, layer2) {
    close.onclick = function () {
      layerMenu.classList.remove(classes.transition0s);
      layerMenu.classList.remove(classes.rotateCounterClockwise70deg);
      layer2.classList.remove(classes.rotateCounterClockwise20deg);
    };
  }

  function main() {
    const layerMenu = document.getElementsByClassName(classes.layerMenu)[0];
    const hamburger = document.getElementsByClassName(classes.hamburger)[0];
    const close = document.getElementsByClassName(classes.close)[0];
    const layer2 = document.getElementsByClassName(classes.layer2)[0];
    const home = document.getElementsByClassName(classes.home)[0];
    const about = document.getElementsByClassName(classes.about)[0];
    const contact = document.getElementsByClassName(classes.contact)[0];

    hamburgerOnclick(hamburger, layerMenu, layer2, home, about, contact);

    closeOnclick(close, layerMenu, layer2);

    dragElement(layerMenu);
  }

  main();
})();
