(function () {
  const classes = {
    card: "card",
    opacity0: "opacity0",
    opacity1: "opacity1",
    cardTitle: "card-title",
    transitionDelay200ms: "transitionDelay200ms",
    width700px: "width700px",
    width100Percent: "width100Percent",
  };

  const screenWidth = screen.width;

  /**
   *
   * @param {HTMLElement[]} cards
   * @param {HTMLElement[]} cardTitles
   */
  function cardsOnclick(cards, cardTitles) {
    if (screenWidth < 1280) {
      for (let i = cards.length - 1; i >= 0; --i) {
        cards[i].onclick = function () {
          const flag = cards[i].classList.contains(classes.width100Percent);

          if (!flag) {
            cards[i].classList.add(classes.width100Percent);
            cardTitles[i].classList.add(classes.transitionDelay200ms);
            cardTitles[i].classList.add(classes.opacity1);
            return;
          }

          if (flag) {
            cards[i].classList.remove(classes.width100Percent);
            cardTitles[i].classList.remove(classes.transitionDelay200ms);
            cardTitles[i].classList.remove(classes.opacity1);

            window.setTimeout(function () {
              cards[i].classList.remove(classes.transitionDelay200ms);
            }, 400);
            return;
          }
        };
      }
    }

    if (screenWidth >= 1280) {
      for (let i = cards.length - 1; i >= 0; --i) {
        // card width transition
        cards[i].onclick = function () {
          for (let j = cards.length - 1; j >= 0; --j) {
            if (j !== i) {
              cards[j].classList.remove(classes.width700px);

              cardTitles[j].classList.remove(classes.opacity1);
              cardTitles[j].classList.remove(classes.transitionDelay200ms);
            }
          }
          cards[i].classList.toggle(classes.width700px);

          // card title opacity transition
          const flag = cards[i].classList.contains(classes.width700px);

          if (flag) {
            cardTitles[i].classList.add(classes.transitionDelay200ms);
            cardTitles[i].classList.add(classes.opacity1);
            return;
          }

          if (!flag) {
            cardTitles[i].classList.remove(classes.transitionDelay200ms);
            cardTitles[i].classList.remove(classes.opacity1);
          }
        };
      }
    }
  }

  function main() {
    const cards = document.getElementsByClassName(classes.card);
    const cardTitles = document.getElementsByClassName(classes.cardTitle);

    cardsOnclick(cards, cardTitles);
  }

  main();
})();
