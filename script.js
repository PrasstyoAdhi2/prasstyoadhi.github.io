document.addEventListener("DOMContentLoaded", function() {
    // Apply the fade-in animation to the cv-container (optional, if needed)
    document.querySelector(".cv-container").style.animation = "fadeIn 1.5s ease-in-out";
});

document.addEventListener("DOMContentLoaded", function() {
    let links = document.querySelectorAll('.social-links a');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            // Get the screen width
            const screenWidth = window.innerWidth;
            
            // Check if the user is on a mobile or desktop device
            if (screenWidth <= 768) {
                // Mobile: Change background to mobile style
                document.body.style.backgroundImage = "url('mobileback.mp4')";
            } else {
                // Desktop: Change background to desktop style
                document.body.style.backgroundImage = "url('live-background.mp4')";
            }
        });
    });
});

