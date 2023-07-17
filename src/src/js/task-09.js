const btnEl = document.querySelector(".change-color");
const colorIdentifyer = document.querySelector(".color");
const body = document.querySelector("body");

btnEl.addEventListener("click", changeBackgroundColor);

function changeBackgroundColor() {
  body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;

  colorIdentifyer.textContent = body.style.backgroundColor;
}

// ======== function for obtaining random hexcolor ============
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
