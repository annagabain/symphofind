
// Placeholder LOG IN
function loginUser(username, password) {

    const userData = JSON.parse(localStorage.getItem(username));


    if (userData && userData.password === password) {
        localStorage.setItem('loggedInUser', username);
        console.log('User logged in successfully.');
        return true;
    }

    console.log('Invalid username or password.');
    return false;
}


function isLoggedIn() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    return !!loggedInUser;
}

// LOG OUT
function logoutUser() {

    localStorage.removeItem('loggedInUser');
    console.log('User logged out successfully.');
}

console.log('hello from login page');


// TESTS
loginUser('test Username', 'testpassword') //test login with correct info
loginUser('false Username', 'testpassword') //test login with false info

// test login status
console.log(`LOGGED IN?: ${isLoggedIn()}`);
logoutUser('test Username', 'testpassword')
console.log(`LOGGED IN?: ${isLoggedIn()}`);



