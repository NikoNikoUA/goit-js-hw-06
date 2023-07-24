const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputEl.addEventListener("input", onSliderMove);

function onSliderMove() {
  if (inputEl.value) {
    textEl.style.fontSize = `${inputEl.value}px`;
  }
}
