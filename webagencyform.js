function validateForm() {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let postalCodeRegex = /^\d{5}$/;
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;
    let postalCode = document.getElementById("postalCode").value;

    if (!/^[a-zA-Z]+$/.test(firstName)) {
        displayError("First name should contain only letters");
        return false;
    }

    if (!/^[a-zA-Z]+$/.test(lastName)) {
        displayError("Last name should contain only letters");
        return false;
    }

    if (isNaN(age) || age <= 0) {
        displayError("Age should be a positive number");
        return false;
    }
    if (!passportNumberRegex.test(passportNumber)){
        displayError("passport number should be alpha numeric value");
        return false;
    }

    if (!emailRegex.test(email)) {
        displayError("Invalid email address");
        return false;
    }

    if (!postalCodeRegex.test(postalCode)) {
        displayError("Postal code should be a 5-digit number");
        return false;
    }
    return true;
}

function displayError(message) {
    let errorDiv = document.createElement("div");
    errorDiv.className = "error-message";
    errorDiv.textContent = message;

    let form = document.getElementById("Form");
    form.appendChild(errorDiv);
}