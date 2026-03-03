const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");

const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

const loginError = document.getElementById("loginError");
const signupError = document.getElementById("signupError");

// Toggle Forms
loginBtn.addEventListener("click", () => {
  loginForm.classList.add("active");
  signupForm.classList.remove("active");
  loginBtn.classList.add("active");
  signupBtn.classList.remove("active");
});

signupBtn.addEventListener("click", () => {
  signupForm.classList.add("active");
  loginForm.classList.remove("active");
  signupBtn.classList.add("active");
  loginBtn.classList.remove("active");
});

// Email Validation Regex
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Login Validation
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  if (!isValidEmail(email)) {
    loginError.textContent = "Enter a valid email address.";
    return;
  }

  if (password.length < 6) {
    loginError.textContent = "Password must be at least 6 characters.";
    return;
  }

  loginError.textContent = "";

  // Simulate API call
  console.log("Login Data:", { email, password });

  alert("Login Successful (Simulated)");
});

// Signup Validation
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("signupEmail").value.trim();
  const password = document.getElementById("signupPassword").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();

  if (!isValidEmail(email)) {
    signupError.textContent = "Enter a valid email address.";
    return;
  }

  if (password.length < 6) {
    signupError.textContent = "Password must be at least 6 characters.";
    return;
  }

  if (password !== confirmPassword) {
    signupError.textContent = "Passwords do not match.";
    return;
  }

  signupError.textContent = "";

  // Simulate API call
  console.log("Signup Data:", { email, password });

  alert("Signup Successful (Simulated)");
});
