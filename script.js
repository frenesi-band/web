// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the scroll arrow element
    const scrollArrow = document.getElementById('scrollArrow');
    const showsSection = document.querySelector('.shows-section');
    
    // Add click event listener to scroll arrow
    if (scrollArrow && showsSection) {
        scrollArrow.addEventListener('click', function() {
            showsSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
    
    // Optional: Show the shows section if you want to make it visible by default
    // Remove the style="display: none;" from the HTML if you uncomment this:
    // if (showsSection) {
    //     showsSection.style.display = 'block';
    // }
});