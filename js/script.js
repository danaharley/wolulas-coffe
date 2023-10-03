const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

const navLinks = document.querySelectorAll(".nav__link");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const navMenu = document.getElementById("nav-menu");

    navMenu.classList.remove("show-menu");
  });
});

window.addEventListener("scroll", function () {
  const navbar = document.getElementById("header");

  if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
