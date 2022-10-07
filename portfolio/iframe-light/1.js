(function () {
  const classes = {
    hashtag: "hashtag",
    project: "project",
    liveDemo: "live-demo",
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
      liveDemoHref: `"/portfolio-shred/1.expanding-cards/live-demo"`,
    },

    {
      projectHashtag: "02",
      projectName: "Progress Steps",
      sourceCodeHref:
        "https://github.com/tcvduc/tcvduc.github.io/tree/main/portfolio-shred/2.progress-steps/live-demo",
      liveDemoHref: `"/portfolio-shred/2.progress-steps/live-demo"`,
    },
  ];

  const portfolioReactJSProject = [
    {
      projectHashtag: "01",
      projectName: "To Do List",
      content: {
        light: `<iframe width="100%" height="100%" src="./portfolio-shred/1.expanding-cards/shred/iframe-light/1.html" /> `,
        dark: `<iframe  width="100%" height="100%" src="./portfolio-shred/1.expanding-cards/shred/iframe-dark/1.html" />`,
      },
      liveDemoHref: `https://tcvduc.github.io/train-reactjs/`,
    },
  ];

  /**
   *
   * @param {string} projectHashtag
   * @param {string} projectName
   * @param {string} liveDemoHref
   * @param {string} sourceCodeHref
   *
   *
   */
  function createAnPortfolioBarElement(
    projectHashtag,
    projectName,
    liveDemoHref,
    sourceCodeHref
  ) {
    const htmlCode = `
    <div class="hashtag">${projectHashtag}</div>
    <div class="project">
      <a target="_blank"
       href="${sourceCodeHref}"
       >${projectName}</a>
    </div>
    <div class="live-demo">
      <a
        target="_blank"
        href=${liveDemoHref}
        >Live Demo</a
      >
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
  function innerHTMLPortfolioHtmlCssJsBars(layerBars) {
    portfolioHtmlCssJsProjects.forEach(function (project) {
      const portfolioBarElement = createAnPortfolioBarElement(
        project.projectHashtag,
        project.projectName,
        project.liveDemoHref,
        project.sourceCodeHref
      );

      layerBars.appendChild(portfolioBarElement);
    });
  }

  /**
   *
   * @param {HTMLElement} layerReactJsBars
   */
  function innerHTMLPortfolioReactJSBars(layerReactJsBars) {
    portfolioReactJSProject.forEach(function (project) {
      const portfolioBarElement = createAnPortfolioBarElement(
        project.projectHashtag,
        project.projectName,
        project.liveDemoHref
      );

      // layerReactJsBars.appendChild(portfolioBarElement);
    });
  }

  /**
   *
   * @param {HTMLElement[]} hashtags
   * @param {HTMLElement[]} projects
   * @param {HTMLElement[]} liveDemos
   *
   */
  function barShredElementOnMouseOverAndOnMouseLeave(
    hashtags,
    projects,
    liveDemos
  ) {
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

        if (projects[j].children[0]?.textContent) {
          // get attribute data side bar index value
          const dataSidebarIndex = projects[j].getAttribute(
            elementAttributes.dataSideBarIndex
          );

          const localStorageValue = {
            dataSidebarIndex: dataSidebarIndex,
            project: projects[j].children[0].textContent,
          };

          // set to local storage
          window.localStorage.removeItem(localStorageKeyProjectSideBarIndex);

          window.localStorage.setItem(
            localStorageKeyProjectSideBarIndex,
            JSON.stringify(localStorageValue)
          );
        }

        window.onmouseup = function () {
          projects[j].classList.remove(classes.colorClickBar);
        };
      };
    }

    for (let k = liveDemos.length - 1; k >= 0; --k) {
      liveDemos[k].onmouseover = function () {
        liveDemos[k].classList.add(classes.colorHoverBar);
      };
      liveDemos[k].onmouseleave = function () {
        liveDemos[k].classList.remove(classes.colorHoverBar);
      };

      liveDemos[k].onmousedown = function () {
        liveDemos[k].classList.add(classes.colorClickBar);

        window.onmouseup = function () {
          liveDemos[k].classList.remove(classes.colorClickBar);
        };
      };
    }
  }

  function thisIsPortfolioIframeLightGetPostMessageFromParent() {
    window.onmessage =
      /**
       *
       * @param {MessageEvent} event
       */
      function (event) {
        const { data: searchKeyword } = event;

        if (searchKeyword !== "") {
          console.log("Log from: ", window.location.pathname);
        }
      };
  }

  function main() {
    const hashtags = document.getElementsByClassName(classes.hashtag);
    const projects = document.getElementsByClassName(classes.project);
    const liveDemos = document.getElementsByClassName(classes.liveDemo);
    const layerBars = document.getElementsByClassName(classes.layerBars)[0];
    const layerReactJsBars = document.getElementsByClassName(
      classes.layerBars
    )[1];

    innerHTMLPortfolioHtmlCssJsBars(layerBars);
    innerHTMLPortfolioReactJSBars(layerReactJsBars);

    barShredElementOnMouseOverAndOnMouseLeave(hashtags, projects, liveDemos);

    thisIsPortfolioIframeLightGetPostMessageFromParent();
  }

  main();
})();
