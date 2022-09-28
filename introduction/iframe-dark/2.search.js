(function () {
  const classes = {
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
   * @param {HTMLElement} element
   */
  function wasHtmlElementTag(element) {
    const regex = /HTML/g;
    return regex.test(element.tagName);
  }

  /**
   *
   * @param {HTMLElement} element
   */
  function wasBodyElementTag(element) {
    const regex = /BODY/g;
    return regex.test(element.tagName);
  }

  /**
   *
   * @param {HTMLElement} element
   */
  function wasDivTagElementAndContainsSectionClass(element) {
    const regex = /DIV/g;
    const flag1 = regex.test(element.tagName);
    const flag2 = element.classList.contains(classes.section);
    return flag1 && flag2;
  }

  /**
   *
   * @param {HTMLElement} element
   */
  function wasSuitableElementForSearch(element) {
    /**
     * + Suitable element for search
     *   + if element was not an HTML tag - done
     *   + if element was not an BODY tag - done
     *   + if element was not an DIV tag - done
     *     and contains class name
     *     equal to section
     *
     *
     *
     */
    const flag1 = !wasHtmlElementTag(element);
    const flag2 = !wasBodyElementTag(element);
    const flag3 = !wasDivTagElementAndContainsSectionClass(element);

    const ret = flag1 && flag2 && flag3;

    return ret;
  }

  /**
   *
   * @param {HTMLElement[]} elements
   */
  function thisIsIntroductionIframeDarkGetPostMessageFromParentHtml(elements) {
    window.onmessage =
      /**
       *
       * @param {MessageEvent} event
       */
      function (event) {
        const { data: searchKeyword } = event;
        const searchKeywordLowercased = searchKeyword.toLowerCase();

        for (let i = elements.length - 1; i >= 0; --i) {
          elements[i].classList.remove(classes.foundSearchKeyword);
        }

        if (searchKeywordLowercased !== "") {
          for (let i = elements.length - 1; i >= 0; --i) {
            const element = elements[i];
            const elementTextContent = advanceRegexTrim(
              element.textContent.toLowerCase()
            );

            if (elementTextContent.includes(searchKeywordLowercased)) {
              // find suitable element for search
              const flag = wasSuitableElementForSearch(element);

              if (flag) {
                const elementOffsetTop = getElementOffsetTop(element).offsetTop;

                element.classList.add(classes.foundSearchKeyword);

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

  /**
   *
   * @param {string} s
   */
  function advanceRegexTrim(s) {
    /**
     * + s = `
     *    abc    def
     * `
     * + s = `    abc   def   `
     * + s = ` abc def `
     * + s = `abc def `
     * + s = `abc def`
     *
     *
     */
    const oneSpacing = " ";
    const emptyString = "";
    const regexDownLine = /\n+/g;
    const regexMultipleSpacing = / +/g;
    const regexBeginSpacing = /^ +/g;
    const regexEndSpacing = / +$/g;

    return s
      .replace(regexDownLine, emptyString)
      .replace(regexMultipleSpacing, oneSpacing)
      .replace(regexBeginSpacing, emptyString)
      .replace(regexEndSpacing, emptyString);
  }

  function main() {
    const elements = window.document.querySelectorAll("*");

    thisIsIntroductionIframeDarkGetPostMessageFromParentHtml(elements);
  }

  main();
})();
