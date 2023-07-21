const inputTextEl = document.querySelector("#name-input");
const headerNameEl = document.querySelector("#name-output");

inputTextEl.addEventListener("input", onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value) {
    headerNameEl.textContent = event.currentTarget.value;
  } else headerNameEl.textContent = "Anonymous";
}
