const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ul = document.querySelector('#ingredients');
ingredients.forEach((ingredients) => {
  const li = document.createElement('li')
  li.classList.add('item');
  li.textContent = ingredients;
  ul.append(li);
});

// const li = document.createElement('li');
// li.classList.add('item')
// li.textContent = ingredients;
// ul.append(li);