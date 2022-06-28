const btnShow = document.querySelector(".show-btn");
const btnHide = document.querySelector(".hide-btn");
const btnHideP = document.querySelector(".hide-btn-p");
const btnShowP = document.querySelector(".show-btn-p");

const sidebar = document.querySelector(".app_side-bar");

const x = window.matchMedia("(max-width: 1115px)");

if (x.matches) {
  sidebar.classList.remove("show");
} else {
  sidebar.classList.add("show");
}

btnShow.addEventListener("click", function () {
  sidebar.classList.add("show");
  this.style.display = "none";
  btnHide.style.display = "block";
});

btnHide.addEventListener("click", function () {
  sidebar.classList.remove("show");
  this.style.display = "none";
  btnShow.style.display = "block";
});

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

var splide = new Splide(".splide", {
  type: "loop",
  perPage: 3,
  perMove: 1,
  loop: true,
  pagination: false,
  gap: "30px",
  autoplay: true,
  interval: 2000,
  breakpoints: {
    1024: {
      perPage: 2,
    },
  },
});
splide.mount();
