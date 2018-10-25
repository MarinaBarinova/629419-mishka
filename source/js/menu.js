let navMain = document.querySelector(".main-nav");
let navToggle = document.querySelector(".main-nav__toggle");
//navMain.classList.remove("main-nav--nojs");
if (navMain.classList.contains("main-nav--nojs")) {
  navMain.classList.remove("main-nav--nojs");
  hideMenu();
}
navToggle.addEventListener("click", hideMenu);

function hideMenu() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
}
