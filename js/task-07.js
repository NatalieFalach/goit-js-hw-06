const inputEl = document.querySelector('#font-size-control');
const spantEl = document.querySelector('#text');

inputEl.addEventListener('input', onInputChange);

function onInputChange(e) {
  const target = e.currentTarget;
  spantEl.style.fontSize = `${target.value}px`;
}
