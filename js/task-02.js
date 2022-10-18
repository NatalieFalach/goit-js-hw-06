const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const elementList = [];
const ulElement = document.querySelector('#ingredients');

for (const ingredient of ingredients) {
  const liEl = document.createElement('li');
  liEl.textContent = ingredient;
  liEl.classList.add('item');
  elementList.push(liEl);
}

ulElement.append(...elementList);
