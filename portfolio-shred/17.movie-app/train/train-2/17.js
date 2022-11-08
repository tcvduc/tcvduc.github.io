(function () {
  const classes = {
    searchInput: "searchInput",
    layerFilms: "layerFilms",
    film: "film",
  };

  const Film = {
    filmPoster: "filmPoster",
    filmTitle: "filmTitle",
    overview: "overview",
    filmRate: "filmRate",
  };

  /**
   *
   * @param {string} url
   */
  async function getFilms(url) {
    const response = await window.fetch(url);
    const films = await response.json();
    return films;
  }

  /**
   *
   * @param {Film} film
   */
  function createAnFilmElement(film) {
    const htmlCode = ` 
    <div class="filmPoster">
      <img src="${film.filmPoster}" alt="" />
    </div>
    <div class="filmInfo">
      <div class="filmTitle">${film.filmTitle}</div>
      <div class="filmRate">${film.filmRate}</div>
    </div>

    <div class="layerOverview">
      <div class="overviewTitle">Overview</div>
      <div class="overviewContent">
      ${film.overview}
      </div>
  </div>`;
    const element = window.document.createElement("div");
    element.classList.add(classes.film);
    element.innerHTML = htmlCode;
    return element;
  }

  /**
   *
   * @param {Array} films
   * @param {HTMLElement} layerFilms
   *
   *
   */
  function showFilms(films, layerFilms) {
    films.forEach(function (film) {
      console.log(film);
      const {
        poster_path: filmPoster,
        original_title: filmTitle,
        overview,
        vote_average: filmRate,
      } = film;
      const filmElement = createAnFilmElement(film);
      layerFilms.appendChild(filmElement);
    });
  }

  async function main() {
    const searchInput = window.document.getElementsByClassName(
      classes.searchInput
    )[0];
    const layerFilms = window.document.getElementsByClassName(
      classes.layerFilms
    )[0];
    const API_URL =
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c";
    const pageQuery = "&page=1";

    const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
    const SEARCH_API =
      'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

    const url = API_URL + pageQuery;
    const filmsWithPagi = await getFilms(url);
    const films = filmsWithPagi.results;
    showFilms(films, layerFilms);
  }

  main();
})();
