const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach(function (sound) {
  const btn = window.document.createElement("button");
  btn.classList.add("btn");

  btn.innerText = sound;

  btn.addEventListener("click", function () {
    stopSongs();

    window.document.getElementById(sound).play();
  });

  window.document.getElementById("buttons").appendChild(btn);
});

function stopSongs() {
  sounds.forEach(function (sound) {
    const song = window.document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
}
