function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  bodyEl: document.querySelector('body'),
  spanEl: document.querySelector('.color'),
  buttonEl: document.querySelector('.change-color'),
};
 refs.buttonEl.addEventListener('click', onButtonClick);
 function onButtonClick(e) {
   const color = getRandomHexColor();
   refs.bodyEl.style.backgroundColor = color;
   refs.spanEl.textContent = color;
 }
