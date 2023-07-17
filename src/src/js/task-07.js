const input = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

input.addEventListener("input", onSliderMove);

function onSliderMove() {
  if (input.value) {
    textEl.style.fontSize = `${input.value}px`;
  }
}
