const inputTextEl = document.querySelector("#name-input");
const headerNameEl = document.querySelector("#name-output");

inputTextEl.addEventListener("input", onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value.trim()) {
    headerNameEl.textContent = event.currentTarget.value.trim();
  } else headerNameEl.textContent = "Anonymous";
}
