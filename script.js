document.querySelectorAll('.scroll-container').forEach((container, index) => {
    // Clone the children to ensure infinite scrolling effect
    const clone = container.innerHTML;
    container.innerHTML += clone;

    // Adjust animation direction based on row index
    if (index % 2 === 1) {
        container.classList.add('row-2'); // Scroll to the right
    } else {
        container.classList.add('row-1'); // Scroll to the left
    }
});
