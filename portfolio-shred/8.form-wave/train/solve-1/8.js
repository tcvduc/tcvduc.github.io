(function () {
  const classes = {
    layer: "layer",
    titleForm: "titleForm",
    layerForm: "layerForm",
    inputEmail: "inputEmail",
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

    layer.innerHTML = "Loading...";
    const loadedFontFace = await fontFaceMulish.load();
    window.document.fonts.add(loadedFontFace);
    window.document.body.style.fontFamily = "Mulish";
    const formElement = getFormElement();

    window.setTimeout(function () {
      layer.innerHTML = "";
      layer.appendChild(formElement);

      const inputEmail = window.document.getElementsByClassName(
        classes.inputEmail
      )[0];

      console.log(inputEmail);
    }, 500);
  }

  /**
   *
   * @param {HTMLElement} inputEmail
   */
  function inputEmailOnfocus(inputEmail) {
    console.log(inputEmail);
    console.log(1);
  }

  function detectDOMElements() {
    const elements = window.document.querySelectorAll("*");
    console.log(elements);
  }

  async function main() {
    const layer = window.document.getElementsByClassName(classes.layer)[0];
    await asyncTitleFormOnload(layer);

    detectDOMElements();

    // input email exists after the function above completed
    const inputEmail = window.document.getElementsByClassName(
      classes.inputEmail
    )[0];
    // inputEmailOnfocus(inputEmail);
  }

  main();
})();
