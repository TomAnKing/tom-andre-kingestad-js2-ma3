/* import displayMessage from "./components/displayMessage.js";
import { saveToken, saveUser } from "./utils/storage.js";
import { baseUrl } from "./settings/api.js"; */

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

/* async function completeLogin() {
  const url = baseUrl + "auth/local";

  const data = JSON.stringify({ identifier: username, password: password });

  const options = {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();
  } catch (error) {
    console.log(error);
  }
} */
