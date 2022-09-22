(function () {
  const ids = {
    progress: "progress",
    prev: "prev",
    next: "next",
  };

  const classes = {
    circle: "circle",
    active: "active",
  };

  let currentActive = 1;

  /**
   *
   * @param {HTMLCollection} circles
   * @param {number} currentActive
   * @param {HTMLElement} progress
   * @param {HTMLElement} prev
   *
   *
   */
  function update(circles, currentActive, progress, prev) {
    for (let i = 0; i <= circles.length - 1; ++i) {
      if (i < currentActive) {
        circles[i].classList.add(classes.active);
      }

      if (i >= currentActive) {
        circles[i].classList.remove(classes.active);
      }
    }

    const actives = document.getElementsByClassName(classes.active);

    progress.style.width =
      ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

    if (currentActive === circles.length) {
      prev.disabled = false;
      next.disabled = true;
      return;
    }

    if (currentActive === 1) {
      prev.disabled = true;
      next.disabled = false;
      return;
    }
  }

  function main() {
    const progress = document.getElementById(ids.progress);
    const prev = document.getElementById(ids.prev);
    const next = document.getElementById(ids.next);
    const circles = document.getElementsByClassName(classes.circle);

    next.onclick =
      /**
       *
       * @param {PointerEvent} event
       */
      function (event) {
        currentActive++;

        if (currentActive > circles.length) {
          currentActive = circles.length;
        }

        update(circles, currentActive, progress, prev);
      };

    prev.onclick =
      /**
       *
       * @param {PointerEvent} event
       */
      function (event) {
        currentActive--;

        if (currentActive === 1) {
          currentActive = 1;
        }

        update(circles, currentActive, progress, prev);
      };
  }

  main();
})();
