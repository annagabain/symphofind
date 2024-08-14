// for shared behavior across different parts of the symphofind app.

// display the logged in status in the navbar
document.addEventListener('DOMContentLoaded', () => {
    const logoutButton = document.getElementById('logoutButton');
    const loginButton = document.getElementById('loginButton');

    if (isLoggedIn()) {
        logoutButton.style.display = 'inline'; // Show logout button
        loginButton.style.display = 'none'; // Show logout button


    } else {
        logoutButton.style.display = 'none'; // Hide logout button

    }

}

);

