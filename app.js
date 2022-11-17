const menuOpen = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-close");
const NavList = document.querySelector(".nav_list");
const Nav = document.querySelector("nav");

menuOpen.addEventListener("click", function () {
  menuOpen.classList.add("hide");
  menuClose.classList.remove("hide");
  NavList.classList.add("active");
  NavList.classList.add(".nav-mobile");
});

menuClose.addEventListener("click", function () {
  menuOpen.classList.remove("hide");
  menuClose.classList.add("hide");
  NavList.classList.remove("active");
});
