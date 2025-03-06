let currentIndex = 0;
let slideInterval;

function showSlide(index) {
    const slides = document.querySelector('.slider');
    const dots = document.querySelectorAll('.dot');
    const totalSlides = slides.children.length;

    // Handle looping
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    // Move slider
    slides.style.transform = 'translateX(' + (-currentIndex * 100) + '%)';

    // Update dots
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function currentSlide(index) {
    showSlide(index);
}

function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
}

function pauseAutoSlide() {
    clearInterval(slideInterval);
}

// Start the slider
showSlide(currentIndex);
startAutoSlide();

// Pause on hover
document.querySelector('.slider-container').addEventListener('mouseover', pauseAutoSlide);
document.querySelector('.slider-container').addEventListener('mouseout', startAutoSlide);
