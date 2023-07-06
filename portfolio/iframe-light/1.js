(function () {
  const classes = {
    hashtag: "hashtag",
    project: "project",
    colorHoverBar: "color-hover-bar",
    colorClickBar: "color-click-bar",
    bar: "bar",
    projectInformation: "project-information",
    layerBars: "layerBars",
    reactjs: "reactjs",
  };

  const elementAttributes = {
    dataSideBarIndex: "data-side-bar-index",
  };

  const localStorageKeyProjectSideBarIndex = "PROJECT_SIDE_BAR_INDEX";

  const portfolioHtmlCssJsProjects = [
    {
      projectHashtag: "01",
      projectName: "Expanding Cards",
      sourceCodeHref:
        "https://github.com/tcvduc/tcvduc.github.io/tree/main/portfolio-shred/1.expanding-cards/live-demo",
      projectWatchLink: `"/portfolio-shred/1.expanding-cards/live-demo"`,
    },

    {
      projectHashtag: "02",
      projectName: "Progress Steps",
      sourceCodeHref:
        "https://github.com/tcvduc/tcvduc.github.io/tree/main/portfolio-shred/2.progress-steps/live-demo",
      projectWatchLink: `"/portfolio-shred/2.progress-steps/live-demo"`,
    },

    {
      projectHashtag: "03",
      projectName: "Rotating Navigation",
      sourceCodeHref:
        "https://github.com/tcvduc/tcvduc.github.io/tree/main/portfolio-shred/3.rotating-navigation/live-demo",
      projectWatchLink: `"/portfolio-shred/3.rotating-navigation/live-demo"`,
    },
    {
      projectHashtag: "04",
      projectName: "Hidden Search",
      sourceCodeHref:
        "https://github.com/tcvduc/tcvduc.github.io/tree/main/portfolio-shred/4.hidden-search/live-demo",
      projectWatchLink: `"/portfolio-shred/4.hidden-search/live-demo"`,
    },

    {
      projectHashtag: "05",
      projectName: "Blurry Loading",
      sourceCodeHref:
        "https://github.com/tcvduc/tcvduc.github.io/tree/main/portfolio-shred/5.blurry-loading/live-demo",
      projectWatchLink: `"/portfolio-shred/5.blurry-loading/live-demo"`,
    },

    {
      projectHashtag: "06",
      projectName: "Scroll Animation",
      sourceCodeHref:
        "https://github.com/tcvduc/tcvduc.github.io/tree/main/portfolio-shred/6.scroll-animation/live-demo",
      projectWatchLink: `"/portfolio-shred/6.scroll-animation/live-demo"`,
    },

    {
      projectHashtag: "07",
      projectName: "Split Landing Page",
      sourceCodeHref:
        "https://github.com/tcvduc/tcvduc.github.io/tree/main/portfolio-shred/7.split-landing-page/live-demo",
      projectWatchLink: `"/portfolio-shred/7.split-landing-page/live-demo"`,
    },

    {
      projectHashtag: "08",
      projectName: "Form Wave",
      sourceCodeHref:
        "https://github.com/tcvduc/tcvduc.github.io/tree/main/portfolio-shred/8.form-wave/live-demo",
      projectWatchLink: `"/portfolio-shred/8.form-wave/live-demo"`,
    },

    {
      projectHashtag: "09",
      projectName: "Sound Board",
      sourceCodeHref:
        "https://github.com/tcvduc/tcvduc.github.io/tree/main/portfolio-shred/9.sound-board/live-demo",
      projectWatchLink: `"/portfolio-shred/9.sound-board/live-demo"`,
    },

    {
      projectHashtag: "10",
      projectName: "Dad Jokes",
      sourceCodeHref:
        "https://github.com/tcvduc/tcvduc.github.io/tree/main/portfolio-shred/10.dad-jokes/live-demo",
      projectWatchLink: `"/portfolio-shred/10.dad-jokes/live-demo"`,
    },

    {
      projectHashtag: "11",
      projectName: "Event KeyCodes",
      sourceCodeHref:
        "https://github.com/tcvduc/tcvduc.github.io/tree/main/portfolio-shred/11.event-keycodes/live-demo",
      projectWatchLink: `"/portfolio-shred/11.event-keycodes/live-demo"`,
    },

    {
      projectHashtag: "12",
      projectName: "FAQ Collapse",
      sourceCodeHref:
        "https://github.com/tcvduc/tcvduc.github.io/tree/main/portfolio-shred/12.faq-collapse/live-demo",
      projectWatchLink: `"/portfolio-shred/12.faq-collapse/live-demo"`,
    },

    {
      projectHashtag: "13",
      projectName: "Random Choice Picker",
      sourceCodeHref:
        "https://github.com/tcvduc/tcvduc.github.io/tree/main/portfolio-shred/13.random-choice-picker/live-demo",
      projectWatchLink: `"/portfolio-shred/13.random-choice-picker/live-demo"`,
    },

    {
      projectHashtag: "14",
      projectName: "Animated Navigation",
      sourceCodeHref:
        "https://github.com/tcvduc/tcvduc.github.io/tree/main/portfolio-shred/14.navigation-animation/live-demo",
      projectWatchLink: `"/portfolio-shred/14.navigation-animation/live-demo"`,
    },

    {
      projectHashtag: "15",
      projectName: "Incrementing Counter",
      sourceCodeHref:
        "https://github.com/tcvduc/tcvduc.github.io/tree/main/portfolio-shred/15.incrementing-counter/live-demo",
      projectWatchLink: `"/portfolio-shred/15.incrementing-counter/live-demo"`,
    },

    {
      projectHashtag: "16",
      projectName: "Drink Water",
      sourceCodeHref:
        "https://github.com/tcvduc/tcvduc.github.io/tree/main/portfolio-shred/16.drink-water/live-demo",
      projectWatchLink: `"/portfolio-shred/16.drink-water/live-demo"`,
    },

    {
      projectHashtag: "17",
      projectName: "Movie App",
      sourceCodeHref:
        "https://github.com/tcvduc/tcvduc.github.io/tree/main/portfolio-shred/17.movie-app/live-demo",
      projectWatchLink: `"/portfolio-shred/17.movie-app/live-demo"`,
    },

    {
      projectHashtag: "17",
      projectName: "Movie App - Query String Tech",
      sourceCodeHref:
        "https://github.com/tcvduc/tcvduc.github.io/tree/main/portfolio-shred/17.movie-app/train/train-2/",
      projectWatchLink: `"/portfolio-shred/17.movie-app/train/train-2"`,
    },

    {
      projectHashtag: "18",
      projectName: "Background Slider",
      sourceCodeHref:
        "https://github.com/tcvduc/tcvduc.github.io/tree/main/portfolio-shred/18.background-slider/live-demo",
      projectWatchLink: `"/portfolio-shred/18.background-slider/live-demo"`,
    },

    {
      projectHashtag: "19",
      projectName: "Half Circle Chart",
      sourceCodeHref:
        "https://github.com/tcvduc/tcvduc.github.io/tree/main/portfolio-shred/19.haft-circle-chart/live-demo",
      projectWatchLink: `"/portfolio-shred/19.background-slider/live-demo"`,
    },
  ];

  /**
   *
   * @param {string} projectHashtag
   * @param {string} projectName
   * @param {string} projectWatchLink
   *
   *
   */
  function createAnPortfolioBarElement(
    projectHashtag,
    projectName,
    projectWatchLink
  ) {
    const htmlCode = `
    <div class="hashtag">${projectHashtag}</div>
    <div class="project">
      <a target="_blank"
       href=${projectWatchLink}
       >${projectName}</a>
    </div>
    `;
    const ret = document.createElement("div");
    ret.classList.add(classes.bar);
    ret.classList.add(classes.projectInformation);
    ret.innerHTML = htmlCode;
    return ret;
  }

  /**
   *
   * @param {HTMLElement} layerBars
   */
  function displayProjectList(layerBars) {
    portfolioHtmlCssJsProjects.forEach(function (project, i) {
      const portfolioBarElement = createAnPortfolioBarElement(
        project.projectHashtag,
        project.projectName,
        project.projectWatchLink
      );

      layerBars.appendChild(portfolioBarElement);
    });
  }

  /**
   *
   * @param {HTMLElement[]} hashtags
   * @param {HTMLElement[]} projects
   *
   */
  function barShredElementOnMouseOverAndOnMouseLeave(hashtags, projects) {
    for (let i = hashtags.length - 1; i >= 0; --i) {
      hashtags[i].onmouseover = function () {
        hashtags[i].classList.add(classes.colorHoverBar);
      };
      hashtags[i].onmouseleave = function () {
        hashtags[i].classList.remove(classes.colorHoverBar);
      };

      hashtags[i].onmousedown = function () {
        hashtags[i].classList.add(classes.colorClickBar);

        window.onmouseup = function () {
          hashtags[i].classList.remove(classes.colorClickBar);
        };
      };
    }

    for (let j = projects.length - 1; j >= 0; --j) {
      projects[j].onmouseover = function () {
        projects[j].classList.add(classes.colorHoverBar);
      };
      projects[j].onmouseleave = function () {
        projects[j].classList.remove(classes.colorHoverBar);
      };

      projects[j].onmousedown = function () {
        projects[j].classList.add(classes.colorClickBar);

        window.onmouseup = function () {
          projects[j].classList.remove(classes.colorClickBar);
        };
      };
    }
  }

  /**
   *
   * @param {string} s
   */
  function advanceTrim(s) {
    /**
     * - s = `
     *  abc      def
     * `
     * + ret = `abc def`
     *
     *
     *
     */
    const regexDownLine = /\n/g;
    const regexMultipleEmpties = / +/g;
    const regexBeginEmpty = /^ +/g;
    const regexEndEmpty = / +$/g;

    return s
      .replace(regexDownLine, "")
      .replace(regexMultipleEmpties, " ")
      .replace(regexBeginEmpty, "")
      .replace(regexEndEmpty, "");
  }

  /**
   *
   * @param {string} searchKeyword
   */
  function activateSearchResult(searchKeyword) {
    console.log("searchKeyword: ", searchKeyword);
    const elements = window.document.all;
    const lowercasedSearchKeyword = searchKeyword.toLowerCase();

    for (let i = elements.length - 1; i >= 0; --i) {
      const elementTextContent = elements[i].textContent;
      const trimmedText = advanceTrim(elementTextContent);
      const lowercasedText = trimmedText.toLowerCase();

      if (lowercasedText.includes(lowercasedSearchKeyword)) {
        console.log(elements[i]);
        break;
      }
    }
  }

  function main() {
    const hashtags = document.getElementsByClassName(classes.hashtag);
    const projects = document.getElementsByClassName(classes.project);
    const layerBars = document.getElementsByClassName(classes.layerBars)[0];

    displayProjectList(layerBars);

    barShredElementOnMouseOverAndOnMouseLeave(hashtags, projects);
  }

  main();
})();
