// js/login.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
  
      // Perform client-side validation
      if (validateLoginForm()) {
        // Simulate login (for demo purposes)
        alert('Login successful!');
        window.location.href = 'home.html'; // Redirect to home page
      }
    });
  
    function validateLoginForm() {
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  
      if (email.trim() === '' || password.trim() === '') {
        alert('Please fill in all fields.');
        return false;
      }
  
      // You can add more validation logic here, like email format validation, etc.
  
      return true;
    }
  });
  