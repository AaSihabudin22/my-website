// script.js
document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".scroll-animate");

    function checkVisibility() {
        const triggerBottom = window.innerHeight * 0.8;

        elements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < triggerBottom) {
                el.classList.add("visible");
            } else {
                el.classList.remove("visible");
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Call once to handle already visible elements
});
