(function () {
  const classes = {
    layer: "layer",
    titleForm: "titleForm",
    layerForm: "layerForm",
    inputEmail: "inputEmail",
    inputPassword: "inputPassword",
    labelEmail: "labelEmail",
    labelPassword: "labelPassword",
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
   * @param {HTMLElement} input
   * @param {HTMLElement} label
   *
   */
  function addCSSForInputWhenItFocused(input, label) {
    input.classList.add(classes.inputOnFocus);
    label.classList.add(classes.labelOnFocus);
  }

  /**
   *
   * @param {HTMLElement} input
   * @param {HTMLElement} label
   *
   */
  function removeCSSForInputWhenItFocused(input, label) {
    input.classList.remove(classes.inputOnFocus);
    label.classList.remove(classes.labelOnFocus);
  }

  /**
   *
   * @param {string} s
   */
  function wasInputPasswordString(s) {
    const regex = /inputPassword/g;
    return regex.test(s);
  }

  /**
   *
   * @param {HTMLInputElement} inputEmail
   * @param {HTMLInputElement} labelEmail
   * @param {HTMLInputElement} inputPassword
   * @param {HTMLInputElement} labelPassword
   *
   *
   */
  function inputEmailOrInputPasswordTabKeyFocusedOn(
    inputEmail,
    labelEmail,
    inputPassword,
    labelPassword
  ) {
    window.onkeyup =
      /**
       *
       * @param {KeyboardEvent} event
       */
      function (event) {
        const { key } = event;

        if (wasTabKey(key)) {
          const tabKeyFocusedElement = window.document.activeElement;
          const className = tabKeyFocusedElement.classList[0];
          if (wasInputEmailString(className)) {
            addCSSForInputWhenItFocused(inputEmail, labelEmail);
          }

          if (!wasInputEmailString(className)) {
            removeCSSForInputWhenItFocused(inputEmail, labelEmail);
          }

          if (wasInputPasswordString(className)) {
            addCSSForInputWhenItFocused(inputPassword, labelPassword);
          }

          if (!wasInputPasswordString(className)) {
            removeCSSForInputWhenItFocused(inputPassword, labelPassword);
          }
        }
      };
  }

  /**
   *
   * @param {HTMLInputElement} inputEmail
   * @param {number} x
   * @param {number} y
   *
   *
   */
  function detectInputEmailArea(inputEmail, x, y) {
    const offsetTop = inputEmail.getBoundingClientRect().top;
    const offsetLeft = inputEmail.getBoundingClientRect().left;

    const height = inputEmail.getBoundingClientRect().height;
    const width = inputEmail.getBoundingClientRect().width;

    const maxYRange = offsetTop + height - 2;
    const maxXRange = offsetLeft + width;

    const f1 = y >= offsetTop && y <= maxYRange;
    const f2 = x >= offsetLeft && x <= maxXRange;
    const f3 = f1 && f2;

    return f3;
  }

  /**
   *
   * @param {HTMLInputElement} inputPassword
   * @param {number} x
   * @param {number} y
   *
   */
  function detectInputPasswordArea(inputPassword, x, y) {
    const offsetTop = inputPassword.getBoundingClientRect().top;
    const offsetLeft = inputPassword.getBoundingClientRect().left;

    const width = inputPassword.getBoundingClientRect().width;
    const height = inputPassword.getBoundingClientRect().height;

    const delta1 = offsetLeft + width;
    const delta2 = offsetTop + height - 2;

    const flag1 = x >= offsetLeft && x <= delta1;
    const flag2 = y >= offsetTop && x <= delta2;
    const flag3 = flag1 && flag2;

    if (flag3) {
      return;
    }
  }

  /**
   *
   * @param {HTMLInputElement} inputEmail
   * @param {HTMLLabelElement} labelEmail
   * @param {HTMLLabelElement} inputPassword
   * @param {HTMLLabelElement} labelPassword
   *
   *
   */

  function inputEmailOrInputPasswordMouseClickedOn(
    inputEmail,
    labelEmail,
    inputPassword,
    labelPassword
  ) {
    window.onmouseup =
      /**
       *
       * @param {MouseEvent} event
       */
      function (event) {
        const { pageX: x, pageY: y } = event;

        const wasInputEmailArea = detectInputEmailArea(inputEmail, x, y);
        const wasInputPasswordArea = detectInputEmailArea(inputPassword, x, y);

        if (wasInputEmailArea) {
          addCSSForInputWhenItFocused(inputEmail, labelEmail);
        }

        if (!wasInputEmailArea) {
          removeCSSForInputWhenItFocused(inputEmail, labelEmail);
        }

        if (wasInputPasswordArea) {
          addCSSForInputWhenItFocused(inputPassword, labelPassword);
        }

        if (!wasInputPasswordArea) {
          removeCSSForInputWhenItFocused(inputPassword, labelPassword);
        }
      };
  }

  /**
   *
   * @param {HTMLInputElement} inputEmail
   * @param {HTMLElement} labelEmail
   *
   *
   *
   */
  function inputEmailOnfocus(inputEmail, labelEmail) {
    /**
     * Problem: Detect Toggle Input Email On Focus
     * + The Input Email Focused When
     *   + The mouse clicked on - done
     *   + The Tab key focus on - done
     *
     */

    inputEmailOrInputPasswordTabKeyFocusedOn(inputEmail, labelEmail);
    inputEmailOrInputPasswordMouseClickedOn(inputEmail, labelEmail);
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

  /**
   *
   * @param {HTMLInputElement} inputPassword
   * @param {HTMLInputElement} labelPassword
   *
   */
  function tabKeyFocusedOnInputPassword(inputPassword, labelPassword) {
    window.onkeyup = function (event) {
      const { key } = event;

      if (wasTabKey(key)) {
        return;
      }

      if (!wasTabKey(key)) {
      }
    };
  }

  /**
   *
   * @param {HTMLInputElement} inputEmail
   * @param {HTMLInputElement} labelEmail
   * @param {HTMLInputElement} inputPassword
   * @param {HTMLInputElement} labelPassword
   *
   *
   */
  function inputEmailOrInputPasswordOnFocus(
    inputEmail,
    labelEmail,
    inputPassword,
    labelPassword
  ) {
    // input email or input password on focus
    inputEmailOrInputPasswordTabKeyFocusedOn(
      inputEmail,
      labelEmail,
      inputPassword,
      labelPassword
    );

    inputEmailOrInputPasswordMouseClickedOn(
      inputEmail,
      labelEmail,
      inputPassword,
      labelPassword
    );
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

    const inputPassword = window.document.getElementsByClassName(
      classes.inputPassword
    )[0];
    const labelPassword = window.document.getElementsByClassName(
      classes.labelPassword
    )[0];

    const pseudoBorderBottomOnFocus = window.document.getElementsByClassName(
      classes.pseudoBorderBottomOnFocus
    )[0];

    // inputEmailOnfocus(inputEmail, labelEmail);

    // inputPasswordOnFocus(inputPassword, labelPassword);

    inputEmailOrInputPasswordOnFocus(
      inputEmail,
      labelEmail,
      inputPassword,
      labelPassword
    );
  }

  main();
})();
