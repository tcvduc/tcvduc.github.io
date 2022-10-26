(function () {
  const classes = {
    counter: ".counter",
  };

  function main() {
    const counters = window.document.querySelectorAll(classes.counter);

    counters.forEach(
      /**
       *
       * @param {HTMLElement} counter
       */
      function (counter) {
        counter.innerHTML = 0;

        const updateCounter = function () {
          const dataTarget = +counter.getAttribute("data-target");
          const c = +counter.innerText;

          const increment = dataTarget / 200;

          if (c < dataTarget) {
            counter.innerText = `${window.Math.ceil(c + increment)}`;
            window.setTimeout(updateCounter, 1);
          } else {
            counter.innerText = dataTarget;
          }
        };

        updateCounter();
      }
    );
  }

  main();
})();
