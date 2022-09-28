(function () {
  /**
   * Feature: Search Portfolio
   * 1. Allow to search Introduction Tab Content
   * 2. Allow to search Portfolio Tab Content
   *
   *
   * -- ---------------------------------------------------------
   * -- 1. Allow to search Introduction Tab Content
   * -- ----------------------------------------------------------
   * + step 1: get input keyword - done
   * + step 2: advance regex trim step 1 - done
   * + step 3: from parent html send a message string to children iframe - done
   * + step 4: from parent html send step 2 ret to children iframe - done
   * + step 5: define an array of strings which allow to search,
   *   ["brief", "introduction", "experience", "education", "contact"] - done
   * + step 6: detect search keyword whether it is equal to step 5 or not,
   *   ignore computer case sensitive - done
   * + step 7: if step 6 was true, scroll the web site to the keyword element position
   *   + step 7.1: detect mouse coordinate
   *   + step 7.2: find a coordinate, y-number to define where
   *   the web page should scroll to
   *   + step 7.3: get element keyword offset top
   *   + step 7.4: calculate delta = step 7.3 - step 7.2
   *   + step 7.5: scroll to delta
   *
   *
   * + step 8: hight light element contains keyword
   *
   *
   *
   *
   *
   */

  const tags = {
    iframe: "iframe",
  };

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
   * @param {string} s
   */
  function advanceRegexTrim(s) {
    /**
     * - s = "
     *       abc     def
     * "
     * - ret = "abc def"
     *
     * + step 1: regex detect all `\n`, replace it by "" - done
     *   + ret: "      abc     def    "
     * + step 2: regex detect multiple spacing, replace it by " " - done
     *   + ret: " abc def "
     * + step 3: regex detect spacing in the begin of string - done
     *   + ret: "abc def "
     * + step 4: regex detect spacing at the end of string
     *   + ret: "abc def"
     *
     *
     */
    const emptyString = "";
    const oneSpacing = " ";
    const regexAllDownLineSign = /\n+/g;
    const regexDetectMultipleSpacing = / +/g;
    const regexDetectSpacingInTheBeginning = /^ +/g;
    const regexDetectSpacingAtTheEnd = / +$/g;

    return s
      .replace(regexAllDownLineSign, emptyString)
      .replace(regexDetectMultipleSpacing, oneSpacing)
      .replace(regexDetectSpacingInTheBeginning, emptyString)
      .replace(regexDetectSpacingAtTheEnd, emptyString);
  }

  /**
   *
   * @param {HTMLIFrameElement} iframe
   * @param {string} searchKeyword
   *
   *
   */
  function fromParentHtmlSendSearchKeywordToIframe(iframe, searchKeyword) {
    iframe.contentWindow.postMessage(searchKeyword, "*");
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

          const advanceTrimInputValueRet = advanceRegexTrim(inputValue);
          const searchKeyword = advanceTrimInputValueRet;

          switch (currentSidebarTabActive) {
            case sideBarTabName.Introduction:
              // Tab Active: Introduction
              break;

            case sideBarTabName.Portfolio:
              // Tab Active: Portfolio
              break;

            default:
              // Default Tab Active: Introduction
              console.log("Tab Active: Introduction");

              fromParentHtmlSendSearchKeywordToIframe(iframe, searchKeyword);

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
