document.addEventListener("DOMContentLoaded", function() {
    // Apply the fade-in animation to the cv-container (optional, if needed)
    document.querySelector(".cv-container").style.animation = "fadeIn 1.5s ease-in-out";
    
    let links = document.querySelectorAll('.social-links a');
    
    // Function to change video source based on the device type
    function changeBackground() {
        const screenWidth = window.innerWidth;
        const videoElement = document.getElementById('background-video');
        
        if (screenWidth <= 768) {
            // Mobile: Change video to mobile background
            videoElement.src = 'mobileback.mp4';
        } else {
            // Desktop: Change video to desktop background
            videoElement.src = 'live-background.mp4';
        }
    }

    // Call the function on page load
    changeBackground();

    // Update background when social link is clicked
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            changeBackground(); // Update background when link is clicked
        });
    });
});


