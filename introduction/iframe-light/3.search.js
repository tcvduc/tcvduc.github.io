(function () {
  const classes = {
    title: "title",
    foundSearchKeyword: "foundSearchKeyword",
  };

  /**
   *
   * @param {HTMLElement} element
   */
  function getElementOffset(element) {
    let offsetTop = 0;
    let offsetLeft = 0;

    while (
      element &&
      !window.isNaN(element.offsetLeft) &&
      !window.isNaN(element.offsetTop)
    ) {
      offsetTop += element.offsetTop;
      offsetLeft += element.offsetLeft;

      element = element.offsetParent;
    }

    return {
      offsetTop,
      offsetLeft,
    };
  }

  /**
   *
   * @param {string} s
   */
  function advanceRegexTrim(s) {
    /**
     * + s = "
     *    abc     def
     * "
     * + s = "   abc   def   "
     * + s = " abc def "
     * + s = "abc def"
     *
     *
     *
     *
     */
    const regexDownLine = /\n+/g;
    const regexMultipleSpacing = / +/g;
    const regexBeginSpacing = /^ +/g;
    const regexEndSpacing = / +$/g;

    return s
      .replace(regexDownLine, "")
      .replace(regexMultipleSpacing, " ")
      .replace(regexBeginSpacing, "")
      .replace(regexEndSpacing, "");
  }

  /**
   *
   * @param {HTMLElement[]} titles
   */
  function thisIsIntroductionIframeLightGetPostMessageFromHtmlParent(titles) {
    window.onmessage =
      /**
       *
       * @param {MessageEvent} event
       */
      function (event) {
        const { data: searchKeyword } = event;
        const searchKeywordLowercased = searchKeyword.toLowerCase();
        const searchKeywordTrimmed = advanceRegexTrim(searchKeywordLowercased);

        if (searchKeyword !== "") {
          console.log(searchKeyword);
          for (let i = titles.length - 1; i >= 0; --i) {
            const titleText = titles[i].textContent.toLowerCase();
            const titleTextAdvanceTrimmed = advanceRegexTrim(titleText);
            if (titleTextAdvanceTrimmed.includes(searchKeywordTrimmed)) {
              const element = titles[i];
              const y1 = element.getBoundingClientRect().y;
              const elementOffset = getElementOffset(element);
              const windowInnerHeight = window.innerHeight;

              element.classList.add(classes.foundSearchKeyword);

              if (y1 < 0 && i === 0) {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }

              if (y1 < 0 && i !== 0) {
                window.scrollTo({
                  top: elementOffset.offsetTop,
                  behavior: "smooth",
                });
              }

              if (y1 > windowInnerHeight) {
                window.scrollTo({
                  top: elementOffset.offsetTop,
                  behavior: "smooth",
                });
              }
            }
          }
        }
      };

    for (let i = titles.length - 1; i >= 0; --i) {
      titles[i].classList.remove(classes.foundSearchKeyword);
    }
  }

  function main() {
    const titles = document.getElementsByClassName(classes.title);

    thisIsIntroductionIframeLightGetPostMessageFromHtmlParent(titles);
  }

  main();
})();
