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

window.addEventListener("click", windowOnClick);
let modal = document.querySelector(".modal");
let buyBtns = document.querySelectorAll(".js-popup");
for(let i=0;i<buyBtns.length;i++) {
  buyBtns[i].addEventListener("click", toggleModal);
}
