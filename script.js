(function () {
  const classes = {
    bar: "bar",
    rub: "rub",
    svgRub: "svg-rub",
    layerWrapForMobile: "layer-wrap-for-mobile",
    portfolioTitle: "portfolio-title",
    search: "search",
    hamburger: "hamburger",
    sidebarNavigates: ".sidebar-navigate .navigate",
    faFaSearch: "fa fa-search",
    faFaPrint: "fa fa-print",
    displayNone: "display-none",
    layer: "layer",
    layerContent: "layer-content",
    layerBrushContent: "layer-brush-content",
    layerSearchPortfolio: "layer-search-portfolio",
    layerSidebarNavigation: "layer-sidebar-navigation",
    closeSearch: "close-search",
    inputSearchPortfolio: "input-search-portfolio",
    active: "active",
    activeLight: "active-light",
    activeDark: "active-dark",
    buttonLightPage: "button-light-page",
    buttonDarkPage: "button-dark-page",
    buttonChangePageColor: "button-change-page-color",
    content: "content",
    translateXNegative100vw: "translateXNegative100vw",
    translateX100vw: "translateX100vw",
    translateX0: "translateX0",
    navigate: "navigate",
    iframeIntroduction: "iframe-introduction",
  };

  const sessionSideBarKey = "SIDE_BAR_INDEX";
  const sessionCurrentAppColor = {
    key: "CURRENT_APPLICATION_COLOR",
    value: {
      light: "LIGHT",
      dark: "DARK",
    },
  };

  const animationDurationMillisecondUnit = 800;

  const responsiveNumber = {
    widthFrom1024: 1024,
    widthFrom768: 768,
  };

  const sidebarNavigateIndexNote = {
    index0: {
      value: 0,
      title: "Introduction",

      content: {
        light: `
        <iframe
          class="iframe-light-introduction"
          src="./introduction/iframe-light/index.html"
          height="100%"
          width="100%"
        >
        
        </iframe>
      `,
        dark: `
        <iframe
        class="iframe-light-introduction"
        src="./introduction/iframe-dark/index.html"
        height="100%"
        width="100%"
      >
      
      </iframe>
        `,
      },
    },
    index1: {
      value: 1,
      title: "Portfolio",
      content: {
        light: ` <iframe src="./portfolio/iframe-light/1.html" frameborder="0"
         height="100%"
        width="100%" ></iframe> `,
        dark: ` <iframe src="./portfolio/iframe-dark/1.html" frameborder="0" 
        height="100%"
        width="100%" ></iframe>`,
      },
    },
    index2: {
      value: 2,
      title: "Expanding Cards",
      content: {
        light: `<iframe width="100%" height="100%" src="./portfolio-shred/1.expanding-cards/shred/iframe-light/1.html" /> `,
        dark: `<iframe  width="100%" height="100%" src="./portfolio-shred/1.expanding-cards/shred/iframe-dark/1.html" />`,
      },
    },
    index3: {
      value: 3,
      title: "Progress Steps",
      content: `
      <iframe 
        src="./portfolio/2.progress-steps/solve-7/2.html"
         height="100%"
        width="100%" >
      </iframe>
      `,
    },
    index4: {
      value: 4,
      title: "Rotating Navigation",
      content: `
      <iframe 
        src="./portfolio/3.rotating-navigation/solve-2/3.html"
        height="100%"
        width="100%" >
      </iframe>
      `,
    },
  };

  const webPageColor = {
    light: {
      layerContent: {
        backgroundColor: "#fafafa",
        colorStroke: "#747474",

        layerBrushContent: {
          buttonLightPage: {
            backgroundColor: "#9d9d9d",
            color: "#fff",
          },
          buttonDarkPage: {
            backgroundColor: "#fff",
            color: "#747474",
          },
        },

        layerSearchPortfolio: {
          borderColor: "#747474",
          inputSearchPortfolio: {
            backgroundColor: "#fafafa",
            color: "#747474",
          },
        },
      },

      layerSideBarNavigation: {
        backgroundColor: "#eaeaea",
        navigate: {
          color: "#747474",
          activeColor: "#1c1c1c",
        },
      },
    },

    dark: {
      layerContent: {
        backgroundColor: "#1c2128",
        colorStroke: "#cdd9e5",

        navigation: {
          colorStroke: "#cdd9e5",
          colorFill: "#cdd9e5",
        },

        layerBrushContent: {
          backgroundColorActive: "#414a54",
          backgroundColorUnActive: "#1c2128",
          color: "#cdd9e5",
        },

        layerSearchPortfolio: {
          inputSearchPortfolio: {
            backgroundColor: "#414a54",
            borderColor: "#cdd9e5",
          },
        },
      },
      layerSideBarNavigation: {
        backgroundColor: "#2e3641",
        color: "rgb(205, 217, 229)",

        navigate: {
          color: "rgb(205, 217, 229)",
          activeColor: "rgb(143 183 224)",
        },
      },
    },
  };

  /**
   *
   * @param {HTMLElement} element
   * @param {string} className
   *
   */
  function wasElementHasClassName(element, className) {
    let ret = false;

    for (let i = element.classList.length - 1; i >= 0; --i) {
      if (element.classList[i].includes(className)) {
        ret = true;
        break;
      }
    }

    return ret;
  }

  /**
   *
   * @param {HTMLElement} search
   * @param {HTMLElement} layerSearchPortfolio
   * @param {HTMLElement} content
   *
   */
  function handleSearchOnclick(search, layerSearchPortfolio, content) {
    search.onclick = function () {
      const flag = wasElementHasClassName(
        layerSearchPortfolio,
        classes.displayNone
      );

      if (!flag) {
        layerSearchPortfolio.classList.add(classes.displayNone);

        const k = 0;

        content.style.marginTop = `${k}px`;

        return;
      }

      if (flag) {
        layerSearchPortfolio.classList.remove(classes.displayNone);

        const layerSearchPortfolioHeight =
          layerSearchPortfolio.getBoundingClientRect().height;

        const paddingValue = 10;

        const k = layerSearchPortfolioHeight + paddingValue;

        content.style.marginTop = `${k}px`;
      }
    };
  }

  /**
   *
   * @param {HTMLElement} rub
   * @param {HTMLElement} layerBrushContent
   */
  function handleRubOnclick(rub, layerBrushContent) {
    rub.onclick = function () {
      layerBrushContent.classList.toggle(classes.displayNone);
    };
  }

  /**
   *
   * @param {HTMLElement} closeSearch
   * @param {HTMLElement} inputSearchPortfolio
   *
   */
  function handleCloseSearchOnclick(closeSearch, inputSearchPortfolio) {
    closeSearch.onclick = function () {
      inputSearchPortfolio.value = "";
      inputSearchPortfolio.focus();
    };
  }

  /**
   *
   * @param {string} value
   */
  function setSessionCurrentAppColor(value) {
    return window.sessionStorage.setItem(sessionCurrentAppColor.key, value);
  }

  function getSessionCurrentAppColor() {
    return window.sessionStorage.getItem(sessionCurrentAppColor.key);
  }

  /**
   *
   * @param {HTMLElement} buttonDarkPage
   * @param {HTMLElement} layerContent
   * @param {HTMLElement[]} bars
   * @param {HTMLElement} svgRub
   * @param {HTMLElement} faFaSearch
   * @param {HTMLElement} portfolioTitle
   * @param {HTMLElement} faFaPrint
   * @param {HTMLElement} buttonLightPage
   * @param {HTMLElement} layerSearchPortfolio
   * @param {HTMLElement} inputSearchPortfolio
   * @param {HTMLElement} layerSidebarNavigation
   * @param {HTMLElement} layer
   * @param {HTMLElement} layerBrushContent
   * @param {HTMLElement} contentElement
   *
   *
   *
   *
   */
  function handleButtonDarkPageOnclick(
    buttonDarkPage,
    layerContent,
    bars,
    svgRub,
    faFaSearch,
    portfolioTitle,
    faFaPrint,
    buttonLightPage,
    layerSearchPortfolio,
    inputSearchPortfolio,
    layerSidebarNavigation,
    layer,
    layerBrushContent,
    contentElement
  ) {
    buttonDarkPage.onclick = function () {
      // set session app color to dark
      setSessionCurrentAppColor(sessionCurrentAppColor.value.dark);

      // hide layerBrushContent
      layerBrushContent.classList.add(classes.displayNone);

      // remove all page active color
      layer.classList.remove(classes.activeLight);
      layer.classList.add(classes.activeDark);

      // change layer content background color
      layerContent.style.backgroundColor =
        webPageColor.dark.layerContent.backgroundColor;
      layerContent.classList.add(classes.activeDark);

      /**
       * change navigation stroke color
       * 1. hamburger bar - done
       * 2. rub - done
       * 3. search icon - done
       * 4. portfolio title - done
       * 5. print icon - done
       * 6. change navigation tab mobile selection background
       * 7. content change color
       *
       *
       *
       */
      for (let i = bars.length - 1; i >= 0; --i) {
        bars[i].style.backgroundColor =
          webPageColor.dark.layerContent.colorStroke;
      }

      svgRub.style.stroke =
        webPageColor.dark.layerContent.navigation.colorStroke;
      svgRub.style.fill = webPageColor.dark.layerContent.navigation.colorFill;

      faFaSearch.style.color =
        webPageColor.dark.layerContent.navigation.colorStroke;

      portfolioTitle.style.color =
        webPageColor.dark.layerContent.navigation.colorStroke;

      faFaPrint.style.color =
        webPageColor.dark.layerContent.navigation.colorStroke;
      // change layer-brush-content color

      buttonLightPage.style.backgroundColor =
        webPageColor.dark.layerContent.backgroundColor;
      buttonLightPage.style.borderColor =
        webPageColor.dark.layerContent.colorStroke;
      buttonLightPage.style.borderBottom = "unset";
      buttonLightPage.style.color = webPageColor.dark.layerContent.colorStroke;

      buttonDarkPage.style.backgroundColor =
        webPageColor.dark.layerContent.layerBrushContent.backgroundColorActive;
      buttonDarkPage.style.color = webPageColor.dark.layerContent.colorStroke;
      buttonDarkPage.style.borderTop = "unset";

      // change input-search-portfolio color
      layerSearchPortfolio.style.borderColor =
        webPageColor.dark.layerContent.layerSearchPortfolio.inputSearchPortfolio.borderColor;

      inputSearchPortfolio.style.backgroundColor =
        webPageColor.dark.layerContent.layerSearchPortfolio.inputSearchPortfolio.backgroundColor;
      inputSearchPortfolio.style.color =
        webPageColor.dark.layerContent.layerSearchPortfolio.inputSearchPortfolio.borderColor;

      // layerSidebarNavigation
      layerSidebarNavigation.style.backgroundColor =
        webPageColor.dark.layerSideBarNavigation.backgroundColor;

      layerSidebarNavigation.style.color =
        webPageColor.dark.layerSideBarNavigation.color;

      // change iframe color
      const sidebarIndex = +window.sessionStorage.getItem(sessionSideBarKey);
      const currentAppColor = window.sessionStorage.getItem(
        sessionCurrentAppColor.key
      );
      switchIndexDisplayCaseIndexContentCorrespondingAppColor(
        sidebarIndex,
        currentAppColor,
        contentElement
      );
    };
  }

  /**
   *
   * @param {HTMLIFrameElement} iframe
   */
  function iframeManipulation(iframe) {
    iframe.onload = function () {};

    const iframeDocument = iframe.contentWindow.top.document;

    console.log(iframeDocument);
  }

  function getSessionCurrentSideBarIndex() {
    return window.sessionStorage.getItem(sessionSideBarKey);
  }

  /**
   *
   * @param {HTMLElement} buttonLightPage
   * @param {HTMLElement} layerContent
   * @param {HTMLElement[]} bars
   * @param {HTMLElement} svgRub
   * @param {HTMLElement} faFaSearch
   * @param {HTMLElement} portfolioTitle
   * @param {HTMLElement} faFaPrint
   * @param {HTMLElement} buttonDarkPage
   * @param {HTMLElement} layerSearchPortfolio
   * @param {HTMLElement} inputSearchPortfolio
   * @param {HTMLElement} layerBrushContent
   * @param {HTMLElement} layer
   * @param {HTMLElement} layerSidebarNavigation
   * @param {HTMLElement} contentElement
   *
   *
   *
   *
   *
   */

  function handleButtonLightPageOnclick(
    buttonLightPage,
    layerContent,
    bars,
    svgRub,
    faFaSearch,
    portfolioTitle,
    faFaPrint,
    buttonDarkPage,
    layerSearchPortfolio,
    inputSearchPortfolio,
    layerBrushContent,
    layer,
    layerSidebarNavigation,
    contentElement
  ) {
    buttonLightPage.onclick = function () {
      /**
       * Button Light On click
       * 0. remove all active color, add active light
       * 1. change layer-content background color - done
       * 2. change navigation square stroke color - done
       * 3. change layer-brush-content color - done
       * 4. change input-search-portfolio color - done
       * 5. content change color
       * 6. hide layerBrushContent - done
       * 7. sidebar change color
       * 8. layer remove all color active, active light color
       *
       */

      // set session app color to light
      setSessionCurrentAppColor(sessionCurrentAppColor.value.light);

      // 0.
      layerContent.classList.remove(classes.activeDark);
      layerContent.classList.add(classes.activeLight);

      // 1.
      layerContent.style.backgroundColor =
        webPageColor.light.layerContent.backgroundColor;

      // 2.
      for (let i = bars.length - 1; i >= 0; --i) {
        bars[i].style.backgroundColor =
          webPageColor.light.layerContent.colorStroke;
      }
      svgRub.style.stroke = webPageColor.light.layerContent.colorStroke;
      svgRub.style.fill = webPageColor.light.layerContent.colorStroke;
      faFaSearch.style.color = webPageColor.light.layerContent.colorStroke;
      portfolioTitle.style.color = webPageColor.light.layerContent.colorStroke;
      faFaPrint.style.color = webPageColor.light.layerContent.colorStroke;

      // 3.
      buttonLightPage.style.backgroundColor =
        webPageColor.light.layerContent.layerBrushContent.buttonLightPage.backgroundColor;

      buttonLightPage.style.color =
        webPageColor.light.layerContent.layerBrushContent.buttonLightPage.color;

      buttonLightPage.style.borderLeft = `1px solid ${webPageColor.light.layerContent.layerBrushContent.buttonLightPage.backgroundColor}`;
      buttonLightPage.style.borderRight = `1px solid ${webPageColor.light.layerContent.layerBrushContent.buttonLightPage.backgroundColor}`;

      buttonDarkPage.style.backgroundColor =
        webPageColor.light.layerContent.layerBrushContent.buttonDarkPage.backgroundColor;

      buttonDarkPage.style.color =
        webPageColor.light.layerContent.layerBrushContent.buttonDarkPage.color;

      // 4.

      inputSearchPortfolio.style.backgroundColor =
        webPageColor.light.layerContent.layerSearchPortfolio.inputSearchPortfolio.backgroundColor;

      inputSearchPortfolio.style.color =
        webPageColor.light.layerContent.layerSearchPortfolio.inputSearchPortfolio.color;

      layerSearchPortfolio.style.borderColor =
        webPageColor.light.layerContent.layerSearchPortfolio.borderColor;

      // 5.

      // 6.
      layerBrushContent.classList.add(classes.displayNone);

      // 7.
      layerSidebarNavigation.style.backgroundColor =
        webPageColor.light.layerSideBarNavigation.backgroundColor;

      // 8.
      layer.classList.remove(classes.activeDark);
      layer.classList.add(classes.activeLight);

      // change content color
      const currentSideBarIndex = getSessionCurrentSideBarIndex();
      const currentAppColor = getSessionCurrentAppColor();

      switchIndexDisplayCaseIndexContentCorrespondingAppColor(
        +currentSideBarIndex,
        currentAppColor,
        contentElement
      );
    };
  }

  /**
   *
   * @param {HTMLElement[]} sidebarNavigates
   */
  function unActiveLightSideBarNavigateColor(sidebarNavigates) {
    for (let i = sidebarNavigates.length - 1; i >= 0; --i) {
      sidebarNavigates[i].classList.remove(classes.active);
    }
  }

  /**
   *
   * @param {HTMLElement} contentElement
   * @param {any} caseIndexContent
   *
   *
   */
  function displayCaseIndexContent(contentElement, caseIndexContent) {
    contentElement.innerHTML = caseIndexContent;
  }

  /**
   *
   * @param {number} i
   * @param {string} currentAppColor
   * @param {HTMLElement} contentElement
   *
   *
   *
   *
   */
  function switchIndexDisplayCaseIndexContentCorrespondingAppColor(
    i,
    currentAppColor,
    contentElement
  ) {
    switch (i) {
      case 0:
        // if dark color then display dark content
        if (currentAppColor === sessionCurrentAppColor.value.dark) {
          displayCaseIndexContent(
            contentElement,
            sidebarNavigateIndexNote.index0.content.dark
          );
          return;
        }

        // if  light color then display light content
        if (currentAppColor === sessionCurrentAppColor.value.light) {
          displayCaseIndexContent(
            contentElement,
            sidebarNavigateIndexNote.index0.content.light
          );
        }

        break;

      case 1:
        // if dark color then display dark content
        if (currentAppColor === sessionCurrentAppColor.value.dark) {
          displayCaseIndexContent(
            contentElement,
            sidebarNavigateIndexNote.index1.content.dark
          );
          return;
        }

        // if  light color then display light content
        if (currentAppColor === sessionCurrentAppColor.value.light) {
          displayCaseIndexContent(
            contentElement,
            sidebarNavigateIndexNote.index1.content.light
          );
        }

        break;

      case 2:
        // if dark color then display dark content
        if (currentAppColor === sessionCurrentAppColor.value.dark) {
          displayCaseIndexContent(
            contentElement,
            sidebarNavigateIndexNote.index2.content.dark
          );
          return;
        }

        // if  light color then display light content
        if (currentAppColor === sessionCurrentAppColor.value.light) {
          displayCaseIndexContent(
            contentElement,
            sidebarNavigateIndexNote.index2.content.light
          );
        }

        break;

      case 3:
        displayCaseIndexContent(
          contentElement,
          sidebarNavigateIndexNote.index3.content
        );
        break;

      case 4:
        displayCaseIndexContent(
          contentElement,
          sidebarNavigateIndexNote.index4.content
        );
        break;

      default:
        break;
    }
  }

  /**
   *
   * @param {NodeList} sidebarNavigates
   * @param {HTMLElement} content
   *
   *
   */
  function handleSidebarNavigatesOnclick(sidebarNavigates, content) {
    for (let i = sidebarNavigates.length - 1; i >= 0; --i) {
      sidebarNavigates[i].addEventListener("click", function () {
        unActiveLightSideBarNavigateColor(sidebarNavigates);

        sidebarNavigates[i].classList.add(classes.active);

        // save side bar index feature to session storage
        window.sessionStorage.setItem(sessionSideBarKey, i);

        const currentAppColor = getSessionCurrentAppColor();

        switchIndexDisplayCaseIndexContentCorrespondingAppColor(
          i,
          currentAppColor,
          content
        );
      });
    }
  }

  /**
   *
   * @param {HTMLElement} layer
   * @param {HTMLElement} layerWrapForMobile
   * @param {HTMLElement} content
   */
  function handleMobileFirstTimeLoad(layer, layerWrapForMobile, content) {
    window.onload = function () {
      // cw: portfolio sidebar
      window.setTimeout(function () {
        const navigate = document.getElementsByClassName(classes.navigate);
        navigate[1].click();
      }, 1);

      // set session current app color
      window.sessionStorage.setItem(
        sessionCurrentAppColor.key,
        sessionCurrentAppColor.value.light
      );

      const screenWidth = screen.width;
      if (screenWidth < responsiveNumber.widthFrom768) {
        layer.scrollBy({
          left: screenWidth,
          behavior: "smooth",
        });
      }

      displayCaseIndexContent(
        content,
        sidebarNavigateIndexNote.index0.content.light
      );
    };
  }

  /**
   *
   * @param {HTMLElement} hamburger
   * @param {HTMLElement} layer
   *
   *
   */
  function handleHamburgerOnclick(hamburger, layer) {
    hamburger.onclick = function () {
      const screenWidth = screen.width;
      if (screenWidth < responsiveNumber.widthFrom1024) {
        layer.scrollBy({
          left: -screenWidth,
          behavior: "smooth",
        });
      }
    };
  }

  /**
   *
   * @param {HTMLElement} sidebarNavigates
   * @param {HTMLElement} content
   */
  function detectProjectSideBarIndexSessionChange(sidebarNavigates, content) {
    window.onstorage =
      /**
       *
       * @param {StorageEvent} event
       */
      function (event) {
        if (event.newValue !== null) {
          const localStorageValueProjectSideBar = JSON.parse(event.newValue);

          const sidebarIndex =
            +localStorageValueProjectSideBar.dataSidebarIndex;
          sidebarNavigates[sidebarIndex].click();

          //cw portfolio sidebar index
        }
      };
  }

  function main() {
    const rub = document.getElementsByClassName(classes.rub)[0];
    const layerBrushContent = document.getElementsByClassName(
      classes.layerBrushContent
    )[0];
    const search = document.getElementsByClassName(classes.search)[0];
    const layerSearchPortfolio = document.getElementsByClassName(
      classes.layerSearchPortfolio
    )[0];
    const closeSearch = document.getElementsByClassName(classes.closeSearch)[0];
    const inputSearchPortfolio = document.getElementsByClassName(
      classes.inputSearchPortfolio
    )[0];

    const buttonLightPage = document.getElementsByClassName(
      classes.buttonLightPage
    )[0];

    const buttonDarkPage = document.getElementsByClassName(
      classes.buttonDarkPage
    )[0];

    const layerContent = document.getElementsByClassName(
      classes.layerContent
    )[0];

    const bars = document.getElementsByClassName(classes.bar);
    const svgRub = document.getElementsByClassName(classes.svgRub)[0];
    const faFaSearch = document.getElementsByClassName(classes.faFaSearch)[0];
    const portfolioTitle = document.getElementsByClassName(
      classes.portfolioTitle
    )[0];
    const faFaPrint = document.getElementsByClassName(classes.faFaPrint)[0];

    const content = document.getElementsByClassName(classes.content)[0];

    const sidebarNavigates = document.querySelectorAll(
      classes.sidebarNavigates
    );

    const layerSidebarNavigation = document.getElementsByClassName(
      classes.layerSidebarNavigation
    )[0];

    const layer = document.getElementsByClassName(classes.layer)[0];

    const hamburger = document.getElementsByClassName(classes.hamburger)[0];

    const layerWrapForMobile = document.getElementsByClassName(
      classes.layerWrapForMobile
    )[0];

    handleHamburgerOnclick(hamburger, layer);

    // w
    handleSidebarNavigatesOnclick(sidebarNavigates, content);

    // w
    handleButtonDarkPageOnclick(
      buttonDarkPage,
      layerContent,
      bars,
      svgRub,
      faFaSearch,
      portfolioTitle,
      faFaPrint,
      buttonLightPage,
      layerSearchPortfolio,
      inputSearchPortfolio,
      layerSidebarNavigation,
      layer,
      layerBrushContent,
      content
    );

    // w
    handleButtonLightPageOnclick(
      buttonLightPage,
      layerContent,
      bars,
      svgRub,
      faFaSearch,
      portfolioTitle,
      faFaPrint,
      buttonDarkPage,
      layerSearchPortfolio,
      inputSearchPortfolio,
      layerBrushContent,
      layer,
      layerSidebarNavigation,
      content
    );

    handleCloseSearchOnclick(closeSearch, inputSearchPortfolio);

    // W
    handleSearchOnclick(search, layerSearchPortfolio, content);

    handleRubOnclick(rub, layerBrushContent);

    // web page first time on load
    handleMobileFirstTimeLoad(layer, layerWrapForMobile, content);

    // detect Project Side Bar Index Session Change
    detectProjectSideBarIndexSessionChange(sidebarNavigates, content);
  }

  main();
})();
