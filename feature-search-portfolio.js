(function () {
  /**
   * Feature: Search Portfolio
   * + Allow to search Introduction Tab Content
   * + Allow to search Portfolio Tab Content
   *
   *
   */

  const classes = {
    inputSearchPortfolio: "input-search-portfolio",
    title: "title",
  };

  const sideBarTabName = {
    Introduction: "Introduction",
    Portfolio: "Portfolio",
  };

  const localStorageKeySidebarActive = "SIDEBAR_ACTIVE";

  function detectSideBarActiveTab() {
    const tabName = window.localStorage.getItem(localStorageKeySidebarActive);

    if (!tabName) {
      return null;
    }

    return tabName;
  }

  /**
   *
   * @param {HTMLIFrameElement} iframe
   */
  function f(iframe) {
    console.log(iframe.contentWindow.document);
  }

  /**
   *
   * @param {HTMLElement} inputSearchPortfolio
   * @param {HTMLElement[]} titles
   *
   *
   */
  function handleInputSearchPortfolioOnkeydown(inputSearchPortfolio, titles) {
    inputSearchPortfolio.onkeydown =
      /**
       *
       * @param {KeyboardEvent} event
       */
      function (event) {
        const { key } = event;
        const inputValue = event.target.value;

        if (key === "Enter") {
          const currentSidebarTabActive = detectSideBarActiveTab();
          const iframe = document.getElementsByTagName("iframe")[0];

          const titles2 = document.getElementsByClassName("title");

          console.log(inputValue);

          f(iframe);

          switch (currentSidebarTabActive) {
            case sideBarTabName.Introduction:
              break;

            case sideBarTabName.Portfolio:
              break;

            default:
              console.log("Tab Active: Introduction");
              break;
          }
        }
      };
  }

  function main() {
    const inputSearchPortfolio = document.getElementsByClassName(
      classes.inputSearchPortfolio
    )[0];

    const titles = document.getElementsByClassName(classes.title);

    handleInputSearchPortfolioOnkeydown(inputSearchPortfolio, titles);
  }

  main();
})();
