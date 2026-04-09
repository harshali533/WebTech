document.getElementById("myForm").addEventListener("submit", function(event) {

    event.preventDefault(); // Prevent page reload

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");
    let successMsg = document.getElementById("successMsg");

    // Clear previous messages
    nameError.innerText = "";
    emailError.innerText = "";
    passwordError.innerText = "";
    successMsg.innerText = "";

    let isValid = true;

    // Name validation
    if (name === "") {
        nameError.innerText = "Name cannot be empty";
        isValid = false;
    }

    // Email validation
    if (!email.includes("@")) {
        emailError.innerText = "Enter valid email";
        isValid = false;
    }

    // Password validation
    if (password.length < 6) {
        passwordError.innerText = "Password must be at least 6 characters";
        isValid = false;
    }

    // If all valid
    if (isValid) {

        successMsg.innerText = "✅ Form Submitted Successfully!";
        document.getElementById("formTitle").style.color = "yellow";

        // Clear form
        document.getElementById("myForm").reset();
    }

});