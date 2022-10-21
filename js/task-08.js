const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const { email, password } = form.elements;


  if (email.value === '' || password.value === '') {
    alert('Все поля должны быть заполнены');
  }

  const result = {
    email: email.value,
    password: password.value,
  };
  console.log(result);
  form.reset();
}
