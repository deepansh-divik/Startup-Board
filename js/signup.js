// js/signup.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('investorForm');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
  
      // Perform client-side validation
      if (validateSignUpForm()) {
        // Simulate sign-up (for demo purposes)
        alert('Sign up successful! Please log in.');
        window.location.href = 'index.html'; // Redirect to login page
      }
    });
  
    function validateSignUpForm() {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  
      if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
        alert('Please fill in all fields.');
        return false;
      }
  
      // You can add more validation logic here, like email format validation, etc.
  
      return true;
    }
  });
  