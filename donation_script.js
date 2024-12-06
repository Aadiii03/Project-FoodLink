document.addEventListener("DOMContentLoaded", () => {
    // Select buttons and sections
    const foodBtn = document.querySelector('a[href="#food-donation"]');
    const moneyBtn = document.querySelector('a[href="#money-donation"]');
    const foodSection = document.getElementById("food-donation");
    const moneySection = document.getElementById("money-donation");

    // Ensure all elements exist
    if (foodBtn && moneyBtn && foodSection && moneySection) {
        // Show food donation form, hide monetary donation form
        foodBtn.addEventListener("click", (e) => {
            e.preventDefault();
            foodSection.style.display = "block";
            moneySection.style.display = "none";
            window.scrollTo({ top: foodSection.offsetTop, behavior: "smooth" });
        });

        // Show monetary donation form, hide food donation form
        moneyBtn.addEventListener("click", (e) => {
            e.preventDefault();
            moneySection.style.display = "block";
            foodSection.style.display = "none";
            window.scrollTo({ top: moneySection.offsetTop, behavior: "smooth" });
        });
    } else {
        console.error("Required elements for donation functionality are missing.");
    }
});
