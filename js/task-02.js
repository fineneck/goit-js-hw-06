const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

const createListIngredients = items => {
  return items.map(item => {
    const itemList = document.createElement('li');
    itemList.textContent = item;
    itemList.classList.add('item');

    return itemList;
  });
};

const elements = createListIngredients(ingredients);
ingredientsList.append(...elements);

console.log(elements);