(function () {
  const classes = {
    layer: "layer",
    titleForm: "titleForm",
    layerForm: "layerForm",
    inputEmail: "inputEmail",
    labelEmail: "labelEmail",
    labelOnFocus: "labelOnFocus",
    inputOnFocus: "inputOnFocus",
    width100Percent: "width100Percent",
    pseudoBorderBottomOnFocus: "pseudoBorderBottomOnFocus",
  };

  function getFormElement() {
    const htmlCode = `
    <div class="titleForm">Please Login</div>

    <div class="layerInputFormGroup">
      <div class="layerEmail">
        <input class="inputEmail" type="email" placeholder="Email" />
      </div>
      <div class="layerPassword">
        <input
          class="inputPassword"
          type="password"
          placeholder="Password"
        />
      </div>
      <div class="layerButton">
        <button class="buttonLogin">Login</button>
      </div>
      <div class="layerText">
        <p class="text">Don't have account?</p>
        <div class="buttonRegister">Registers</div>
      </div>
    </div>
    `;

    const ret = window.document.createElement("div");
    ret.classList.add(classes.layerForm);
    ret.innerHTML = htmlCode;

    return ret;
  }

  /**
   *
   * @param {HTMLElement} layer
   *
   *
   */
  async function asyncTitleFormOnload(layer) {
    const fontFaceMulish = new FontFace(
      "Mulish",
      "url(Mulish-bold.ttf)",
      undefined
    );

    const loadedFontFace = await fontFaceMulish.load();
    window.document.fonts.add(loadedFontFace);
    window.document.body.style.fontFamily = "Mulish";
  }

  /**
   *
   * @param {string} key
   */
  function wasTabKey(key) {
    const regex = /Tab/g;
    return regex.test(key);
  }

  /**
   *
   * @param {string} s
   */
  function wasInputEmailString(s) {
    const regex = /inputEmail/g;
    return regex.test(s);
  }

  /**
   *
   * @param {HTMLElement} inputEmail
   * @param {HTMLElement} labelEmail
   *
   */
  function addCSSForInputEmailWhenItFocused(inputEmail, labelEmail) {
    inputEmail.classList.add(classes.inputOnFocus);
    labelEmail.classList.add(classes.labelOnFocus);
  }

  /**
   *
   * @param {HTMLElement} inputEmail
   * @param {HTMLElement} labelEmail
   *
   */
  function removeCSSForInputEmailWhenItFocused(inputEmail, labelEmail) {
    inputEmail.classList.remove(classes.inputOnFocus);
    labelEmail.classList.remove(classes.labelOnFocus);
  }

  /**
   *
   * @param {HTMLInputElement} inputEmail
   * @param {HTMLInputElement} labelEmail
   *
   */
  function inputEmailTabKeyFocusedOn(inputEmail, labelEmail) {
    window.onkeyup =
      /**
       *
       * @param {KeyboardEvent} event
       */
      function (event) {
        const { key } = event;
        console.log(1);
        if (wasTabKey(key)) {
          const tabKeyFocusedElement = window.document.activeElement;
          const className = tabKeyFocusedElement.classList[0];

          if (wasInputEmailString(className)) {
            addCSSForInputEmailWhenItFocused(inputEmail, labelEmail);
            return;
          }

          if (!wasInputEmailString(className)) {
            removeCSSForInputEmailWhenItFocused(inputEmail, labelEmail);
          }
        }
      };
  }

  /**
   *
   * @param {HTMLInputElement} inputEmail
   * @param {HTMLElement} labelEmail
   * @param {HTMLElement} pseudoBorderBottomOnFocus
   *
   *
   *
   */
  function inputEmailOnfocus(
    inputEmail,
    labelEmail,
    pseudoBorderBottomOnFocus
  ) {
    /**
     * Problem: Detect Toggle Input Email On Focus
     * + The Input Email Focused When
     *   + The mouse clicked on
     *   + The Tab key focus on
     *
     */

    inputEmailTabKeyFocusedOn(inputEmail, labelEmail);
  }

  function detectDOMChange() {
    const mutationObserve = new MutationObserver(function (mutation) {
      const mutationTarget = mutation.target;
      console.log(mutation);
    });

    mutationObserve.observe(window.document.documentElement, {
      attributes: true,
      characterData: true,
      childList: true,
      subtree: true,
      attributeOldValue: true,
      characterDataOldValue: true,
    });
  }

  async function main() {
    const layer = window.document.getElementsByClassName(classes.layer)[0];
    await asyncTitleFormOnload(layer);

    // input email exists after the function above completed
    const inputEmail = window.document.getElementsByClassName(
      classes.inputEmail
    )[0];
    const labelEmail = window.document.getElementsByClassName(
      classes.labelEmail
    )[0];
    const pseudoBorderBottomOnFocus = window.document.getElementsByClassName(
      classes.pseudoBorderBottomOnFocus
    )[0];

    inputEmailOnfocus(inputEmail, labelEmail, pseudoBorderBottomOnFocus);
  }

  main();
})();
