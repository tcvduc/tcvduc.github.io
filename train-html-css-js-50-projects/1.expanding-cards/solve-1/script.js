(function () {
  const classes = {
    surf: "surf",
    active: "active",
  };

  /**
   *
   * @param {HTMLCollection} surfs
   */
  function surfOnclickProcess(surfs) {
    for (let i = surfs.length - 1; i >= 0; --i) {
      surfs[i].addEventListener("click", function () {
        removeActiveClasses(surfs);
        surfs[i].classList.add(classes.active);
      });
    }
  }

  /**
   *
   * @param {HTMLCollection} surfs
   */
  function removeActiveClasses(surfs) {
    for (let i = surfs.length - 1; i >= 0; --i) {
      surfs[i].classList.remove(classes.active);
    }
  }

  function main() {
    const surfs = document.getElementsByClassName(classes.surf);
    surfOnclickProcess(surfs);
  }

  main();
})();
