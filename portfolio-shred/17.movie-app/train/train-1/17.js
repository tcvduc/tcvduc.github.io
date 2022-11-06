(function () {
  const API_URL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

  const ids = {
    main: "main",
    form: "form",
    search: "search",
  };

  const classes = {
    movie: "movie",
    movieInfo: "movieInfo",
    green: "green",
    orange: "orange",
    red: "red",
  };

  /**
   *
   * @param {string} url
   */
  async function getMovies(url) {
    const response = await window.fetch(url);
    const data = await response.json();
    const movies = data.results;
    return movies;
  }

  /**
   *
   * @param {Array} movies
   * @param {HTMLElement} mainElement
   *
   */
  function showMovies(movies, mainElement) {
    mainElement.innerHTML = "";

    movies.forEach(
      /**
       *
       * @param {Object} movie
       */
      function (movie) {
        const { title, poster_path, vote_average, overview } = movie;

        const movieElement = window.document.createElement("div");
        movieElement.classList.add(classes.movie);

        movieElement.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt ="${title}"  />

            <div class=${classes.movieInfo} >
                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}" >
                    ${vote_average}
                </span>
            </div>
        `;

        mainElement.appendChild(movieElement);
      }
    );
  }

  /**
   *
   * @param {number} vote
   */
  function getClassByRate(vote) {
    if (vote >= 8) {
      return classes.green;
    }

    if (vote >= 5) {
      return classes.orange;
    }

    return classes.red;
  }

  async function main() {
    const mainElement = window.document.getElementById(ids.main);
    const formElement = window.document.getElementById(ids.form);
    const searchElement = window.document.getElementById(ids.search);
    const movies = await getMovies(API_URL);

    window.console.table([{ movies: movies }]);
    showMovies(movies, mainElement);
  }

  main();
})();
