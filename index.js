const form = document.getElementById("loginForm");
const userInput = document.getElementById("username");
const passInput = document.getElementById("password");
const error = document.getElementById("error");

const correctUsername = "Alawode Heritage";
const correctPassword = "He2rm@ns";

form.addEventListener("submit", function(e) {
    e.preventDefault();

    if (userInput.value === correctUsername && passInput.value === correctPassword) {
        error.style.color = "green";
        error.textContent = "Login successful!";
        // You can redirect to another page here
        window.location.href = "home.html";
    } else {
        error.style.color = "red";
        error.textContent = "Incorrect username or password.";
    }
});
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const eyeIcon = document.getElementById("eyeIcon");
const eyePath = document.getElementById("eyePath");
const pupil = document.getElementById("pupil");

togglePassword.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";

    // Change eye to "slashed" style (simple effect)
    eyePath.setAttribute("d", "M0 0 L16 16 M16 0 L0 16"); // fake "slash" line
    pupil.setAttribute("d", "");
  } else {
    passwordInput.type = "password";

    // Restore original eye
    eyePath.setAttribute("d", "M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8z");
    pupil.setAttribute("d", "M8 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6z");
  }
});
