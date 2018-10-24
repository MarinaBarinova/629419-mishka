let modal = document.querySelector(".modal");
let buyBtns = document.querySelectorAll(".js-popup");

function toggleModal(event) {
  if (event.target !== modal) {
    event.preventDefault();
  }
  modal.classList.toggle("modal--opened");
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal(event);
  }
}

buyBtns.forEach((btn)=> { btn.addEventListener("click", toggleModal)});
window.addEventListener("click", windowOnClick);
