document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    
    registerForm.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const email = document.getElementById('register-email').value;
      const password = document.getElementById('register-password').value;
      const password2 = document.getElementById('register-password2').value;
  
      if (password !== password2) {
        alert('Passwords do not match.');
        return;
      }
  
      if (registerUser(email, password)) {
        alert('Registration successful! You can now log in.');
        registerForm.reset();
        window.location.href = 'register-login.html';
      } else {
        alert('Registration failed. The email might be already taken.');
      }
    });
  });
  
function registerUser(email, password) {
    
    if (localStorage.getItem(email)) {
        console.log('Email already taken.');
        return false;
    }

    localStorage.setItem(email, JSON.stringify({ password }));
    console.log('User registered successfully.');
    return true;
}

// TESTS
// registerUser('test@email.com', '12345')