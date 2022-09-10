(function () {
  const classes = {
    bar: "bar",
    rub: "rub",
    svgRub: "svg-rub",
    portfolioTitle: "portfolio-title",
    search: "search",
    sidebarNavigates: ".sidebar-navigate .navigate",
    faFaSearch: "fa fa-search",
    faFaPrint: "fa fa-print",
    displayNone: "display-none",
    layerContent: "layer-content",
    layerBrushContent: "layer-brush-content",
    layerSearchPortfolio: "layer-search-portfolio",
    closeSearch: "close-search",
    inputSearchPortfolio: "input-search-portfolio",
    activeLight: "active-light",
    activeDark: "active-dark",
    buttonLightPage: "button-light-page",
    buttonDarkPage: "button-dark-page",
    buttonChangePageColor: "button-change-page-color",
    content: "content",
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
      layerSideBarNavigation: {},
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
      layerSideBarNavigation: {},
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
    inputSearchPortfolio
  ) {
    buttonDarkPage.onclick = function () {
      // remove all page active color
      layerContent.classList.remove(classes.activeLight);

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
       * 5. print icon
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
    };
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
    inputSearchPortfolio
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
       *
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
    };
  }

  /**
   *
   * @param {HTMLElement[]} sidebarNavigates
   */
  function unActiveLightSideBarNavigateColor(sidebarNavigates) {
    for (let i = sidebarNavigates.length - 1; i >= 0; --i) {
      sidebarNavigates[i].classList.remove(classes.activeLight);
    }
  }

  /**
   *
   * @param {NodeList} sidebarNavigates
   */
  function handleSidebarNavigatesOnclick(sidebarNavigates) {
    for (let i = sidebarNavigates.length - 1; i >= 0; --i) {
      sidebarNavigates[i].addEventListener("click", function () {
        unActiveLightSideBarNavigateColor(sidebarNavigates);

        if (i === 1) {
          i = i + 1;
        }

        sidebarNavigates[i].classList.add(classes.activeLight);
      });
    }
  }

  function handleMobileFirstTimeLoad() {
    window.onload = function () {
      const screenWidth = screen.width;
      const x = 0;
      const y = screenWidth;

      window.scrollTo(x, y);
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

    // w
    handleSidebarNavigatesOnclick(sidebarNavigates);

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
      inputSearchPortfolio
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
      inputSearchPortfolio
    );

    handleCloseSearchOnclick(closeSearch, inputSearchPortfolio);

    // W
    handleSearchOnclick(search, layerSearchPortfolio, content);

    handleRubOnclick(rub, layerBrushContent);

    handleMobileFirstTimeLoad();
  }

  main();
})();
