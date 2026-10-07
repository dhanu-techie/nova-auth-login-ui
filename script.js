// ================================
// LOGIN / SIGNUP SWITCH
// ================================
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const loginTab = document.getElementById("loginTab");
const signupTab = document.getElementById("signupTab");
const formTitle = document.getElementById("formTitle");
const helloText = document.getElementById("helloText");
const bottomText = document.getElementById("bottomText");
function showLogin() {
    loginForm.classList.remove("hidden");
    signupForm.classList.add("hidden");
    loginTab.classList.add("active");
    signupTab.classList.remove("active");
    formTitle.textContent = "Sign in";
    helloText.textContent = "Welcome back 👋";
    bottomText.innerHTML =
        `Don't have an account?
        <button onclick="showSignup()">Create one</button>`;
}
function showSignup() {
    loginForm.classList.add("hidden");
    signupForm.classList.remove("hidden");
    loginTab.classList.remove("active");
    signupTab.classList.add("active");
    formTitle.textContent = "Create account";
    helloText.textContent = "Start something amazing ✨";
    bottomText.innerHTML =
        `Already have an account?
        <button onclick="showLogin()">Sign in</button>`;
}
// ================================
// PASSWORD SHOW / HIDE
// ================================

function togglePassword(id, icon) {
    const input = document.getElementById(id);
    if (input.type === "password") {
        input.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        input.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}
// ================================
// PASSWORD STRENGTH
// ================================
function checkPassword() {
    const password =
        document.getElementById("signupPassword").value;
    const bars =
        document.querySelectorAll(".strength-bars span");
    const text =
        document.getElementById("strengthText");
    let strength = 0;
    if (password.length >= 6) {
        strength++;
    }
    if (/[A-Z]/.test(password)) {
        strength++;
    }
    if (/[0-9]/.test(password)) {
        strength++;
    }
    if (/[^A-Za-z0-9]/.test(password)) {
        strength++;
    }
    bars.forEach((bar, index) => {
        bar.style.background =
            index < strength
                ? "#4da3ff"
                : "#273746";
    });
    if (password.length === 0) {
        text.textContent =
            "Password strength";
    } else if (strength <= 1) {
        text.textContent =
            "Weak password";
    } else if (strength <= 2) {
        text.textContent =
            "Medium password";
    } else {
        text.textContent =
            "Strong password 🔐";
    }
}
// ================================
// FORM SUBMIT
// ================================
loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Login successful! 🚀");
});
signupForm.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Account created successfully! 🎉");

});