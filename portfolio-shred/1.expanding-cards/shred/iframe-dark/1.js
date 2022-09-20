(function () {
  const classes = {
    shredHTML: "shredHTML",
    shredCSS: "shredCSS",
    shredJS: "shredJS",
    layerHtmlShred: "layerHtmlShred",
    layerCSSShred: "layerCSSShred",
    layerJSShred: "layerJSShred",
  };

  const cssShred = [
    {
      index: 0,
      attributeName: "box-sizing",
      attributeValue: "border-box",
    },
    {
      index: 1,
      attributeName: "margin",
      attributeValue: "0px",
    },

    {
      index: 2,
      attributeName: "padding",
      attributeValue: "0px",
    },

    {
      index: 4,
      attributeName: "display",
      attributeValue: "flex",
    },

    {
      index: 5,
      attributeName: "font-family",
      attributeValue: `"Segoe UI"`,
    },

    {
      index: 7,
      attributeName: "flex-wrap",
      attributeValue: `wrap`,
    },

    {
      index: 8,
      attributeName: "background-color",
      attributeValue: `rgb(255, 243, 217)`,
    },

    {
      index: 9,
      attributeName: "min-height",
      attributeValue: `100vh`,
    },

    {
      index: 10,
      attributeName: "height",
      attributeValue: `60vh`,
    },

    {
      index: 11,
      attributeName: "width",
      attributeValue: `100%`,
    },

    {
      index: 12,
      attributeName: "margin-top",
      attributeValue: `24px`,
    },

    {
      index: 13,
      attributeName: "border-radius",
      attributeValue: `var(--border-radius)`,
    },

    {
      index: 14,
      attributeName: "transition-duration",
      attributeValue: `var(--transition-duration)`,
    },

    {
      index: 15,
      attributeName: "transition-property",
      attributeValue: `width`,
    },

    {
      index: 16,
      attributeName: "cursor",
      attributeValue: `pointer`,
    },

    {
      index: 17,
      attributeName: "position",
      attributeValue: `relative`,
    },

    {
      index: 18,
      attributeName: "background-image",
      attributeValue: `var(--bg-card-1)`,
    },

    {
      index: 19,
      attributeName: "bottom",
      attributeValue: `24px`,
    },

    {
      index: 20,
      attributeName: "left",
      attributeValue: `24px`,
    },

    {
      index: 21,
      attributeName: "font-size",
      attributeValue: `24px`,
    },

    {
      index: 22,
      attributeName: "color",
      attributeValue: `rgb(255, 243, 217)`,
    },

    {
      index: 23,
      attributeName: "font-weight",
      attributeValue: `400`,
    },

    {
      index: 24,
      attributeName: "opacity",
      attributeValue: `0`,
    },

    {
      index: 25,
      attributeName: "transition-duration",
      attributeValue: `var(--transition-duration)`,
    },

    {
      index: 26,
      attributeName: "transition-delay",
      attributeValue: `200ms`,
    },
  ];

  const jsShred = [
    {
      concept: "object",
    },
    {
      concept: "variable",
    },
    {
      concept: "function",
    },
    {
      concept: "loop",
    },
    {
      concept: "condition",
    },
    {
      concept: "JS DOM - document.getElementsByClassName()",
    },
  ];

  /**
   *
   * @param {string} tagName
   */
  function createAnHtmlShredTagElement(tagName) {
    const ret = window.document.createElement("code");
    ret.classList.add(classes.shredHTML);

    const htmlCode = `
      <div class="openTag">
        <div class="symbolLessThan">&lt;</div>
        <div class="tagName">${tagName}</div>
        <div class="symbolGreaterThan">&gt;</div>
      </div>
  
      `;

    ret.innerHTML = htmlCode;

    return ret;
  }

  /**
   *
   * @param {string} attributeName
   * @param {string} attributeValue
   *
   */
  function createAnCSSAttributeElement(attributeName, attributeValue) {
    const elementHtmlCode = `
      <div class="cssAttributeName">${attributeName}</div>
      <div class="colon">:&nbsp;</div>
      <div class="cssValue">${attributeValue}</div>
      <div class="semicolon">;</div>
      `;
    const ret = document.createElement("code");
    ret.classList.add(classes.shredCSS);
    ret.innerHTML = elementHtmlCode;
    return ret;
  }

  /**
   *
   * @param {string} concept
   */
  function createAnShredJSElement(concept) {
    const htmlCode = `
        <div class="jsConcept">${concept}</div>
      `;
    const ret = document.createElement("code");
    ret.classList.add(classes.shredJS);
    ret.innerHTML = htmlCode;
    return ret;
  }

  /**
   *
   * @param {HTMLElement} layerHtmlShred
   */
  function innerHTMLTagShred(layerHtmlShred) {
    const divTagElement = createAnHtmlShredTagElement("div");
    const scriptTagElement = createAnHtmlShredTagElement("script");
    const linkTagElement = createAnHtmlShredTagElement("link");
    const titleTagElement = createAnHtmlShredTagElement("title");

    layerHtmlShred.appendChild(divTagElement);
    layerHtmlShred.appendChild(scriptTagElement);
    layerHtmlShred.appendChild(linkTagElement);
    layerHtmlShred.appendChild(titleTagElement);
  }

  /**
   *
   * @param {HTMLElement} layerJSShred
   */
  function innerJSShred(layerJSShred) {
    jsShred.forEach(function (js) {
      const jsShredElement = createAnShredJSElement(js.concept);

      layerJSShred.appendChild(jsShredElement);
    });
  }

  /**
   *
   * @param {HTMLElement} layerCSSShred
   */
  function innerCSSCodeShred(layerCSSShred) {
    cssShred.forEach(function (css) {
      const cssCodeElement = createAnCSSAttributeElement(
        css.attributeName,
        css.attributeValue
      );

      layerCSSShred.appendChild(cssCodeElement);
    });
  }

  function main() {
    const layerHtmlShred = document.getElementsByClassName(
      classes.layerHtmlShred
    )[0];

    const layerCSSShred = document.getElementsByClassName(
      classes.layerCSSShred
    )[0];

    const layerJSShred = document.getElementsByClassName(
      classes.layerJSShred
    )[0];

    innerHTMLTagShred(layerHtmlShred);
    innerCSSCodeShred(layerCSSShred);
    innerJSShred(layerJSShred);
  }

  main();
})();
