const form = document.querySelector("#loginForm");
const userName = document.querySelector("#email");
const userNameError = document.querySelector("#emailError");
const password = document.querySelector("#password");
const passwordError = document.querySelector("#passwordError");

form.addEventListener("submit", validateForm);

function validateForm(event) {
  event.preventDefault();

  if (validateEmail(email.value)) {
    userNameError.style.display = "none";
  } else {
    userNameError.style.display = "block";
  }

  if (checkLength(password.value, 0) === true) {
    passwordError.style.display = "none";
  } else {
    passwordError.style.display = "block";
  }
}

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
