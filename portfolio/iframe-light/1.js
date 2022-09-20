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
  };

  const elementAttributes = {
    dataSideBarIndex: "data-side-bar-index",
  };

  const localStorageKeyProjectSideBarIndex = "PROJECT_SIDE_BAR_INDEX";

  const portfolioProjects = [
    {
      hashtag: "01",
      dataSideBarIndex: 2,
      projectName: "Expanding Cards",
      liveDemoHref: `"/portfolio-shred/1.expanding-cards/live-demo"`,
    },
  ];

  /**
   *
   * @param {string} hashtag
   * @param {number} dataSideBarIndex
   * @param {string} projectName
   * @param {string} liveDemoHref
   *
   */
  function createAnPortfolioBarElement(
    hashtag,
    dataSideBarIndex,
    projectName,
    liveDemoHref
  ) {
    const htmlCode = `
    <div class="hashtag">${hashtag}</div>
    <div class="project" data-side-bar-index="${dataSideBarIndex}">
      <a href="">${projectName}</a>
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
  function innerHTMLPortfolioBars(layerBars) {
    portfolioProjects.forEach(function (project) {
      const portfolioBarElement = createAnPortfolioBarElement(
        project.hashtag,
        project.dataSideBarIndex,
        project.projectName,
        project.liveDemoHref
      );

      layerBars.appendChild(portfolioBarElement);
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

  function main() {
    const hashtags = document.getElementsByClassName(classes.hashtag);
    const projects = document.getElementsByClassName(classes.project);
    const liveDemos = document.getElementsByClassName(classes.liveDemo);
    const layerBars = document.getElementsByClassName(classes.layerBars)[0];

    innerHTMLPortfolioBars(layerBars);
    barShredElementOnMouseOverAndOnMouseLeave(hashtags, projects, liveDemos);
  }

  main();
})();
