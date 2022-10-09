(function () {
  const classes = {
    information: "information",
    layer2: "layer2",
    displayNone: "displayNone",
    eventDotKey: "eventDotKey",
    eventDotKeyCode: "eventDotKeyCode",
    eventDotCode: "eventDotCode",
  };

  function main() {
    const information = window.document.getElementsByClassName(
      classes.information
    )[0];

    const layer2 = window.document.getElementsByClassName(classes.layer2)[0];

    const eventDotKey = window.document.getElementsByClassName(
      classes.eventDotKey
    )[0];
    const eventDotKeyCode = window.document.getElementsByClassName(
      classes.eventDotKeyCode
    )[0];
    const eventDotCode = window.document.getElementsByClassName(
      classes.eventDotCode
    )[0];

    window.onkeyup =
      /**
       *
       * @param {KeyboardEvent} event
       */
      function (event) {
        information.classList.add(classes.displayNone);
        layer2.classList.remove(classes.displayNone);

        eventDotKey.innerHTML = event.key;
        eventDotKeyCode.innerHTML = event.keyCode;
        eventDotCode.innerHTML = event.code;
      };
  }

  main();
})();
