(function () {
  /**
   * Problem 1: Collapse element text CSS was not okay.
   *
   * + step 1: count element line text
   * + step 2: if element line text is 1 then collapse element
   * height is 65px
   * + step 3: if element line text is more than 1 then collapse element
   * height is 65px + line text * 30px
   *
   */
  const classes = {
    layerCollapseFAQ: "layerCollapseFAQ",
    collapseFAQ: "collapseFAQ",
    collapseIcon: "collapseIcon",
    faq: "faq",
    FAQ: "FAQ",
    open: "open",
    displayInitial: "displayInitial",
    answer: "answer",
    displayNone: "displayNone",
  };

  const faqs = [
    {
      index: 0,
      faq: "Is my edit correct?",
      answer: "Yes, it's correct.",
    },
    {
      index: 1,
      faq: "I need to know is this sentence correct or not?",
      answer: "The sentence is wrong!",
    },
    {
      index: 2,
      faq: "How to use in or on in day month year english grammar?",
      answer: "Example: On 20 August 2020",
    },
    {
      index: 3,
      faq: "How to use present perfect tense?",
      answer: "Read it's document",
    },
  ];

  const FAQObject = {
    index: 0,
    faq: "Is that correct?",
    answer: "yes it's correct!",
  };

  /**
   *
   * @param {FAQObject} faqObject
   */
  function createAnCollapseFAQElement(faqObject) {
    const htmlCode = `
    
    <div class="bar">
      <div class="FAQ">${faqObject.faq}</div>
      <div class="collapseIcon" data-faq-index="${faqObject.index}">
        <svg class="svgCollapseIcon"  height="100%" width="100%" viewBox="0 0 100 100">
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

        <svg 
        class="svgCloseIcon displayNone"
        height="100%" width="100%" viewBox="0 0 100 100">
        <defs>
          <g id="closeIcon">
            <polyline
              style="stroke-linecap: round; stroke: #000; stroke-width: 10px"
              points="35 35, 65 65"
            />

            <polyline
              style="stroke-linecap: round; stroke: #000; stroke-width: 10px"
              points="65 35, 35 65"
            />
          </g>
        </defs>

        <use href="#closeIcon" />
      </svg>
      </div>
    </div>
    <div class="answer">${faqObject.answer}</div>
  
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

    const faqElements = window.document.getElementsByClassName(classes.FAQ);
    for (let i = 0; i <= faqElements.length - 1; i++) {
      // w
    }
  }

  /**
   *
   * @param {HTMLElement[]} collapseIcons
   * @param {HTMLElement[]} faqElements
   * @param {HTMLElement[]} answers
   *
   *
   *
   */
  function collapseIconListOnclick(collapseIcons, faqElements, answers) {
    for (let i = collapseIcons.length - 1; i >= 0; --i) {
      collapseIcons[i].onclick = function () {
        const faqIndex = +collapseIcons[i].getAttribute("data-faq-index");
        faqElements[faqIndex].classList.toggle(classes.open);
        answers[i].classList.toggle(classes.displayInitial);

        const children0 = collapseIcons[i].children[0];
        const children1 = collapseIcons[i].children[1];

        children0.classList.toggle(classes.displayNone);
        children1.classList.toggle(classes.displayNone);
      };
    }
  }

  /**
   *
   * @param {string} s
   */
  function catchDownLine(s) {
    const regex = /\n/g;
    return regex.test(s);
  }

  /**
   *
   * @param {HTMLElement} element
   */
  function countElementLineText(element) {
    let ret = 1;
    const elementText = element.textContent;
    for (let i = elementText.length - 1; i >= 0; --i) {
      if (catchDownLine(elementText[i])) {
        ret++;
      }
    }

    return ret;
  }

  /**
   *
   * @param {HTMLElement[]} FAQElements
   */
  function suitCSSCollapseFAQElement(FAQElements) {
    for (let i = FAQElements.length - 1; i >= 0; --i) {
      const text = FAQElements[i].textContent;
      for (let i = text.length - 1; i >= 0; --i) {
        if (catchDownLine(text[i])) {
          console.log(1);
        }
      }
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

    const FAQElements = window.document.getElementsByClassName(classes.FAQ);
    const answers = window.document.getElementsByClassName(classes.answer);

    suitCSSCollapseFAQElement(FAQElements);
    collapseIconListOnclick(collapseIcons, faqElements, answers);
  }

  main();
})();
