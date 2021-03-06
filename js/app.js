//FORM VALIDATION WITH IF/ELSE EXPRESSIONS
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

//Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

//
function validEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

//Show success 
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

//Event listners
form.addEventListener('submit', event => {
  event.preventDefault();
  
  if (username.value === ''){
    showError(username, 'Username is required');
  } else {
    showSuccess(username);
  }

  if (email.value === ''){
    showError(email, 'Email is required');
  } else if(!validEmail(email.value)){
    showError(email, 'Email is not valid')
  }
  else {
    showSuccess(email);
  }

  if (password.value === ''){
    showError(password, 'Password is required');
  } else {
    showSuccess(password);
  }

  if (confirmPassword.value === ''){
    showError(confirmPassword, 'Password is required');
  } else if (confirmPassword.value !== password.value){
    showError(confirmPassword, 'Passwords do not match');
  }
  else {
    showSuccess(confirmPassword);
  }
}) 
