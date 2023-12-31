const inputEl = document.querySelector("input");
const createBtnEl = document.querySelector("button[data-create]");
const destroyBtnEl = document.querySelector("button[data-destroy]");
const divSectionBoxes = document.querySelector("#boxes");

createBtnEl.addEventListener("click", createBoxes);
destroyBtnEl.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  if (Number(inputEl.value) >= 1 && Number(inputEl.value) <= 100) {
    amount = Number(inputEl.value);
  }

  const allDiv = [];

  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement("div");
    divEl.style.backgroundColor = getRandomHexColor();

    const divElWidthandHeight = `${allDiv.reduce((previousvalue) => {
      return previousvalue + 10;
    }, 30)}px`;

    divEl.style.width = divElWidthandHeight;
    divEl.style.height = divElWidthandHeight;

    allDiv.push(divEl);
    console.log(divEl);
  }

  divSectionBoxes.append(...allDiv);
  console.log(divSectionBoxes);
}

function destroyBoxes() {
  divSectionBoxes.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
