document.addEventListener('DOMContentLoaded', () => {
    const registerLink = document.querySelector('.register a');
  
    // Add a click event to load register.html
    registerLink.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link behavior
        window.location.href = 'register.html'; // Navigate to register.html
    });
  });


function validateForm(event) {
    event.preventDefault(); // Prevent form submission
    
    const emailInput = document.getElementById('user');
    const passwordInput = document.getElementById('pass');
    const emailBox = emailInput.closest('.input_box');
    const passwordBox = passwordInput.closest('.input_box');
  
    // Email validation pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isValid = true;
  
    // Validate email
    if (emailInput.value.trim() === '') {
      emailBox.classList.remove('error', 'success'); // Hide error/success when empty
    } else if (!emailPattern.test(emailInput.value)) {
      emailBox.classList.add('error');
      emailBox.classList.remove('success');
      isValid = false;
    } else {
      emailBox.classList.add('success');
      emailBox.classList.remove('error');
    }
  
    // Validate password (Example: Minimum length of 6)
    if (passwordInput.value.trim() === '') {
      passwordBox.classList.remove('error', 'success'); // Hide error/success when empty
    } else if (passwordInput.value.length < 6) {
      passwordBox.classList.add('error');
      passwordBox.classList.remove('success');
      isValid = false;
    } else {
      passwordBox.classList.add('success');
      passwordBox.classList.remove('error');
    }
  
    // If both fields are valid, proceed with form submission
    if (isValid) {
      alert('Form submitted successfully!'); // Replace with actual form submission logic
    } else {
      alert('Please correct the errors before proceeding.');
    }
  }
  
  /* register */
  
  document.getElementById('registerForm').addEventListener('submit', validateRegisterForm);

function validateRegisterForm(event) {
    event.preventDefault(); // Prevent default form submission

    const usernameInput = document.getElementById('user');
    const emailInput = document.getElementById('gmail');
    const passwordInput = document.getElementById('pass');
    const confirmPasswordInput = document.getElementById('pass2');
    
    let isValid = true;

    // Username Validation
    if (!checkInput(usernameInput, 'Username cannot be empty')) {
        isValid = false;
    }

    // Email Validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!checkInput(emailInput, 'Email cannot be empty') || !emailPattern.test(emailInput.value.trim())) {
        showError(emailInput, 'Enter a valid email address');
        isValid = false;
    } else {
        showSuccess(emailInput);
    }

    // Password Validation
    if (!checkInput(passwordInput, 'Password cannot be empty')) {
        isValid = false;
    } else if (passwordInput.value.length < 6) {
        showError(passwordInput, 'Password must be at least 6 characters');
        isValid = false;
    } else {
        showSuccess(passwordInput);
    }

    // Confirm Password Validation
    if (!checkInput(confirmPasswordInput, 'Confirm password cannot be empty')) {
        isValid = false;
    } else if (confirmPasswordInput.value !== passwordInput.value) {
        showError(confirmPasswordInput, 'Passwords must match');
        isValid = false;
    } else {
        showSuccess(confirmPasswordInput);
    }

    // Submit if all inputs are valid
    if (isValid) {
        alert('Registration successful!');
    }
}

// Function to check input field validity
function checkInput(input, errorMessage) {
    const value = input.value.trim();

    if (value === '') {
        showError(input, errorMessage);
        return false;
    }

    showSuccess(input);
    return true;
}

// Function to show error message
function showError(input, message) {
    const inputBox = input.closest('.input_box');
    const small = inputBox.querySelector('small');
    inputBox.classList.add('error');
    inputBox.classList.remove('success');
    if (small) {
        small.textContent = message; // Show error message
    }
}

// Function to show success (clear error message)
function showSuccess(input) {
    const inputBox = input.closest('.input_box');
    const small = inputBox.querySelector('small');
    inputBox.classList.add('success');
    inputBox.classList.remove('error');
    if (small) {
        small.textContent = ''; // Clear error message
    }
}
