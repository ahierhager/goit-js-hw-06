// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, 
// знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

// В результаті, в консолі будуть виведені наступні повідомлення.

const categoriesAmount = document.getElementById('categories');
const items = categoriesList.querySelectorAll('li.item');
console.log(`Total catagories: ${items.length}`);
items.forEach((item) => {
const categoryTitle = item.querySelector('h2').textContent;
const subCategories = item.querySelectorAll('ul li');
console.log(`Category: ${categoryTitle}, Number of subcategories: ${subCategories.length}`);
});
