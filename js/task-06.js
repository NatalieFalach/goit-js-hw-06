const input = document.querySelector('#validation-input');
input.addEventListener('blur', onInputFocusLeave);
function onInputFocusLeave(event) {
  const input = event.currentTarget;
  const length = Number(input.dataset.length);
  if (length === input.value.length) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
}
