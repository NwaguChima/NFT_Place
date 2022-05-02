"use strict";

// element toggle
const elemToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// navbar variables
const navbar = document.querySelector("[data-navbar]");
const navbarToggleBtn = document.querySelector("[data-navbar-toggle-btn]");

navbarToggleBtn.addEventListener("click", function () {
  elemToggleFunc(navbar);
});

// wishlist button
const whishListBtn = [...document.querySelectorAll("[data-whishlist-btn")];

for (let i = 0; i < whishListBtn.length; i++) {
  whishListBtn[i].addEventListener("click", function () {
    elemToggleFunc(this);
  });
}
