(function () {
  const classes = {
    information: "information",
  };

  function main() {
    const information = window.document.getElementsByClassName(
      classes.information
    )[0];

    window.onkeydown =
      /**
       *
       * @param {KeyboardEvent} event
       */
      function (event) {
        information.innerHTML = `
        <div class="key">
            ${event.key === " " ? "Space" : event.key}
            <small>event.key</small>
        </div>

        <div class="key">
            ${event.keyCode}
            <small>event.keyCode</small>
        </div>

        <div class="key">
            ${event.code}
            <small>event.code</small>
        </div>
        `;
      };
  }

  main();
})();
