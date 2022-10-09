const jokeElement = window.document.getElementById("joke");
const jokeButton = window.document.getElementById("jokeButton");

jokeButton.addEventListener("click", generateJoke);

generateJoke();

async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  const url = "https://icanhazdadjoke.com";
  const response = await window.fetch(url, config);
  const data = await response.json();
  jokeElement.innerHTML = data.joke;
}
