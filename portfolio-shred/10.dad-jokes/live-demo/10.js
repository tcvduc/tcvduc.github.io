(function () {
  const classes = {
    buttonGetAnotherJoke: "buttonGetAnotherJoke",
    joke: "joke",
  };

  async function asyncGetJoke() {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };
    const url = "https://icanhazdadjoke.com";
    const response = await window.fetch(url, config);
    const ret = await response.json();
    return ret.joke;
  }

  /**
   *
   * @param {HTMLElement} buttonGetAnotherJoke
   * @param {HTMLElement} jokeElement
   *
   *
   */
  function buttonGetAnotherJokeOnclick(buttonGetAnotherJoke, jokeElement) {
    buttonGetAnotherJoke.onclick = async function () {
      jokeElement.innerHTML = "Loading...";
      const joke = await asyncGetJoke();
      jokeElement.innerHTML = joke;
    };
  }

  async function main() {
    const buttonGetAnotherJoke = window.document.getElementsByClassName(
      classes.buttonGetAnotherJoke
    )[0];
    const jokeElement = window.document.getElementsByClassName(classes.joke)[0];
    jokeElement.innerHTML = "Loading...";
    jokeElement.innerHTML = await asyncGetJoke();

    buttonGetAnotherJokeOnclick(buttonGetAnotherJoke, jokeElement);
  }

  main();
})();
