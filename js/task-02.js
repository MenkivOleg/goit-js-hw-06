const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ul = document.getElementById('ingredients');
ingredients.forEach((ingredients) => {
  const li = document.createElement('li')
  li.classList.add('item');
  li.textContent = ingredients;
  ul.append(li);
});
// console.dir(`List ingredients: ${ ingredients }`)
// const li = document.createElement('li');
// li.classList.add('item')
// li.textContent = ingredients;
// ul.append(li);