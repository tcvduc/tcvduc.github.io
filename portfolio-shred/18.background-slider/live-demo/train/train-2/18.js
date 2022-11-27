const body = window.document.body;
const slides = window.document.querySelectorAll(".slide");
const leftButton = window.document.getElementById("left");
const rightButton = window.document.getElementById("right");

let activeSlide = 0;

rightButton.addEventListener("click", function () {
  activeSlide++;

  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }

  setBgToBody();
  setActiveSlide();
});

leftButton.addEventListener("click", function () {
  activeSlide--;

  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }

  setBgToBody();
  setActiveSlide();
});

function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[activeSlide].classList.add("active");
}
