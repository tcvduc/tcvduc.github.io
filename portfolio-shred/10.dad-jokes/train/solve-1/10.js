(function () {
  const classes = {
    buttonGetAnotherJoke: "buttonGetAnotherJoke",
    paragraph: "paragraph",
  };

  const jokes = [
    "I'm afraid for the calendar. Its days are numbered.",
    "My wife said I should do lunges to stay in shape. That would be a big step forward.",
    `Why do fathers take an extra pair of socks when they go golfing? In case they get a hole in one!`,
    "Singing in the shower is fun until you get soap in your mouth. Then it's a soap opera",
  ];
  let index = 0;
  /**
   *
   * @param {HTMLElement} paragraph
   * @param {number} index
   */
  function displayJoke(paragraph, index) {
    paragraph.innerText = jokes[index];
  }

  /**
   *
   * @param {HTMLElement} buttonGetAnotherJoke
   * @param {HTMLElement} paragraph
   *
   *
   */
  function handleButtonGetAnotherJokeOnclick(buttonGetAnotherJoke, paragraph) {
    buttonGetAnotherJoke.onclick = function () {
      if (index >= jokes.length - 1) {
        index = 0;
        displayJoke(paragraph, index);
        return;
      }
      index++;
      displayJoke(paragraph, index);
    };
  }

  function main() {
    const buttonGetAnotherJoke = window.document.getElementsByClassName(
      classes.buttonGetAnotherJoke
    )[0];
    const paragraph = window.document.getElementsByClassName(
      classes.paragraph
    )[0];

    displayJoke(paragraph, index);

    handleButtonGetAnotherJokeOnclick(buttonGetAnotherJoke, paragraph);
  }

  main();
})();
