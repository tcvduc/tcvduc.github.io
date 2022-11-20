(function () {
  const classes = {
    layer1: "layer1",
    layer3: "layer3",
    leftArrow: "leftArrow",
    rightArrow: "rightArrow",
  };

  const images = [
    "https://images.hdqwalls.com/download/small-memory-8k-2a-7680x4320.jpg",
    "https://images.hdqwalls.com/download/small-memory-evening-8k-5o-7680x4320.jpg",
    "https://images8.alphacoders.com/903/903481.jpg",
    "https://c4.wallpaperflare.com/wallpaper/664/373/122/mikael-gustafsson-artwork-horizon-fox-wallpaper-preview.jpg",
    "https://p4.wallpaperbetter.com/wallpaper/566/335/681/forest-firewatch-nature-digital-art-wallpaper-preview.jpg",
  ];
  let imageIndex = 0;
  const imageMaximumIndex = images.length - 1;

  /**
   *
   * @param {HTMLElement} leftArrow
   * @param {HTMLElement} layer1
   * @param {HTMLElement} layer3
   *
   */
  function leftArrowOnclick(leftArrow, layer1, layer3) {
    leftArrow.onclick = function () {
      imageIndex--;

      if (imageIndex < 0) {
        imageIndex = imageMaximumIndex;
      }

      layer1.style.backgroundImage = `url('${images[imageIndex]}')`;
      layer3.style.backgroundImage = `url('${images[imageIndex]}')`;
    };
  }

  function main() {
    const layer1 = window.document.getElementsByClassName(classes.layer1)[0];
    const layer3 = window.document.getElementsByClassName(classes.layer3)[0];
    const leftArrow = window.document.getElementsByClassName(
      classes.leftArrow
    )[0];
    const rightArrow = window.document.getElementsByClassName(
      classes.rightArrow
    )[0];

    layer1.style.backgroundImage = `url('${images[imageIndex]}')`;

    leftArrowOnclick(leftArrow, layer1, layer3);
  }

  main();
})();
