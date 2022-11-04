(async function () {
  const API_URL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
  const SEARCH_API =
    'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

  const classes = {
    item: "item",
    page: "page",
    active: "active",
    layerFilms: "layerFilms",
    previousButton: "previousButton",
    nextButton: "nextButton",
    layerPagination: "layerPagination",
  };

  let previousEndOffset = 0;
  const limit = 8;
  const items = await getMovieData();

  class Film {
    constructor(filmAvatarHref, filmName, filmRate, filmOverView) {
      this.filmAvatarHref = filmAvatarHref;
      this.filmName = filmName;
      this.filmRate = filmRate;
      this.filmOverView = filmOverView;
    }
  }

  async function getMovieData() {
    const response = await window.fetch(API_URL);
    const data = await response.json();
    return data.results;
  }

  /**
   *
   * @param {Film} film
   */
  function createAnItemElement(film) {
    const itemElementHtmlCode = `
    <div class="layerFilmDecoration">
      <div class="filmAvatar">
        <img class="imgFilmAvatar" src="${film.filmAvatarHref}" alt="Film Avatar" />
      </div>
      <div class="filmInfo">
        <div class="filmName">${film.filmName}</div>
        <div class="filmRate">${film.filmRate}</div>
      </div>
    </div>
    <div class="layerFilmInfo">
      <div class="title">Overview</div>
      <div class="info">
      ${film.filmOverView}
      </div>
    </div>
    `;
    const element = window.document.createElement("div");
    element.classList.add(classes.item);
    element.innerHTML = itemElementHtmlCode;
    return element;
  }

  /**
   *
   * @param {number} n
   */
  function getNumberFirstDigit(n) {
    /**
     * Problem: Get Number First Digit
     * + n = 123
     *   + ret = 1
     * + n = 234
     *   + ret = 2
     * + n = 345
     *   + ret = 3
     *
     */
    let ret = 0;

    while (Math.floor(n) !== 0) {
      n = n / 10;

      if (Math.floor(n) !== 0) {
        ret = Math.floor(n);
      }
    }

    return ret;
  }

  /**
   *
   * @param {number} min
   * @param {number} max
   *
   */
  function generateRandomNumber(min, max) {
    /**
     * Problem: Generate Random Number Between
     * min number and max number
     *
     * Understanding The Problem
     * + min: 0
     * + max: 8
     * + ret = {0,1,2,...,7,8}
     *
     * Approach
     * + rand =  Math.random() = (0,1)
     *   + rand = 0.1
     *   + rand = 0.2
     *   ..
     *   + rand = 0.9
     *
     * + delta1 = max - min
     *   + delta1 = 8 - 0
     *   + delta1 = 8
     *
     * + delta2 = delta1 x rand
     *   + 8 x 0.01 = 0.08 < 0.5 ~ 0
     *     + first digit: 0
     *   + 8 x 0.1 = 0.8 > 0.5 ~ 1
     *     + first digit: 0
     *   + 8 x 0.2 = 1.6 > 1.5 ~ 1
     *     + first digit: 1
     *   ..
     *   + 8 x 0.9 = 7.2 < 7.5 ~ 7
     *     + first digit: 7
     *   + 8 x 0.99 = 7.92 > 7.5 ~ 8
     *     + first digit: 7
     *
     * + delta3 = first digit + 0.5
     *   + delta3 = 7.5
     *
     * + ret =
     *   delta2 >= delta3 ?
     *    Math.floor(delta2) : Math.ceil(delta2)
     *
     *
     *
     * + step 0: write a function to get number
     * first digit
     * + step 1: declare rand variable = Math.random() - done
     * + step 2: min = min input - done
     * + step 3: max = max input - done
     * + step 4: delta1 = max - min - done
     * + step 5: delta2 = delta1 x rand - done
     * + step 5: get delta2 first digit, use step 0 - done
     * + step 6: delta3 = step 5 + 0.5 - done
     * + step 7: ret =
     *    delta2 >= delta3 ?
     *    Math.floor(delta2) :
     *    Math.ceil(delta2)
     *
     *
     *
     *
     */
    const random = Math.random();
    const delta1 = max - min;
    const delta2 = delta1 * random;
    const delta2FirstDigit = getNumberFirstDigit(delta2);
    const delta3 = delta2FirstDigit + 0.5;
    const ret = delta2 >= delta3 ? Math.ceil(delta2) : Math.floor(delta2);
    return ret;
  }

  /**
   *
   * @param {number} length
   */
  function generateRandomString(length) {
    /**
     * Problem: generate random string
     * + length: 10
     * + ret = "abcdef1230"
     *
     * Understanding The Problem
     * + number string: "0123456789"
     * + character string: "abcdefghijklmnopqrstuvwxyz"
     *
     * Approach
     * + random character
     *   + random character in number string
     *   + random character in character string
     *
     * + traverse string = number string + character string
     *   + min index: 0
     *   + max index: traverse string length - 1
     *
     * + random string = traverseString[randomIndex]
     *   + randomIndex >= 0 && randomIndex <= max index
     *
     * + generate random number between min index and max index
     *   + ret = traverseString[randomNumber]
     *
     */
    const numberString = "0123456789";
    const characterString = "abcdefghijklmnopqrstuvwxyz";
    const traverseString = numberString + characterString;
    const minIndex = 0;
    const maxIndex = traverseString.length - 1;

    let ret = "";

    for (let i = length; i >= 1; --i) {
      const randomIndex = generateRandomNumber(minIndex, maxIndex);
      const randomCharacter = traverseString[randomIndex];
      ret += randomCharacter;
    }

    return ret;
  }

  /**
   *
   * @param {HTMLElement[]} items
   */
  function animateItemElementWhenItWasHovered(items) {
    for (let i = items.length - 1; i >= 0; --i) {
      items[i].onmouseenter = function () {
        const layerFilmInfoElement = items[i].children[1];
        const height = layerFilmInfoElement.getBoundingClientRect().height;
        layerFilmInfoElement.style.top = `calc(100% - ${height}px)`;
      };

      items[i].onmouseleave = function () {
        const layerFilmInfoElement = items[i].children[1];
        layerFilmInfoElement.style.top = `100%`;
      };
    }
  }

  /**
   *
   * @param {HTMLElement} layerFilms
   * @param {number} pageActive
   *
   */
  async function displayFilmList(layerFilms, pageActive = 1) {
    /**
     * Problem
     * + case 1
     *   + limit: 8
     *   + pageActive: 1
     *   + offset: 0 -> 7
     *   + start offset: 0
     *     + start offset:
     *   + end offset: 7
     *     + end offset: start offset + limit - 1
     *
     * + case 2
     *   + limit: 8
     *   + pageActive: 2
     *   + offset: 8 -> 15
     *
     * Equation
     * + offset: start offset -> end offset
     * + start offset
     *   + if page = 1
     *     + start offset = 0
     *   + if page > 1
     *     + start offset = previous end offset + 1
     *
     * + end offset = start offset + limit - 1
     *
     *
     */
    if (pageActive === 1) {
      const startOffset = 0;
      const endOffset = startOffset + limit - 1;
      previousEndOffset = endOffset;

      layerFilms.innerHTML = "";
      for (let i = startOffset; i <= endOffset; ++i) {
        const filmData = items[i];
        const overview = filmData.overview;
        const filmAvatarHref = IMG_PATH + filmData.poster_path;
        const filmName = filmData.original_title;
        const filmRate = filmData.vote_average;

        const film = new Film(filmAvatarHref, filmName, filmRate, overview);
        const itemElement = createAnItemElement(film);

        layerFilms.appendChild(itemElement);
      }

      const itemsElement = window.document.getElementsByClassName(classes.item);
      animateItemElementWhenItWasHovered(itemsElement);

      return;
    }

    if (pageActive > 1) {
      layerFilms.innerHTML = "";
      const startOffset = previousEndOffset + 1;
      const endOffset = startOffset + limit - 1;

      for (let i = startOffset; i <= endOffset; ++i) {
        const filmData = items[i];
        const overview = filmData.overview;
        const filmAvatarHref = IMG_PATH + filmData.poster_path;
        const filmName = filmData.original_title;
        const filmRate = filmData.vote_average;

        const film = new Film(filmAvatarHref, filmName, filmRate, overview);
        const itemElement = createAnItemElement(film);

        layerFilms.appendChild(itemElement);
      }

      console.log("previousEndOffset: ", previousEndOffset);
      console.log("run here");
    }
  }

  /**
   *
   * @param {number} page
   */
  function createPageElement(page) {
    const element = window.document.createElement("div");
    element.classList.add(classes.page);
    element.innerHTML = page;
    return element;
  }

  /**
   *
   * @param {HTMLElement} layerPagination
   *
   */
  function paginationProcess1(layerPagination) {
    /**
     * Problem: Display Pagination UI
     *
     * Understanding The Problem
     *
     * + device width: 375px
     * + previousButton 1 2 3 ... (k - 1) k nextButton
     *
     * -> Calculate how many pages button should
     * display - done
     *
     * Approach
     *
     * + step 1: get device width - done
     * + step 2: get pagination area width - done
     *   + step 2.1: set max width for pagination area
     * + step 3: get one page width - done
     * + step 4: get page spacing number - done
     * + step 5: loop i from 1 to 100 - done
     * + step 6: increase width variable - done
     * + step 7: until pagination area width
     * - increase width < 0 then break - done
     *
     *
     */
    const deviceWidth = window.innerWidth;
    let paginationAreaWidth = deviceWidth - 24 * 2;

    if (deviceWidth >= 768) {
      paginationAreaWidth = 400;
      layerPagination.style.width = paginationAreaWidth + "px";
      layerPagination.style.marginLeft = "auto";
    } else {
      layerPagination.style.width = paginationAreaWidth + "px";
      layerPagination.style.margin = "0 auto";
    }

    const onePageWidth = 40;
    const pageSpacingNumber = 12;

    let increaseWidth = 40 * 2;
    let totalPageShouldBeDisplayed = 0;
    for (let i = 1; i <= 100; ++i) {
      increaseWidth += onePageWidth + pageSpacingNumber;
      totalPageShouldBeDisplayed++;
      if (paginationAreaWidth - increaseWidth - onePageWidth < 0) {
        break;
      }
    }

    return totalPageShouldBeDisplayed;
  }

  function createPreviousButton() {
    const htmlCode = ` 
    <svg height="100%" width="100%" viewBox="0 0 100 100">
      <defs>
        <polyline
          style="
            fill: none;
            stroke-width: 6px;
            stroke-linejoin: round;
            stroke-linecap: round;
            stroke: #fff;
          "
          id="previousArrow"
          points="55 40, 40 50, 55 60"
        />
      </defs>
      <use href="#previousArrow"></use>
    </svg>
    `;

    const element = window.document.createElement("div");
    element.classList.add(classes.previousButton);
    element.innerHTML = htmlCode;
    return element;
  }

  function createNextButton() {
    const htmlCode = ` 
    <svg height="100%" width="100%" viewBox="0 0 100 100">
      <defs>
        <polyline
          style="
            fill: none;
            stroke-width: 6px;
            stroke-linejoin: round;
            stroke-linecap: round;
            stroke: #fff;
          "
          id="nextArrow"
          points="45 40, 60 50, 45 60"
        />
      </defs>
      <use href="#nextArrow"></use>
    </svg>
    `;

    const element = window.document.createElement("div");
    element.classList.add(classes.nextButton);
    element.innerHTML = htmlCode;
    return element;
  }

  /**
   *
   * @param {HTMLElement} element
   * @param {HTMLElement} node
   *
   */
  function wasNodeChildOfElement(element, node) {
    /**
     * Problem: Check if a node is a child node
     * of an element
     *
     * Understand The Problem
     * + node3
     * + element
     *   + node1
     *   + node2
     *   + node3
     *   + node4
     *   ..
     *   + node_k
     * + ret = true
     *
     * + step 1: write a function to check if
     * a two element is the same
     * + step 2: traverse element children
     * use step 1 to get the result
     *
     *
     *
     *
     *
     */
    const childs = element.children;
    let flag = false;

    for (let i = childs.length - 1; i >= 0; --i) {
      if (childs[i].isSameNode(node)) {
        flag = true;
        break;
      }
    }

    return flag;
  }

  function paginationLogic1() {
    // remove other page active
    for (let j = pages.length - 1; j >= 0; --j) {
      pages[j].classList.remove(classes.active);
    }

    let wasNextButtonRemoved = false;

    const page = +pages[i].textContent;

    if (page === 1) {
      pages[i].classList.add(classes.active);
      return;
    }

    if (page !== 1) {
      layerPagination.prepend(previousButtonElement);
      const delta = page + totalPageShouldBeDisplayed - 1;

      if (delta >= totalPage) {
        /**
         * + 11 12 13 14 15 16
         * + page: 11
         * + ret
         *   + 9 10 11 12 13 14
         *
         *
         * + delta: 17
         * + page: 12
         * + delta2: delta - totalPage
         *   + delta2: delta - totalPage
         *   + delta2: 17 - 14
         *   + delta2: 3
         * + page - delta2: 12 - 3
         * + page - delta2: 9
         *
         *
         *
         * + ret
         *  ---0 1  2  3  4  5
         *   + 9 10 11 12 13 14
         *
         * + step 1: display 9 -> 12 - done
         * + step 2: display 12 -> 14 - done
         *
         *
         *
         */
        const delta2 = delta - totalPage;
        let pageTraverse = page;
        for (let i = delta2; i >= 0; --i) {
          pages[i].innerHTML = `${pageTraverse}`;
          pageTraverse--;
        }

        pageTraverse = totalPage;
        for (let j = totalPageShouldBeDisplayed - 1; j >= delta2 + 1; --j) {
          pages[j].innerHTML = `${pageTraverse}`;
          pageTraverse--;
        }

        let activeIndex = 0;
        for (let k = pages.length - 1; k >= 0; --k) {
          const pageValue = +pages[k].textContent;
          if (pageValue === page) {
            activeIndex = k;
            break;
          }
        }

        pages[activeIndex].classList.add(classes.active);
        if (
          +pages[activeIndex].textContent ===
          totalPage - pageArrayMaxLength + 1
        ) {
          const child =
            layerPagination.children[layerPagination.children.length - 1];
          const wasNextButton = child.classList.contains(classes.nextButton);

          if (wasNextButton) {
            layerPagination.removeChild(child);
            wasNextButtonRemoved = true;
          }
        }

        return;
      }

      /**
       * - case
       * + page: 6
       * + from: 1 2 3 4 5 6
       * + to: |6| 7 8 9 10 11
       *
       *
       */
      for (let k = pages.length - 1; k >= 0; --k) {
        const pageNumberIncrease = page + k;
        pages[k].textContent = `${pageNumberIncrease}`;
      }

      let activeIndex = 0;
      pages[activeIndex].classList.add(classes.active);
    }
  }

  /**
   *
   * @param {Array} items
   * @param {number} limit
   *
   */
  function calculateTotalPageButton(items, limit) {
    let countTraverse = 0;
    let totalPage = 0;

    for (let i = items.length - 1; i >= 0; --i) {
      countTraverse++;

      if (countTraverse === limit) {
        totalPage++;
        countTraverse = 0;
      }
    }

    if (countTraverse > 0) {
      totalPage++;
    }

    return totalPage;
  }

  /**
   *
   * @param {HTMLElement} element
   */
  function wasNextButtonElement(element) {
    const regex = new RegExp(classes.nextButton, "g");
    return regex.test(element.className);
  }

  /**
   *
   * @param {number} totalPageShouldBeDisplayed
   * @param {HTMLElement} layerPagination
   * @param {Array} items
   *
   *
   */
  function paginationProcess2(
    totalPageShouldBeDisplayed,
    layerPagination,
    items
  ) {
    /**
     * Problem: Display Pagination When
     * actual page number is greater than
     * should be displayed page number
     *
     * Understand The Problem
     *
     * + actual page: 14
     * + should be display page: 6
     *
     * + ret
     *     + |1| 2 3 4 5 6 next - done
     *     + prev |2| 3 4 5 6 7 next
     *     + prev |3| 4 5 6 7 8 next
     *     + prev |4| 5 6 7 8 9 next
     *     + prev |5| 6 7 8 9 10 next
     *     + prev |6| 7 8 9 10 11 next
     *     + prev |7| 8 9 10 11 12 next
     *     + prev |8| 9 10 11 12 13  next
     *     + prev |9| 10 11 12 13 14 next
     *     + prev |10| 11 12 13 14 next
     *     + prev 10 11 12 13 |14|
     *
     * -- ----------------
     * -- ----------------
     *
     * - total page: 14
     * - should max: 6
     *
     * + [1,2,3,4,5,6]
     *   + [|2|,3,4,5,6,7]
     *   + [|3|,4,5,6,7,8]
     *   + [|4|,5,6,7,8,9]
     *   + [|5|,6,7,8,9,10]
     *   + [|6|,7,8,9,10,11]
     *   + [|7|,8,9,10,11,12]
     *   + [|8|,9,10,11,12,13]
     *   + [|9|,10,11,12,13,14]
     *
     *
     *
     *
     * -- ------------------------------------------------
     * -- Problem: Calculate totalPage Base on items
     * -- -----------------------------------------------
     * + items: 14
     * + limit: 8
     * + offset: 0 -> 13
     * + totalPage: x
     * ----------------0 1 2 3 4 5 6 7 8 9  10 11 12 13
     * + array items: [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
     *
     * The Ret
     * + page 1: offset 0 -> 7
     * + page 2: offset 8 -> 15
     *   + max offset: 13
     *   + page 2 ret: offset 8 -> 13
     * -> Total Page: 2
     *   + How to find total page equation base on
     *   items, limit, offset ?
     *   -> a function
     *
     *
     * Equation
     * + total item base on offset = item2 Offset - item1 Offset + 1
     *   + item2 offset > item1 offset
     * + offset end = offset start + limit - 1
     *   + offset 7 = 0 + 8 - 1
     *   + offset 7 = 7
     * + total page = x
     *
     *
     *
     */

    const totalPage = calculateTotalPageButton(items, limit);

    const pagesArrayMaxLength = totalPageShouldBeDisplayed;
    const lastPagesIndex = pagesArrayMaxLength - 1;
    const arrayPagesMiddleIndex = window.Math.ceil(lastPagesIndex / 2);

    const previousButtonElement = createPreviousButton();
    const nextButtonElement = createNextButton();

    if (totalPage > totalPageShouldBeDisplayed) {
      /**
       * total page > total page should be displayed
       *
       */
      for (let i = pagesArrayMaxLength; i >= 1; --i) {
        const pageElement = createPageElement(i);
        layerPagination.prepend(pageElement);
      }

      // next button
      layerPagination.appendChild(nextButtonElement);
      nextButtonLogic(
        nextButtonElement,
        totalPageShouldBeDisplayed,
        layerPagination,
        previousButtonElement,
        totalPage
      );

      let activeIndex = 0;
      const pages = window.document.getElementsByClassName(classes.page);
      pages[activeIndex].classList.add(classes.active);

      for (let i = pages.length - 1; i >= 0; --i) {
        pages[i].onclick = function () {
          // remove other page active css
          for (let j = pages.length - 1; j >= 0; --j) {
            pages[j].classList.remove(classes.active);
          }

          const page = +pages[i].textContent;
          /**
           * array page index
           * 0 1 2 3 4 5
           *
           */
          // delta expected: 4
          const delta = pagesArrayMaxLength - 1 - 1;
          activeIndex = i;

          // click backwards logic
          if (activeIndex <= delta) {
            if (activeIndex === 0) {
              /**
               * Problem
               * + current pagination
               * -- 0 1  2  3  4  5
               *    9 10 11 12 13 14
               *
               * + ret
               * -- 0 1 2  3   4  5
               *    6 7 8  |9| 10 11
               *
               * w
               *
               *
               */
              layerPagination.appendChild(nextButtonElement);
              nextButtonLogic(
                nextButtonElement,
                totalPageShouldBeDisplayed,
                layerPagination,
                previousButtonElement,
                totalPage
              );

              const page = +pages[activeIndex].textContent;
              let pageTraverse = page;

              for (let i1 = arrayPagesMiddleIndex; i1 >= 0; --i1) {
                pages[i1].innerHTML = `${pageTraverse}`;
                pageTraverse--;
              }

              const delta2 = lastPagesIndex - arrayPagesMiddleIndex;
              pageTraverse = page + delta2;

              for (
                let j1 = lastPagesIndex;
                j1 >= arrayPagesMiddleIndex + 1;
                --j1
              ) {
                pages[j1].innerHTML = `${pageTraverse}`;
                pageTraverse--;
              }

              const firstPage = pages[0].textContent;

              if (firstPage <= 1) {
                pageTraverse = totalPageShouldBeDisplayed;

                for (let k1 = lastPagesIndex; k1 >= 0; --k1) {
                  pages[k1].innerHTML = `${pageTraverse}`;
                  pageTraverse--;
                }

                const child = layerPagination.children[0];
                if (child.classList.contains(classes.previousButton)) {
                  layerPagination.removeChild(child);
                }
              }

              let currentPageActiveIndex = arrayPagesMiddleIndex;
              for (let l1 = lastPagesIndex; l1 >= 0; --l1) {
                if (+pages[l1].textContent === page) {
                  currentPageActiveIndex = l1;
                  break;
                }
              }

              pages[currentPageActiveIndex].classList.add(classes.active);
            } else {
              pages[activeIndex].classList.add(classes.active);
            }

            return;
          }

          // click forwards logic
          if (page >= totalPageShouldBeDisplayed) {
            /**
             * Problem:
             * + page: 6
             * + ret
             *   prev 3 4 5 |6| 7 8 next
             *
             */
            layerPagination.prepend(previousButtonElement);
            previousButtonLogic(
              previousButtonElement,
              totalPageShouldBeDisplayed,
              layerPagination,
              nextButtonElement,
              totalPage
            );

            const lastPagesIndex = pagesArrayMaxLength - 1;
            const currentLastPage = +pages[lastPagesIndex].textContent;
            if (currentLastPage === totalPage) {
              pages[i].classList.add(classes.active);

              return;
            }

            if (i === lastPagesIndex) {
              /**
               * Problem
               * + lastPageIndex: 5
               * + arrayMiddleIndex = Math.ceil(lastPageIndex / 2)
               * + arrayMiddleIndex = 3
               * + page active: 6
               *   + 1 2 3 4 5 |6|
               *
               *
               * + ret
               * -- 0 1 2 3   4 5
               *    3 4 5 |6| 7 8
               *
               * + step 1: display page from 3 -> 0 - done
               * + step 2: display page from 5 -> 4 - done
               * + step 3: active css at right index
               *
               *
               *
               */
              let pageTraverse = page;
              const arrayPageMiddleIndex = window.Math.ceil(lastPagesIndex / 2);
              for (let i = arrayPageMiddleIndex; i >= 0; --i) {
                pages[i].innerHTML = `${pageTraverse}`;
                pageTraverse--;
              }

              const delta1 = lastPagesIndex - arrayPageMiddleIndex;
              pageTraverse = page + delta1;
              for (let j = lastPagesIndex; j >= arrayPageMiddleIndex + 1; --j) {
                pages[j].innerHTML = `${pageTraverse}`;
                pageTraverse--;
              }

              const currentLastPage = pages[lastPagesIndex];
              const currentLastPageValue = +currentLastPage.textContent;

              if (currentLastPageValue >= totalPage) {
                pageTraverse = totalPage;
                for (let k = lastPagesIndex; k >= 0; --k) {
                  pages[k].innerHTML = `${pageTraverse}`;
                  --pageTraverse;
                }

                const child =
                  layerPagination.children[layerPagination.children.length - 1];

                if (wasNextButtonElement(child)) {
                  layerPagination.removeChild(child);
                }
              }

              let activeIndex = arrayPageMiddleIndex;
              for (let l = lastPagesIndex; l >= 0; --l) {
                if (+pages[l].textContent === page) {
                  activeIndex = l;
                  break;
                }
              }

              pages[activeIndex].classList.add(classes.active);
            }
          }
        };
      }
      return;
    }

    if (totalPage <= totalPageShouldBeDisplayed) {
      /**
       * total page <= total page should be displayed
       * + ret
       *   + prev 1 2 3 4 5 6 next
       *
       *
       */
      let pageTraverse = 1;
      const previousButton = createPreviousButton();
      const nextButton = createNextButton();

      layerPagination.prepend(previousButton);

      previousButtonLogic(
        previousButton,
        totalPageShouldBeDisplayed,
        layerPagination,
        nextButton,
        totalPage
      );

      for (let i = totalPage; i >= 1; --i) {
        const pageButton = createPageElement(pageTraverse);
        layerPagination.appendChild(pageButton);
        pageTraverse++;
      }

      const pages = window.document.getElementsByClassName(classes.page);
      pages[0].classList.add(classes.active);

      for (let i = pages.length - 1; i >= 0; --i) {
        pageButtonLogic(pages[i], pages);
      }

      layerPagination.append(nextButton);
      nextButtonLogic(
        nextButton,
        totalPageShouldBeDisplayed,
        layerPagination,
        previousButton,
        totalPage
      );
    }
  }

  /**
   *
   * @param {HTMLElement} pageButton
   * @param {HTMLElement[]} pages
   *
   */
  function pageButtonLogic(pageButton, pages) {
    pageButton.onclick = function () {
      for (let i = pages.length - 1; i >= 0; --i) {
        pages[i].classList.remove(classes.active);
      }

      pageButton.classList.add(classes.active);
    };
  }

  /**
   *
   * @param {HTMLElement} nextButton
   * @param {number} totalPageShouldBeDisplayed
   * @param {HTMLElement} layerPagination
   * @param {HTMLElement} previousButtonElement
   * @param {number} totalPage
   *
   *
   */

  function nextButtonLogic(
    nextButton,
    totalPageShouldBeDisplayed,
    layerPagination,
    previousButtonElement,
    totalPage
  ) {
    if (nextButton) {
      const totalPageMinusOne = totalPage - 1;
      nextButton.onclick = function () {
        const pages = window.document.getElementsByClassName(classes.page);
        const lastIndex = pages.length - 1;
        const middleIndex = window.Math.ceil(lastIndex / 2);

        let activeIndex = 0;

        if (totalPage <= totalPageShouldBeDisplayed) {
          for (let i = pages.length - 1; i >= 0; --i) {
            if (pages[i].classList.contains(classes.active)) {
              activeIndex = i;
              break;
            }
          }

          if (activeIndex < totalPageMinusOne) {
            activeIndex++;
            pages[activeIndex].classList.add(classes.active);
          }

          for (let j = activeIndex - 1; j >= 0; --j) {
            pages[j].classList.remove(classes.active);
          }

          return;
        }

        for (let i = pages.length - 1; i >= 0; --i) {
          if (wasPageActive(pages[i])) {
            activeIndex = i;
            break;
          }
        }
        pages[activeIndex].classList.remove(classes.active);

        activeIndex++;
        pages[activeIndex].classList.add(classes.active);
        const page = +pages[activeIndex].textContent;

        // clicking forwards logic
        if (activeIndex === lastIndex) {
          /**
           * Problem
           * + activeIndex: 5
           * + middleIndex: 3
           *
           * + current pagination
           * --0 1 2 3 4 5
           *   1 2 3 4 5 |6|
           * + ret
           * --0 1 2 3   4 5
           *   3 4 5 |6| 7 8
           *
           */
          layerPagination.prepend(previousButtonElement);
          previousButtonLogic(
            previousButtonElement,
            totalPageShouldBeDisplayed,
            layerPagination,
            nextButton,
            totalPage
          );

          let pageTraverse = page;
          for (let i = middleIndex; i >= 0; --i) {
            pages[i].innerHTML = `${pageTraverse}`;
            pageTraverse--;
          }

          const delta = lastIndex - middleIndex;
          pageTraverse = page + delta;
          for (let j = lastIndex; j >= middleIndex + 1; j--) {
            pages[j].innerHTML = `${pageTraverse}`;
            pageTraverse--;
          }

          const lastPage = +pages[lastIndex].textContent;
          if (lastPage >= totalPage) {
            const child =
              layerPagination.children[layerPagination.children.length - 1];
            if (wasNextButtonElement(child)) {
              layerPagination.removeChild(child);
            }

            pageTraverse = totalPage;
            for (let l = lastIndex; l >= 0; --l) {
              pages[l].innerHTML = `${pageTraverse}`;
              pageTraverse--;
            }
          }

          for (let k = lastIndex; k >= 0; --k) {
            if (+pages[k].textContent === page) {
              activeIndex = k;
              break;
            }
          }

          pages[lastIndex].classList.remove(classes.active);
          pages[activeIndex].classList.add(classes.active);
        }
      };
    }
  }

  /**
   *
   * @param {HTMLElement} page
   */
  function wasPageActive(page) {
    const regex = /active/g;
    const pageClassName = page.className;
    return regex.test(pageClassName);
  }

  /**
   *
   * @param {HTMLElement} previousButton
   * @param {number} totalPageShouldBeDisplayed
   * @param {HTMLElement} layerPagination
   * @param {HTMLElement} nextButtonElement
   * @param {number} totalPage
   *
   *
   *
   *
   *
   */
  function previousButtonLogic(
    previousButton,
    totalPageShouldBeDisplayed,
    layerPagination,
    nextButtonElement,
    totalPage
  ) {
    if (previousButton) {
      const pages = window.document.getElementsByClassName(classes.page);
      const pagesArrayMaxLength = totalPageShouldBeDisplayed;
      const delta = pagesArrayMaxLength - 1 - 1;
      const arrayPagesMiddleIndex = window.Math.ceil(pagesArrayMaxLength / 2);
      const lastPagesIndex = pagesArrayMaxLength - 1;
      const layerFilms = window.document.getElementsByClassName(
        classes.layerFilms
      )[0];

      previousButton.onclick = function () {
        let activeIndex = 0;

        for (let i = pages.length - 1; i >= 0; --i) {
          if (wasPageActive(pages[i])) {
            activeIndex = i;
            break;
          }
        }

        if (activeIndex === 0) {
          const pageActive = +pages[activeIndex].textContent;
          displayFilmList(layerFilms, pageActive);
          return;
        }

        pages[activeIndex].classList.remove(classes.active);

        activeIndex--;
        pages[activeIndex].classList.add(classes.active);

        const pageValue = +pages[activeIndex].textContent;

        if (activeIndex === 0 && pageValue > 1) {
          pages[0].classList.remove(classes.active);
          // click backwards logic
          if (activeIndex <= delta) {
            if (activeIndex === 0) {
              /**
               * Problem
               * + current pagination
               * -- 0 1  2  3  4  5
               *    9 10 11 12 13 14
               *
               * + ret
               * -- 0 1 2  3   4  5
               *    6 7 8  |9| 10 11
               *
               * w
               *
               *
               */
              layerPagination.appendChild(nextButtonElement);
              nextButtonLogic(
                nextButtonElement,
                totalPageShouldBeDisplayed,
                layerPagination,
                previousButton,
                totalPage
              );

              const page = +pages[activeIndex].textContent;
              let pageTraverse = page;

              for (let i1 = arrayPagesMiddleIndex; i1 >= 0; --i1) {
                pages[i1].innerHTML = `${pageTraverse}`;
                pageTraverse--;
              }

              const delta2 = lastPagesIndex - arrayPagesMiddleIndex;
              pageTraverse = page + delta2;

              for (
                let j1 = lastPagesIndex;
                j1 >= arrayPagesMiddleIndex + 1;
                --j1
              ) {
                pages[j1].innerHTML = `${pageTraverse}`;
                pageTraverse--;
              }

              const firstPage = pages[0].textContent;
              if (firstPage <= 1) {
                pageTraverse = totalPageShouldBeDisplayed;

                for (let k1 = lastPagesIndex; k1 >= 0; --k1) {
                  pages[k1].innerHTML = `${pageTraverse}`;
                  pageTraverse--;
                }

                const child = layerPagination.children[0];
                if (child.classList.contains(classes.previousButton)) {
                  layerPagination.removeChild(child);
                }
              }

              let currentPageActiveIndex = arrayPagesMiddleIndex;
              for (let l1 = lastPagesIndex; l1 >= 0; --l1) {
                if (+pages[l1].textContent === page) {
                  currentPageActiveIndex = l1;
                  break;
                }
              }

              pages[currentPageActiveIndex].classList.add(classes.active);
            } else {
              pages[activeIndex].classList.add(classes.active);
            }
          }
        }

        const pageActive = +pages[activeIndex].textContent;
        displayFilmList(layerFilms, pageActive);
      };
    }
  }

  /**
   *
   * @param {HTMLElement} layerPagination
   * @param {Array} items
   * @param {HTMLElement} layerFilms
   *
   *
   */
  function handlePaginationUI(layerPagination, items, layerFilms) {
    /**
     * Problem: Pagination UI
     * + calculate page number should be displayed - done
     * + handle display suitable UI when the
     * actual page number is greater than page number
     * should be displayed - done
     * + previous button logic - done
     * + next button logic - done
     * + calculate total page base on data - done
     * + integrate data and UI -
     *
     */
    const totalPageShouldBeDisplayed = paginationProcess1(layerPagination);

    paginationProcess2(totalPageShouldBeDisplayed, layerPagination, items);
  }

  /**
   *
   * @param {number} length
   */
  function virtualItemData(length) {
    const ret = [];

    for (let i = length; i >= 1; --i) {
      ret.push(length - i + 1);
    }

    return ret;
  }

  async function main() {
    const layerFilms = window.document.getElementsByClassName(
      classes.layerFilms
    )[0];
    const layerPagination = window.document.getElementsByClassName(
      classes.layerPagination
    )[0];

    // const virtualTotalPageButton = 14;
    // const items = virtualItemData(limit * virtualTotalPageButton);

    displayFilmList(layerFilms);
    handlePaginationUI(layerPagination, items, layerFilms);
  }

  main();
})();
