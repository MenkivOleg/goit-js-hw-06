const categoriesList = document.querySelectorAll('#categories .item');

console.dir('Number of categories:', categoriesList.length);

categoriesList.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const categoryElements = category.querySelectorAll('li').length;

  console.dir(`Category: ${categoryName}`);
  console.dir(`Elements: ${categoryElements}`);
});