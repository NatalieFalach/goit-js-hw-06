function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  inputEl: document.querySelector('input'),
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
};
refs.btnCreate.addEventListener('click', onCreateBtnClick);
function onCreateBtnClick(e) {
  const value = refs.inputEl.value;
  refs.boxes.innerHTML = '';
  createBoxes(value);
}

refs.btnDestroy.addEventListener('click', onDestroyBtnClick);
function onDestroyBtnClick(e) {
  refs.boxes.innerHTML = '';
}

function createBoxes(amount) {
  let width = 30;
  let height = 30;
  const divs = [];
  for (let index = 0; index < amount; index++) {
    const divEl = `<div style="width: ${width}px; height: ${height}px; background-color:${getRandomHexColor()}"></div>`;
    width += 10;
    height += 10;

    divs.push(divEl);
  }

  refs.boxes.insertAdjacentHTML('beforeend', divs.join(''));
}

// function createBoxes2(amount) {
//   let width = 30;
//   let height = 30;

//   for (let index = 0; index < amount; index++) {
//     const divEl = document.createElement('div');
//     divEl.style.width = `${width}px`;
//     divEl.style.height = `${height}px`;
//     divEl.style.backgroundColor = getRandomHexColor();
//     refs.boxes.append(divEl);

//     width += 10;
//     height += 10;
//   }
// }
