const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const totalList = document.querySelector("#ingredients");

const ingredientsList = ingredients.map((ingredient) => {
  const ingredientsListEl = document.createElement("li");
  ingredientsListEl.classList.add("item");
  ingredientsListEl.textContent = ingredient;

  return ingredientsListEl;
});

totalList.append(...ingredientsList);
