let navMain = document.querySelector(".main-nav");
let navToggle = document.querySelector(".main-nav__toggle");
navMain.classList.remove("main-nav--nojs");
//let contactsMap = document.querySelector(".contacts__map--no-js");
//contactsMap.classList.remove("contacts__map--no-js");
navToggle.addEventListener("click", function () {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
})
