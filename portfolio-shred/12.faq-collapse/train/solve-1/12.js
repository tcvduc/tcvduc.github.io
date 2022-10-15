(function () {
  const classes = {
    layerCollapseFAQ: "layerCollapseFAQ",
    collapseFAQ: "collapseFAQ",
    collapseIcon: "collapseIcon",
    faq: "faq",
    open: "open",
  };

  const faqs = [
    {
      index: 0,
      faq: "Is my edit correct?",
    },
    {
      index: 1,
      faq: "I need to know is this sentence correct or not?",
    },
    {
      index: 2,
      faq: "How to use in or on in day month year english grammar?",
    },
    {
      index: 3,
      faq: "How to use present perfect tense?",
    },
  ];

  /**
   *
   * @param {string} faqObject
   */
  function createAnCollapseFAQElement(faqObject) {
    const htmlCode = `
    
    <div class="bar">
      <div class="FAQ">${faqObject.faq}</div>
      <div class="collapseIcon" data-faq-index="${faqObject.index}">
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
              points="30 45, 50 60 , 70 45"
            />
          </defs>

          <use href="#line" />
        </svg>
      </div>
    </div>
    <div class="answer">Yes, it's correct.</div>
  
    `;
    const ret = window.document.createElement("div");
    ret.classList.add(classes.collapseFAQ);
    ret.classList.add(classes.faq);

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

    innerCollapseFAQ(layerCollapseFAQ);
    collapseIconListOnclick(collapseIcons, faqElements);
  }

  main();
})();
