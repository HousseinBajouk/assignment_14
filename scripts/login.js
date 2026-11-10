let username = document.getElementById("username");
let password = document.getElementById("password");
let loginBtn = document.getElementById("login_btn");
let message = document.getElementById("login_message");

function checkCredentials(username, password) {
  if (username.length < 6) {
    throw new Error(
      (message.textContent = "Username text must be at least 6 characters"),
    );
  }

  if (password.length < 10) {
    throw new Error(
      (message.textContent = "Password text must be at least 10 characters"),
    );
  }
}

function login() {
  try {
    checkCredentials(username.value, password.value);

    message.textContent = "Authenticated";
    message.style.color = "green";

    username.value = "";
    password.value = "";
  } catch (error) {
    message.textContent = error.message;
    message.style.color = "red";
  } finally {
    console.log("Login mission completed");
  }
}
loginBtn.addEventListener("click", login);
