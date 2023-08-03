const categoriesAmount = document.getElementById('categories');
const items = categoriesAmount.querySelectorAll('li.item');

console.log(`Total categories: ${items.length}`);

items.forEach((item) => {
  const categoryTitle = item.querySelector('h2').textContent;
  const subCategories = item.querySelectorAll('ul li');
  console.log(`Category: ${categoryTitle}, Number of subcategories: ${subCategories.length}`);
});

