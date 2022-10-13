(function () {
  const classes = {
    layerCollapseFAQ: "layerCollapseFAQ",
    collapseFAQ: "collapseFAQ",
    collapseIcon: "collapseIcon",
    faq: "faq",
    open: "open",
  };

  const faqs = [
    "Is my edit correct?",
    "I need to know is this sentence correct or not?",
    "How to use in or on in day month year english grammar?",
    "How to use present perfect tense?",
  ];

  /**
   *
   * @param {string} faq
   */
  function createAnCollapseFAQElement(faq) {
    const htmlCode = `
    
    <div class="bar">
      <div class="FAQ">${faq}</div>
      <div class="collapseIcon">
        <svg height="100%" width="100%" viewBox="0 0 100 100">
          <defs>
            <polyline
              id="line"
              style="
                stroke-linejoin: round;
                stroke-linecap: round;
                fill: none;
                stroke: #111;
                stroke-width: 8.5px;
              "
              points="50 45, 70 60 , 90 45"
            />
          </defs>

          <use href="#line" />
        </svg>
      </div>
    </div>
  
    `;
    const ret = window.document.createElement("div");
    ret.classList.add(classes.collapseFAQ);
    ret.innerHTML = htmlCode;
    return ret;
  }

  /**
   *
   * @param {HTMLElement} layerCollapseFAQ
   */
  function innerCollapseFAQ(layerCollapseFAQ) {
    faqs.forEach(function (faq) {
      const collapseFAQElement = createAnCollapseFAQElement(faq);
      layerCollapseFAQ.appendChild(collapseFAQElement);
    });
  }

  /**
   *
   * @param {HTMLElement[]} collapseIcons
   * @param {HTMLElement[]} faqElements
   *
   *
   */
  function collapseIconListOnclick(collapseIcons, faqElements) {
    for (let i = collapseIcons.length - 1; i >= 0; --i) {
      collapseIcons[i].onclick = function () {
        const faqIndex = +collapseIcons[i].getAttribute("data-faq-index");
        console.log(faqIndex);
        faqElements[faqIndex].classList.toggle(classes.open);
      };
    }
  }

  function main() {
    const layerCollapseFAQ = window.document.getElementsByClassName(
      classes.layerCollapseFAQ
    )[0];

    const collapseIcons = window.document.getElementsByClassName(
      classes.collapseIcon
    );
    const faqElements = window.document.getElementsByClassName(classes.faq);

    collapseIconListOnclick(collapseIcons, faqElements);

    // innerCollapseFAQ(layerCollapseFAQ);
  }

  main();
})();
