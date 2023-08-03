const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];


const ulElement = document.getElementById("ingredients");


const listItems = ingredients.map((ingredient) => {
  const listItem = document.createElement("li");
  listItem.textContent = ingredient;
  listItem.classList.add('item');
  return listItem;
});


ulElement.append(...listItems);