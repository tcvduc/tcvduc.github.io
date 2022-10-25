(function () {
  const classes = {
    title: "title",
    section: "section",
    hashtag: "hashtag",
    template: "template",
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
   * @param {string} s1
   * @param {string} s2
   *
   */
  function wasExactlyKeyword(s1, s2) {
    if (s1.length !== s2.length) {
      return false;
    }

    let ret = true;

    for (let i = s1.length - 1; i >= 0; --i) {
      if (s1[i] !== s2[i]) {
        ret = false;
        break;
      }
    }

    return ret;
  }

  /**
   *
   * @param {HTMLElement[]} elements
   * @param {HTMLElement[]} hashtags
   * @param {HTMLElement} template
   *
   *
   *
   */
  function thisIsIntroductionIframeLightGetPostMessageFromHtmlParent(
    elements,
    hashtags,
    template
  ) {
    window.onmessage =
      /**
       *
       * @param {MessageEvent} event
       */
      function (event) {
        /**
         * Search portfolio
         * + search project name
         * + search project hashtag
         * + search source code
         * + if search is empty, reset css
         *
         */

        // search project name code
        const { data: searchKeyword } = event;

        const searchKeywordLowercased = searchKeyword.toLowerCase();
        const searchKeywordTrimmed = advanceRegexTrim(searchKeywordLowercased);

        if (searchKeyword === "") {
          for (let i = elements.length - 1; i >= 0; --i) {
            elements[i].classList.remove(classes.foundSearchKeyword);
          }
          return;
        }

        for (let i = elements.length - 1; i >= 0; --i) {
          elements[i].classList.remove(classes.foundSearchKeyword);
        }

        if (searchKeyword !== "") {
          for (let i = elements.length - 1; i >= 0; --i) {
            const titleText = elements[i].textContent.toLowerCase();
            const titleTextAdvanceTrimmed = advanceRegexTrim(titleText);
            const wasExactlyProjectName = wasExactlyKeyword(
              titleTextAdvanceTrimmed,
              searchKeywordTrimmed
            );

            if (wasExactlyProjectName) {
              const element = elements[i];

              const wsefs = wasSuitableElementForSearch(element);
              if (wsefs) {
                element.classList.add(classes.foundSearchKeyword);
                const elementOffsetTop = getElementOffsetTop(element).offsetTop;

                window.scrollTo({
                  top: elementOffsetTop,
                  behavior: "smooth",
                });
                return;
              }
            }
          }
        }

        // search project hashtag code
        const searchKeywordToNumber = +searchKeywordTrimmed;
        for (let j = hashtags.length - 1; j >= 0; --j) {
          const hashTagText = hashtags[j].textContent;
          const hashTagNumber = +hashTagText;
          if (!window.isNaN(hashTagNumber)) {
            if (searchKeywordToNumber === hashTagNumber) {
              const element = hashtags[j];
              element.classList.add(classes.foundSearchKeyword);
              const elementOffsetTop = getElementOffsetTop(element).offsetTop;

              window.scrollTo({
                top: elementOffsetTop,
                behavior: "smooth",
              });
              return;
            }
          }
        }

        // search source code
        const templateText = template.textContent;
        const trimmedTemplateText = advanceRegexTrim(templateText);
        const lowercasedTemplateText = trimmedTemplateText.toLowerCase();
        if (lowercasedTemplateText.includes(searchKeywordTrimmed)) {
          const element = template;
          element.classList.add(classes.foundSearchKeyword);
          const elementOffsetTop = getElementOffsetTop(element).offsetTop;
          window.scrollTo({
            top: elementOffsetTop,
            behavior: "smooth",
          });
          return;
        }
      };
  }

  function main() {
    const elements = window.document.querySelectorAll("*");
    const hashtags = window.document.getElementsByClassName(classes.hashtag);
    const template = window.document.getElementsByClassName(
      classes.template
    )[0];

    thisIsIntroductionIframeLightGetPostMessageFromHtmlParent(
      elements,
      hashtags,
      template
    );
  }

  main();
})();
