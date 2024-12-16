
// JavaScript for smooth scrolling
document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation (simple example)
const form = document.getElementById('loginForm');
form.addEventListener('submit', function(e) {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!username || !password) {
        alert('Please fill in all fields.');
        e.preventDefault();
    }
});

// Example interaction
function showMore() {
    alert('Learn more about how this product can make a difference in education!');
}
