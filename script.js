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

    iframeIntroduction: "iframe-introduction",
  };

  const sessionSideBarKey = "SIDE_BAR_INDEX";

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
      content: "Portfolio",
    },
    index2: {
      value: 2,
      title: "Expanding Cards",
      content: `
        <iframe 
          src="./portfolio/1.expanding-cards/solve-3/1.html"
          height="100%"
          width="100%" >
        </iframe>
      `,
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

      switch (sidebarIndex) {
        case 0:
          console.log(1);
          displayCaseIndexContent(
            contentElement,
            sidebarNavigateIndexNote.index0.content.dark
          );
          break;

        case 1:
          break;

        default:
          break;
      }
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
    layerSidebarNavigation
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

        switch (i) {
          case 0:
            displayCaseIndexContent(
              content,
              sidebarNavigateIndexNote.index0.content
            );
            break;

          case 1:
            displayCaseIndexContent(
              content,
              sidebarNavigateIndexNote.index1.content
            );
            break;

          case 2:
            displayCaseIndexContent(
              content,
              sidebarNavigateIndexNote.index2.content
            );
            break;

          case 3:
            displayCaseIndexContent(
              content,
              sidebarNavigateIndexNote.index3.content
            );
            break;

          case 4:
            displayCaseIndexContent(
              content,
              sidebarNavigateIndexNote.index4.content
            );
            break;

          default:
            break;
        }
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
      layerSidebarNavigation
    );

    handleCloseSearchOnclick(closeSearch, inputSearchPortfolio);

    // W
    handleSearchOnclick(search, layerSearchPortfolio, content);

    handleRubOnclick(rub, layerBrushContent);

    // web page first time on load
    handleMobileFirstTimeLoad(layer, layerWrapForMobile, content);
  }

  main();
})();
