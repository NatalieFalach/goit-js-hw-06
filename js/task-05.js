const refs = {
  input: document.querySelector('#name-input'),
  output: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
  const input = event.currentTarget;
  refs.output.textContent = input.value;
  if (input.value === '') {
    refs.output.textContent = 'Anonymous';
  }
}
