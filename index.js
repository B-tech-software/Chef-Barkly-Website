// Hide the loading screen once the page is fully loaded
window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.classList.add('hidden');
});

// Initialize AOS (Animate on Scroll) library
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        once: true, // Only once per element
        duration: 800, // Animation duration
        offset: 100 // Offset (in px) from the original trigger point
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Placeholder for future recipe modal functionality
document.querySelectorAll('.view-recipe-btn').forEach(button => {
    button.addEventListener('click', function() {
        alert('This button will open a custom modal with the recipe!');
    });
});