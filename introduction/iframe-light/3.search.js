(function () {
  const classes = {
    title: "title",
  };

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

        for (let j = titles.length - 1; j >= 0; --j) {
          titles[j].classList.remove(classes.foundSearchKeyword);
        }

        for (let i = titles.length - 1; i >= 0; --i) {
          const titleText = titles[i].textContent.toLowerCase();

          if (titleText.includes(searchKeywordLowercased)) {
            const element = titles[i];
            const y1 = element.getBoundingClientRect().y;

            const y2 = element.getBoundingClientRect().top;

            element.classList.add(classes.foundSearchKeyword);

            console.log(y1);
            console.log(y2);

            if (y1 < 0 && i === 0) {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }

            if (y1 < 0 && i !== 0) {
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
