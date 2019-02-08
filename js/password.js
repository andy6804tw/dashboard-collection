//Form Blur Event Listeners
document.getElementById('password').addEventListener('blur', validatePassword);
document.getElementById('password_again').addEventListener('blur', validatePasswordAgain);

function validatePassword() {
  const password = document.getElementById('password');
  const re = /[a-zA-Z0-9]{6,30}$/;

  if (!re.test(password.value)) {
    password.classList.add('is-invalid');
  } else {
    password.classList.remove('is-invalid');
    checkPassword = true;
  }
}
function validatePasswordAgain() {

  const password = document.getElementById('password');
  const passwordAgain = document.getElementById('password_again');
  if (!(password.value == passwordAgain.value) && (password.value != '')) {
    passwordAgain.classList.add('is-invalid');
  } else {
    passwordAgain.classList.remove('is-invalid');
    checkPasswordAgain = true;
  }
}


