const loginForm = document.querySelector('.login-form');

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const { email, password } = event.target.elements;

  const trimmedEmail = email.value.trim();
  const trimmedPassword = password.value.trim();

  if (trimmedEmail === '' || trimmedPassword === '') {
    alert('All form fields must be filled in');
    return;
  }

  const formDatabase = {
    email: trimmedEmail,
    password: trimmedPassword,
  };

  console.log(formDatabase);
  event.target.reset();
};

