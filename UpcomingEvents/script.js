document.addEventListener("DOMContentLoaded", () => {
    const registerButton = document.querySelector(".register-btn");
    
    if (registerButton) {
        registerButton.addEventListener("click", () => {
            alert("Registration Successful! More details will be sent to your email.");
        });
    }
});
