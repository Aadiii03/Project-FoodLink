// Form Validation for Sign Up
document.getElementById("signupForm").addEventListener("submit", function(event) {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (!name || !email || !password) {
        alert("Please fill in all fields.");
        event.preventDefault();
    }
});
