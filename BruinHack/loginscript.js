document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", function (event) {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        
        // Basic validation
        if (!username || !password) {
            event.preventDefault();
            alert("Please enter both username and password.");
        }
    });
});
