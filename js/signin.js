import displayMessage from "./components/displayMessage.js";
import { saveToken, saveUser } from "./utils/storage.js";
import { baseUrl } from "./settings/api.js";

const form = document.querySelector("#loginForm");
const userName = document.querySelector("#email");
const userNameError = document.querySelector("#emailError");
const password = document.querySelector("#password");
const passwordError = document.querySelector("#passwordError");
const message = document.querySelector(".message-container");

form.addEventListener("submit", validateForm);

function validateForm(event) {
  event.preventDefault();

  message.innerHTML = "";

  const usernameValue = userName.value.trim();
  const passwordValue = password.value.trim();

  if (usernameValue.length === 0 || passwordValue.length === 0) {
    return displayMessage("Invalid values", ".message-container");
  }

  completeLogin(usernameValue, passwordValue);
}

async function completeLogin(username, password) {
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

    if (json.user) {
      window.location = "signedIn.html";

      saveToken(json.jwt);
      saveUser(json.user);
    }

    if (!json.jwt) {
      displayMessage("Wrong username or password", ".message-container");
    }
  } catch (error) {}
}
