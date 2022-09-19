(function () {
  const classes = {
    shredHTML: "shredHTML",
    layerHtmlShred: "layerHtmlShred",
  };

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
    <div class="closeTag">
      <div class="symbolLessThan">&lt;</div>
      <div class="symbolForwardSlash">/</div>
      <div class="tagName">${tagName}</div>
      <div class="symbolGreaterThan">&gt;</div>
    </div>
    `;

    ret.innerHTML = htmlCode;

    return ret;
  }

  /**
   *
   * @param {HTMLElement} layerHtmlShred
   */
  function innerHTMLTagShred(layerHtmlShred) {
    const aTagElement = createAnHtmlShredTagElement("a");
    const divTagElement = createAnHtmlShredTagElement("div");

    layerHtmlShred.appendChild(aTagElement);
    layerHtmlShred.appendChild(divTagElement);
  }

  function main() {
    const layerHtmlShred = document.getElementsByClassName(
      classes.layerHtmlShred
    )[0];

    innerHTMLTagShred(layerHtmlShred);
  }

  main();
})();
