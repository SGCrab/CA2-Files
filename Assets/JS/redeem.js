const redeemForm = document.getElementById("redeemForm");
const promoCode = document.getElementById("promoCode");
const message = document.getElementById("message");

// List of valid redemption codes
const validCodes = [
    "GACHARANT2026",
    "WELCOME",
    "GIFT"
];

redeemForm.addEventListener("submit", function(event) {

    // Stop the page from refreshing
    event.preventDefault();

    // Get what the user typed
    let code = promoCode.value.trim();

    // Check if the code exists
    if (validCodes.includes(code)) {

        message.textContent = "Successfully redeemed!";
        message.style.color = "lime";

    } else {

        message.textContent = "Code invalid.";
        message.style.color = "red";

    }

});