document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('.login-form form');
    const emailField = document.getElementById('email');
    const passwordField = document.getElementById('password');
    const logoutButton = document.getElementById('logoutButton');
  
    // Prepopulate email field with stored email if available
    // const storedEmail = localStorage.getItem('lastEnteredEmail');
    // if (storedEmail) {
    //   emailField.value = storedEmail;
    // }
  
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const email = emailField.value;
      const password = passwordField.value;
  

      if (loginUser(email, password)) {
        alert('Login successful! Redirecting to favorites...');
  
        // localStorage.setItem('lastEnteredEmail', email);
  
        window.location.href = 'favorites.html';
      } else {
        alert('Login failed. Check your email and password.');
      }
    });

 
    logoutButton.addEventListener('click', (event) => {
        event.preventDefault();
        logoutUser();
        alert('You have been logged out.');
        window.location.href = 'register-login.html'; // Redirect to login page
    });

  });
  
  function loginUser(email, password) {
      const userData = JSON.parse(localStorage.getItem(email));
  
      if (userData && userData.password === password) {
          localStorage.setItem('loggedInUser', email);
          console.log('User logged in successfully.');
          return true;
      }
  
      console.log('Invalid email or password.');
      return false;
  }
  
  function isLoggedIn() {
      const loggedInUser = localStorage.getItem('loggedInUser');
      return !!loggedInUser;
  }
  
  function logoutUser() {
      localStorage.removeItem('loggedInUser');
      console.log('User logged out successfully.');
  }
  


// TESTS
function testLogin() {

  loginUser('false Username', 'testpassword') //test login with false info

  // test login status
  loginUser('test@email.com', '12345');
  
  console.log(`LOGGED IN BEFORE?: ${isLoggedIn()}`);

  logoutUser("test Username", "testpassword");
  console.log(`LOGGED OUT?: ${!isLoggedIn()}`);
}
// testLogin();
