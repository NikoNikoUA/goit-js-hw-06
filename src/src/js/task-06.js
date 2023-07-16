const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", onInputLength);

function onInputLength(event) {
  if (event.currentTarget.value.length !== Number(textInput.dataset.length)) {
    textInput.classList.add("invalid");
  } else {
    textInput.classList.remove("invalid");
    textInput.classList.add("valid");
  }
}

// How to find data - length value (alternative):
// Number(textInput.getAttribute("data-length")
