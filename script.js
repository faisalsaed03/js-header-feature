var lastScrollTop = 0; // Keeps track of the last scroll position
var navbar = document.querySelector('.header-section');

document.addEventListener("scroll", function() {
    var scrollTop = window.pageYOffset ;

    if (scrollTop <= 70) {
        // When the scroll position is within the first 70 pixels, keep the navbar visible
        navbar.style.top = "0";
    } else {
        // After the first 70 pixels, apply hide/show logic
        if (scrollTop > lastScrollTop) {
            // Scrolling down
            navbar.style.top = "-80px"; // Hide the navbar
        } else {
            // Scrolling up
            navbar.style.top = "0"; // Show the navbar
        }
    }

    // Update the last scroll position
    lastScrollTop = scrollTop;
});
