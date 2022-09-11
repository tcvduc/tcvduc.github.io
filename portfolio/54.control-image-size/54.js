(function () {
  const classes = {
    buttonDownload: "buttonDownload",
    img: "img",
  };

  /**
   *
   * @param {string} source
   */
  function download(source) {
    const filename = source.split("/").pop();
    const aElement = document.createElement("a");
    aElement.setAttribute("href", source);
    aElement.setAttribute("download", filename);
    aElement.click();
    aElement.remove();
  }

  /**
   *
   * @param {HTMLButtonElement} buttonDownload
   * @param {HTMLImageElement} img
   */
  function buttonDownloadOnclick(buttonDownload, img) {
    buttonDownload.onclick = function () {
      console.log(img.src);

      const source = img.src;
      //   download(source);
    };
  }

  function main() {
    const buttonDownload = document.getElementsByClassName(
      classes.buttonDownload
    )[0];

    const img = document.getElementsByClassName(classes.img)[0];

    buttonDownloadOnclick(buttonDownload, img);
  }

  main();
})();
