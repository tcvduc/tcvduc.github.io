(function () {
  const classes = {
    soundBoard: "soundBoard",
  };
  const tags = {
    audio: "audio",
  };

  /**
   *
   * @param {HTMLAudioElement} audio
   */
  function togglePlayAudioElementOnclick(audio) {
    return audio.paused ? audio.play() : audio.pause();
  }

  /**
   *
   * @param {HTMLAudioElement} audio
   */
  function pauseAudioElementOnclick(audio) {
    audio.pause();
  }

  /**
   *
   * @param {HTMLElement[]} soundBoards
   * @param {HTMLElement[]} audios
   *
   *
   */
  function soundBoardListOnclick(soundBoards, audios) {
    for (let i = soundBoards.length - 1; i >= 0; --i) {
      soundBoards[i].onclick = function () {
        for (let j = soundBoards.length - 1; j >= 0; --j) {
          if (j !== i) {
            pauseAudioElementOnclick(audios[j]);
          }
        }

        togglePlayAudioElementOnclick(audios[i]);
      };
    }
  }

  function main() {
    const soundBoards = window.document.getElementsByClassName(
      classes.soundBoard
    );
    const audios = window.document.getElementsByTagName(tags.audio);

    soundBoardListOnclick(soundBoards, audios);
  }

  main();
})();
