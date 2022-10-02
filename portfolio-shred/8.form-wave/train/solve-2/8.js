(function () {
  const classes = {
    layer: "layer",
    titleForm: "titleForm",
    layerForm: "layerForm",
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
   * @param {HTMLElement} titleForm
   * @param {HTMLElement} layer
   *
   *
   */
  async function asyncTitleFormOnload(titleForm, layer) {
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
    }, 500);
  }

  async function main() {
    const titleForm = document.getElementsByClassName(classes.titleForm)[0];
    const layer = window.document.getElementsByClassName(classes.layer)[0];

    await asyncTitleFormOnload(titleForm, layer);
  }

  main();
})();
