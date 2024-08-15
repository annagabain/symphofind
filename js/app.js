// for shared behavior across different parts of the symphofind app.

// display the logged in status in the navbar
document.addEventListener('DOMContentLoaded', () => {
    const logoutButton = document.getElementById('logoutButton');
    const loginButton = document.getElementById('loginButton');
    const editProfile = document.getElementById('editProfile');


    if (isLoggedIn()) {
        logoutButton.style.display = 'inline'; // Show logout button
        loginButton.style.display = 'none'; // Hide login button
        editProfile.style.display = 'inline'; // Show edit profile button

    

    } else {
        logoutButton.style.display = 'none'; // Hide logout button
        editProfile.style.display = 'none'; // Hide edit profile button


    }

}

);

