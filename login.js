function handleLogin(event) {
    event.preventDefault();


    if (localStorage.getItem("loggedInUser")) {
        alert("You have already logged in.");

        window.location.href = "index.html";
        return; 
    }

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username.trim() !== '' && password.trim() !== '') {
        alert("Thank you for logging in!");

        localStorage.setItem("loggedInUser", username);

        window.location.href = "index.html";
    } else {
        alert("Please enter both username and password");
    }
}
