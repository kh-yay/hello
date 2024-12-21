document.addEventListener('DOMContentLoaded', () => {
    const registerLink = document.querySelector('.register a');

    // Add a click event to load register.html
    registerLink.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link behavior
        window.location.href = 'register.html'; // Navigate to register.html
    });
});