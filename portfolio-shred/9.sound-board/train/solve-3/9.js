(function () {
  const classes = {
    buttons: "buttons",
    button: "button",
  };

  const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

  function main() {
    const buttons = document.getElementsByClassName(classes.buttons)[0];

    sounds.forEach(
      /**
       *
       * @param {string} sound
       */
      function (sound) {
        const button = document.createElement("button");
        button.innerText = sound;
        button.classList.add(classes.button);

        button.onclick = function () {
          stopSongs();
          const song = window.document.getElementById(sound);
          song.play();
        };

        buttons.appendChild(button);
      }
    );

    function stopSongs() {
      sounds.forEach(function (sound) {
        const song = window.document.getElementById(sound);
        song.pause();
        song.currentTime = 0;
      });
    }
  }

  main();
})();
