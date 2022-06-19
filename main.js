function toggleItem(elem) {
  for (var i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function (e) {
      var current = this;
      for (var i = 0; i < elem.length; i++) {
        if (current != elem[i]) {
          elem[i].classList.remove("active");
        } else {
          current.classList.add("active");
        }
      }
      e.preventDefault();
    });
  }
}
toggleItem(document.querySelectorAll(".app_side-bar_item"));
document.addEventListener("DOMContentLoaded", function () {
  new Splide(".splide", {
    type: "loop",
    perPage: 3,
    perMove: 1,
    loop: true,
    pagination: false,
    gap: '30px',
    autoplay: true,
    interval: 2000,
  }).mount();
});
