(function () {
  const classes = {
    hashtag: "hashtag",
    project: "project",
    liveDemo: "live-demo",
    colorHoverBar: "color-hover-bar",
    colorClickBar: "color-click-bar",
  };

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

    barShredElementOnMouseOverAndOnMouseLeave(hashtags, projects, liveDemos);
  }

  main();
})();
