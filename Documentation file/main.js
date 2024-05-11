// main.js

// Function to zoom in on hover
function zoomIn(element) {
    element.style.transform = 'scale(1.027)';
    element.style.transition = 'transform 0.3s';
}

// Function to zoom out on mouseout
function zoomOut(element) {
    element.style.transform = 'scale(1)';
    element.style.transition = 'transform 0.3s';
}

// Attach hover events for each section
document.querySelectorAll('.zoomable').forEach(function (section) {
    section.addEventListener('mouseenter', function () {
        zoomIn(this);
    });

    section.addEventListener('mouseleave', function () {
        zoomOut(this);
    });
});
