document.querySelectorAll('.scroll-container').forEach((container, index) => {
    // Duplicate items for infinite scrolling
    const clone = container.innerHTML;
    container.innerHTML += clone;

    // Add direction-specific class
    if (index % 2 === 0) {
        container.classList.add('row-left'); // Scroll left
    } else {
        container.classList.add('row-right'); // Scroll right
    }

    // Adjust the speed dynamically for visual variety
    container.style.animationDuration = `${20 + index * 4}s`;
});

document.querySelectorAll(".slideshow").forEach((slideshow, index) => {
    const images = slideshow.querySelectorAll("img");
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].classList.remove("active");

        currentIndex = (currentIndex + 1) % images.length;

        images[currentIndex].classList.add("active");
    }

    images[currentIndex].classList.add("active");

    setInterval(showNextImage, 1000);
});