(function () {
  const classes = {
    video: "video",
    source: "source",
  };

  /**
   *
   * @param {HTMLSourceElement} source
   */
  function getSourceTagInfo(source) {}

  /**
   *
   * @param {HTMLVideoElement} video
   */
  function getVideoTagInfo(video) {
    video.onplaying = function (event) {
      console.log("event: ", event);
    };
  }

  function main() {
    const source = document.getElementsByClassName(classes.source)[0];
    const video = document.getElementsByClassName(classes.video)[0];

    getVideoTagInfo(video);
  }
  main();
})();
