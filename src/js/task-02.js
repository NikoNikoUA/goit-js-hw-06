const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = ingredients.forEach(function (ingredient) {

  const ingredientsListEl = document.createElement('li');
  ingredientsListEl.classList.add('item');
  ingredientsListEl.textContent = ingredient;
  
  const totalList = document.querySelector('#ingredients');
  totalList.append(ingredientsListEl);
 
});

