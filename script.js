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
  };

  const animationDurationMillisecondUnit = 800;

  const responsiveNumber = {
    widthFrom1024: 1024,
  };

  const text = `
  <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Expanding Cards</title>
<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }

  :root {
    --border-radius: 50px;
    --transition-duration: 900ms;
    --bg-card-1: url("https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");
    --bg-card-2: url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80");
    --bg-card-3: url("https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80");
    --bg-card-4: url("https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");
  }

  .layer {
    padding: 24px;
    display: flex;
    flex-wrap: wrap;
    background-color: rgb(255, 243, 217);
    min-height: 100vh;
  }

  .layer-card {
    height: 60vh;
    width: 100%;
    margin-top: 24px;
  }

  .layer-card:nth-of-type(1) {
    margin-top: 0;
  }

  .card {
    border-radius: var(--border-radius);
    width: 100px;
    height: 100%;
    border:1px solid #111;
    transition-duration: var(--transition-duration);
    transition-property: width;
    cursor: pointer;
    position: relative;
  }

  .width100Percent {
    width: 100%;
  }

  .layer-card:nth-of-type(1) .card {
    background-image: var(--bg-card-1);
  }

  .layer-card:nth-of-type(2) .card {
    background-image: var(--bg-card-2);
  }

  .layer-card:nth-of-type(3) .card {
    background-image: var(--bg-card-3);
  }

  .layer-card:nth-of-type(4) .card {
    background-image: var(--bg-card-4);
  }

  .card-title {
    position: absolute;
    bottom: 24px;
    left: 24px;
    font-size: 24px;
    color: rgb(255, 243, 217);
    font-weight: 400;
    opacity: 0;
    transition-property: opacity;
    transition-duration: var(--transition-duration);
  }

  .transitionDelay200ms {
    transition-delay: 200ms;
  }

  .opacity0 {
    opacity: 0;
  }

  .opacity1 {
    opacity: 1;
  }

  @media screen and (min-width: 1280px) {
    .layer {
      flex-wrap: nowrap;
    }

    .card {
      margin-top: 0;
      height: 80vh;
    }

    .layer-card {
      margin-top: 0;
      margin-right: 24px;
      width: auto;
    }

    .layer-card:last-child {
      margin-right: 0;
    }

    .width700px {
      width: 1000px;
    }
  }
</style>

<template>
  <style>
    @import "./portfolio/1.expanding-cards/solve-2/1.css" ;
  </style>
</template>

</head>
<body>
<div class="layer">
  <div class="layer-card">
    <div class="card">
      <div class="card-title">Explore The World</div>
    </div>
  </div>

  <div class="layer-card">
    <div class="card">
      <div class="card-title">Wild Forest</div>
    </div>
  </div>

  <div class="layer-card">
    <div class="card">
      <div class="card-title">Sunny Beach</div>
    </div>
  </div>

  <div class="layer-card">
    <div class="card">
      <div class="card-title">City On Winter</div>
    </div>
  </div>
</div>

<script>
  (function () {
    const classes = {
      card: "card",
      opacity0: "opacity0",
      opacity1: "opacity1",
      cardTitle: "card-title",
      transitionDelay200ms: "transitionDelay200ms",
      width700px: "width700px",
      width100Percent: "width100Percent",
    };

    const screenWidth = screen.width;

    /**
     *
     * @param {HTMLElement[]} cards
     * @param {HTMLElement[]} cardTitles
     */
    function cardsOnclick(cards, cardTitles) {
      if (screenWidth < 1280) {
        for (let i = cards.length - 1; i >= 0; --i) {
          cards[i].onclick = function () {
            const flag = cards[i].classList.contains(
              classes.width100Percent
            );

            if (!flag) {
              cards[i].classList.add(classes.width100Percent);
              cardTitles[i].classList.add(classes.transitionDelay200ms);
              cardTitles[i].classList.add(classes.opacity1);
              return;
            }

            if (flag) {
              cards[i].classList.remove(classes.width100Percent);
              cardTitles[i].classList.remove(classes.transitionDelay200ms);
              cardTitles[i].classList.remove(classes.opacity1);

              window.setTimeout(function () {
                cards[i].classList.remove(classes.transitionDelay200ms);
              }, 400);
              return;
            }
          };
        }
      }

      if (screenWidth >= 1280) {
        for (let i = cards.length - 1; i >= 0; --i) {
          // card width transition
          cards[i].onclick = function () {
            for (let j = cards.length - 1; j >= 0; --j) {
              if (j !== i) {
                cards[j].classList.remove(classes.width700px);

                cardTitles[j].classList.remove(classes.opacity1);
                cardTitles[j].classList.remove(
                  classes.transitionDelay200ms
                );
              }
            }
            cards[i].classList.toggle(classes.width700px);

            // card title opacity transition
            const flag = cards[i].classList.contains(classes.width700px);

            if (flag) {
              cardTitles[i].classList.add(classes.transitionDelay200ms);
              cardTitles[i].classList.add(classes.opacity1);
              return;
            }

            if (!flag) {
              cardTitles[i].classList.remove(classes.transitionDelay200ms);
              cardTitles[i].classList.remove(classes.opacity1);
            }
          };
        }
      }
    }

    function main() {
      const cards = document.getElementsByClassName(classes.card);
      const cardTitles = document.getElementsByClassName(classes.cardTitle);

      cardsOnclick(cards, cardTitles);
    }

    main();
  })();
</script>
</body>
</html>

  `;

  customElements.define(
    "show-hello",
    class extends HTMLElement {
      connectedCallback() {
        const shadow = this.attachShadow({ mode: "open" });

        shadow.innerHTML = text;
      }
    }
  );

  const sidebarNavigateIndexNote = {
    index0: {
      value: 0,
      content: "<show-hello></show-hello>",
    },
    index1: {
      value: 1,
      content: "Portfolio",
    },
    index2: {
      value: 2,
      content: "Expanding Cards",
    },
    index3: {
      value: 3,
      content: "Progress Steps",
    },
    index4: {
      value: 4,
      content: "Rotating Navigation",
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
    layerBrushContent
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
   */
  function handleMobileFirstTimeLoad(layer, layerWrapForMobile) {
    window.onload = function () {
      const screenWidth = screen.width;
      if (screenWidth < responsiveNumber.widthFrom1024) {
        layer.scrollBy({
          left: screenWidth,
          behavior: "smooth",
        });
      }
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
      layerBrushContent
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
    handleMobileFirstTimeLoad(layer, layerWrapForMobile);
  }

  main();
})();
