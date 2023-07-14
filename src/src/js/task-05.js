const inputName = document.querySelector("#name-input");
const headerName = document.querySelector("#name-output");

inputName.addEventListener("input", onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value) {
    headerName.textContent = event.currentTarget.value;
  } else headerName.textContent = "Anonymous";
}
