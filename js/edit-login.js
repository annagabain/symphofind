// const greetLoggedInUser = document.getElementById('greetLoggedInUser');
// greetLoggedInUser.innerHTML = (`<p>hi ${loggedInUser}</p>`)
// greetLoggedInUser.innerHTML = (`<p>hello</p>`)



document.addEventListener('DOMContentLoaded', () => {
    const greetLoggedInUser = document.getElementById('greetLoggedInUser');
    const editLoginForm = document.getElementById('editLoginForm');
    const passwordField = document.getElementById('edit-password');
    const passwordField2 = document.getElementById('edit-password2');
    const logoutButton = document.getElementById('logoutButton');

    const loggedInUser = localStorage.getItem('loggedInUser');

    if (!loggedInUser) {
        alert('You must be logged in to edit your profile.');
        window.location.href = 'register-login.html';
    } else {
        greetLoggedInUser.innerHTML = `<p>Hello, ${loggedInUser}</p>`;
    }

    // Handle form submission for updating the password
    editLoginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const newPassword = passwordField.value;
        const confirmPassword = passwordField2.value;

        if (newPassword !== confirmPassword) {
            alert('Passwords do not match. Please try again.');
            return;
        }

        const currentUserData = JSON.parse(localStorage.getItem(loggedInUser));

        if (currentUserData) {
            currentUserData.password = newPassword;

            localStorage.setItem(loggedInUser, JSON.stringify(currentUserData));

            alert('Password updated successfully.');
            window.location.href = 'favorites.html'; 
        } else {
            alert('Error: User not found.');
        }
    });


    logoutButton.addEventListener('click', (event) => {
        event.preventDefault();
        localStorage.removeItem('loggedInUser');
        alert('You have been logged out.');
        window.location.href = 'register-login.html'; 
    });
});
