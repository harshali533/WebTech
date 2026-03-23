// ================= REGISTER BUTTON =================
document.getElementById("registerBtn").addEventListener("click", function () {

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirmPassword");

    let valid = true;

    // Clear previous error messages
    document.querySelectorAll("small").forEach(function(el) {
        el.innerText = "";
    });

    document.querySelectorAll("input").forEach(function(el) {
        el.classList.remove("error");
    });

    document.getElementById("successMsg").innerText = "";

    // Name validation
    if (name.value.trim() === "") {
        document.getElementById("nameError").innerText = "Name is required";
        name.classList.add("error");
        valid = false;
    }

    // Email validation
    if (email.value.trim() === "") {
        document.getElementById("emailError").innerText = "Email is required";
        email.classList.add("error");
        valid = false;
    } 
    else if (!email.value.includes("@")) {
        document.getElementById("emailError").innerText = "Invalid email format";
        email.classList.add("error");
        valid = false;
    }

    // Phone validation
    if (phone.value.trim() === "") {
        document.getElementById("phoneError").innerText = "Phone is required";
        phone.classList.add("error");
        valid = false;
    } 
    else if (!/^\d{10}$/.test(phone.value)) {
        document.getElementById("phoneError").innerText = "Phone must be 10 digits";
        phone.classList.add("error");
        valid = false;
    }

    // Password validation
    if (password.value.trim() === "") {
        document.getElementById("passwordError").innerText = "Password is required";
        password.classList.add("error");
        valid = false;
    } 
    else if (password.value.length < 6) {
        document.getElementById("passwordError").innerText = "Password must be at least 6 characters";
        password.classList.add("error");
        valid = false;
    }

    // Confirm password validation
    if (confirmPassword.value.trim() === "") {
        document.getElementById("confirmPasswordError").innerText = "Confirm Password is required";
        confirmPassword.classList.add("error");
        valid = false;
    } 
    else if (confirmPassword.value !== password.value) {
        document.getElementById("confirmPasswordError").innerText = "Passwords do not match";
        confirmPassword.classList.add("error");
        valid = false;
    }

    // If all valid
    if (valid) {
        document.getElementById("successMsg").innerText = "Registration Successful!";
        
        // Clear form
        name.value = "";
        email.value = "";
        phone.value = "";
        password.value = "";
        confirmPassword.value = "";
    }

});


// ================= LOGIN LINK =================
document.getElementById("loginLink").addEventListener("click", function () {
    alert("Redirecting to Login Page...");
});