const categories = document.querySelector("div.categories");
const inner_categories = document.querySelector("div.inner_categories");

categories.addEventListener("mousewheel", function (e) {
  if (e.deltaY > 0) {
    inner_categories.append(inner_categories.firstChild);
  } else {
    inner_categories.prepend(inner_categories.lastChild);
  }
});
