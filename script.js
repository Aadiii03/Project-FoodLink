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

// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function(event) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        event.preventDefault();
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Please enter a valid email address.");
        event.preventDefault();
    }
});

// Food Donation Form Validation
document.getElementById("foodDonationForm").addEventListener("submit", function(event) {
    const name = document.getElementById("food-name").value.trim();
    const email = document.getElementById("food-email").value.trim();
    const phone = document.getElementById("food-phone").value.trim();
    const foodType = document.getElementById("food-type").value.trim();
    const quantity = document.getElementById("food-quantity").value;
    const pickup = document.getElementById("food-pickup").value.trim();

    if (!name || !email || !phone || !foodType || !quantity || !pickup) {
        alert("Please fill in all fields.");
        event.preventDefault();
    } else if (quantity <= 0) {
        alert("Please enter a valid quantity.");
        event.preventDefault();
    }
});

// Monetary Donation Form Validation
document.getElementById("moneyDonationForm").addEventListener("submit", function(event) {
    const name = document.getElementById("money-name").value.trim();
    const email = document.getElementById("money-email").value.trim();
    const amount = document.getElementById("amount").value;

    if (!name || !email || !amount) {
        alert("Please fill in all required fields.");
        event.preventDefault();
    } else if (amount <= 0) {
        alert("Please enter a valid donation amount.");
        event.preventDefault();
    }
});
