// ==================== OPTION 1 ====================

// const counterValue = {
//   value: 0,

//   increment() {
//     this.value += 1;
//   },

//   decrement() {
//     this.value -= 1;
//   },
// };

// const buttonDecrement = document.querySelector(
//   'button[data-action="decrement"]'
// );

// const buttonIncrement = document.querySelector(
//   'button[data-action="increment"]'
// );

// const counterNumber = document.querySelector("#value");

// buttonDecrement.addEventListener("click", function () {
//   counterValue.decrement();
//   counterNumber.textContent = counterValue.value;
// });

// buttonIncrement.addEventListener("click", function () {
//   counterValue.increment();
//   counterNumber.textContent = counterValue.value;
// });

// ==================== OPTION 2 ====================

let counterValue = 0;

const buttonDecrease = document.querySelector(
  'button[data-action="decrement"]'
);

const buttonIncrease = document.querySelector(
  'button[data-action="increment"]'
);

const counterNumber = document.querySelector("#value");

buttonDecrease.addEventListener("click", () => {
  counterValue -= 1;
  counterNumber.textContent = counterValue;
});

buttonIncrease.addEventListener("click", () => {
  counterValue += 1;
  counterNumber.textContent = counterValue;
});
