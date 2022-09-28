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

        console.log("Was on message first time on load: tcvduc.github.io");

        for (let j = titles.length - 1; j >= 0; --j) {
          titles[j].classList.remove(classes.foundSearchKeyword);
        }

        for (let i = titles.length - 1; i >= 0; --i) {
          const titleText = titles[i].textContent.toLowerCase();

          if (titleText.includes(searchKeywordLowercased)) {
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
      };
  }

  function main() {
    const titles = document.getElementsByClassName(classes.title);

    thisIsIntroductionIframeLightGetPostMessageFromHtmlParent(titles);
  }

  main();
})();
