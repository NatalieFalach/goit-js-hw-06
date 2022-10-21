let counterValue = 0;
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counterEl = document.querySelector('#value');

const refs = {
  counterEl: document.querySelector('#counter'),
  valueEl: document.querySelector('#value'),
};

refs.counterEl.addEventListener('click', onCounterClick);

function onCounterClick(e) {
  const target = e.target;

  const btnType = target.dataset.action;
  if (btnType === 'increment') {
    counterValue += 1;
  } else {
    counterValue -= 1;
  }

  refs.valueEl.textContent = counterValue;
}

// incrementBtn.addEventListener('click', e => {
//   counterValue += 1;
//   counterEl.textContent = counterValue;
// });
// decrementBtn.addEventListener('click', e => {
//   counterValue -= 1;
//   counterEl.textContent = counterValue;
// });
