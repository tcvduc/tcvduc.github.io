(function () {
  const classes = {
    title: "title",
    section: "section",
    foundSearchKeyword: "foundSearchKeyword",
  };

  /**
   *
   * @param {HTMLElement} element
   */
  function getElementOffsetTop(element) {
    let offsetTop = 0;

    while (element && !window.isNaN(element.offsetTop)) {
      offsetTop += element.offsetTop;

      element = element.offsetParent;
    }

    return {
      offsetTop,
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
   * @param {HTMLElement} element
   */
  function wasDivTagElementContainsClassSection(element) {
    const regex = /DIV/g;
    const flag1 = regex.test(element.tagName);
    const flag2 = element.classList.contains(classes.section);
    return flag1 && flag2;
  }

  /**
   *
   * @param {HTMLElement} element
   */
  function wasBodyTagElement(element) {
    const regex = /BODY/g;
    return regex.test(element.tagName);
  }

  /**
   *
   * @param {HTMLElement} element
   */
  function wasHtmlTagElement(element) {
    const regex = /HTML/g;
    return regex.test(element.tagName);
  }

  /**
   *
   * @param {HTMLElement} element
   */
  function wasSuitableElementForSearch(element) {
    /**
     * + Suitable element for search
     *   + if element is not a html tag - done
     *   + if element is not a body tag - done
     *   + if element is not a div tag contains class section - done
     *
     */
    const flag1 = !wasHtmlTagElement(element);
    const flag2 = !wasBodyTagElement(element);
    const flag3 = !wasDivTagElementContainsClassSection(element);
    const ret = flag1 && flag2 && flag3;
    return ret;
  }

  /**
   *
   * @param {HTMLElement[]} elements
   */
  function thisIsIntroductionIframeLightGetPostMessageFromHtmlParent(elements) {
    window.onmessage =
      /**
       *
       * @param {MessageEvent} event
       */
      function (event) {
        const { data: searchKeyword } = event;
        const searchKeywordLowercased = searchKeyword.toLowerCase();
        const searchKeywordTrimmed = advanceRegexTrim(searchKeywordLowercased);

        for (let i = elements.length - 1; i >= 0; --i) {
          elements[i].classList.remove(classes.foundSearchKeyword);
        }

        if (searchKeyword !== "") {
          for (let i = elements.length - 1; i >= 0; --i) {
            const titleText = elements[i].textContent.toLowerCase();
            const titleTextAdvanceTrimmed = advanceRegexTrim(titleText);
            if (titleTextAdvanceTrimmed.includes(searchKeywordTrimmed)) {
              const element = elements[i];

              const wsefs = wasSuitableElementForSearch(element);
              if (wsefs) {
                element.classList.add(classes.foundSearchKeyword);
                const elementOffsetTop = getElementOffsetTop(element).offsetTop;

                window.scrollTo({
                  top: elementOffsetTop,
                  behavior: "smooth",
                });
              }
            }
          }
        }
      };
  }

  function main() {
    const elements = window.document.querySelectorAll("*");

    thisIsIntroductionIframeLightGetPostMessageFromHtmlParent(elements);
  }

  main();
})();
