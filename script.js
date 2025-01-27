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
    container.style.animationDuration = `${10 + index * 2}s`;
});
