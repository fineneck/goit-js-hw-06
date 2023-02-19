const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

const list = ingredients.map(item => {
  let itemList = document.createElement('li');
  itemList.textContent = item;
  itemList.classList.add('item');

  return itemList;
});
ingredientsList.append(...list);

console.log(ingredientsList);
