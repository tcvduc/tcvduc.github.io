(function () {
  const classes = {
    searchInput: "searchInput",
    layerFilms: "layerFilms",
    film: "film",
    active: "active",
  };

  const paginationElements = {
    pagination: "pagination",
    previousButton: "previous-button",
    pageButtonList: "page-button-list",
    page: "page",
    nextButton: "next-button",
  };

  const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
  const LAYER_PAGINATION_MAX_WIDTH = 600;

  class Film {
    constructor(filmPoster, filmTitle, overview, filmRate) {
      this.filmPoster = filmPoster;
      this.filmTitle = filmTitle;
      this.overview = overview;
      this.filmRate = filmRate;
    }
  }

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
    layerFilms.innerHTML = "";

    films.forEach(function (film) {
      const {
        poster_path: filmPoster,
        original_title: filmTitle,
        overview: overview,
        vote_average: filmRate,
      } = film;

      const filmObject = new Film(
        IMG_PATH + filmPoster,
        filmTitle,
        overview,
        filmRate
      );

      const filmElement = createAnFilmElement(filmObject);
      layerFilms.appendChild(filmElement);
    });
  }

  /**
   *
   * @param {number} page
   */
  function createPageButton(page) {
    const element = window.document.createElement("page");
    element.innerHTML = page;
    return element;
  }

  function getTotalPageNumberThatShouldBeDisplayed() {
    const deviceWidth = window.innerWidth;
    const previousButtonWidth = 40;
    const nextButtonWidth = 40;
    const gap = 12;
    const pageButtonWidth = 40;

    if (deviceWidth < LAYER_PAGINATION_MAX_WIDTH) {
      const pagination = window.document.getElementsByTagName(
        paginationElements.pagination
      )[0];
      const paginationWidth = pagination.getBoundingClientRect().width;

      let widthIncreaser = previousButtonWidth + nextButtonWidth + gap + gap;
      let totalPageNumber = 0;

      for (let i = 1; i <= 100; ++i) {
        widthIncreaser += gap + pageButtonWidth;
        totalPageNumber++;

        const delta = paginationWidth - widthIncreaser;
        if (delta <= 0) {
          break;
        }
      }
      return totalPageNumber;
    }

    if (deviceWidth >= LAYER_PAGINATION_MAX_WIDTH) {
      let widthIncreaser = previousButtonWidth + nextButtonWidth + gap + gap;
      let totalPageNumber = 0;

      for (let i = 1; i <= 100; ++i) {
        widthIncreaser += gap + pageButtonWidth;

        if (widthIncreaser >= LAYER_PAGINATION_MAX_WIDTH) {
          totalPageNumber--;
          break;
        }

        totalPageNumber++;
      }

      return totalPageNumber;
    }
  }

  /**
   *
   * @param {HTMLElement} pageButtonList
   */
  function displayPagination(pageButtonList) {
    /**
     * Problem: Display Pagination
     * + Calculate total page number suitable to display
     * on the UI - done
     * + display page button - done
     *
     */
    const totalPageNumber = getTotalPageNumberThatShouldBeDisplayed();

    for (let i = 1; i <= totalPageNumber; ++i) {
      const page = createPageButton(i);

      if (i === 1) {
        page.classList.add(classes.active);
      }

      pageButtonList.appendChild(page);
    }

    const pages = window.document.getElementsByTagName(paginationElements.page);
    paginationOnclick(pages);
  }

  /**
   *
   * @param {HTMLElement[]} pages
   */
  function paginationOnclick(pages) {
    const API_URL =
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c";
    const layerFilms = window.document.getElementsByClassName(
      classes.layerFilms
    )[0];

    for (let i = pages.length - 1; i >= 0; --i) {
      pages[i].onclick = async function () {
        for (let j = pages.length - 1; j >= 0; --j) {
          pages[j].classList.remove(classes.active);
        }

        pages[i].classList.add(classes.active);
        const page = +pages[i].textContent;

        const url = API_URL + `&page=${page}`;
        const fetchFilms = await getFilms(url);
        const films = fetchFilms.results;
        showFilms(films, layerFilms);
      };
    }
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

    const SEARCH_API =
      'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

    const url = API_URL + pageQuery;
    const filmsWithPageQuery = await getFilms(url);

    const films = filmsWithPageQuery.results;
    const pageButtonList = window.document.getElementsByTagName(
      paginationElements.pageButtonList
    )[0];

    showFilms(films, layerFilms);
    displayPagination(pageButtonList);
  }

  main();
})();
