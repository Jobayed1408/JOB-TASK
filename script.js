const hamburger = document.getElementById("hamburger")
const navLinks = document.getElementById("navLinks")

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active")
})


const planCards = document.querySelectorAll('.plan-card');

planCards.forEach(card => {
    card.addEventListener('click', function () {
        // Remove selected class from all cards
        planCards.forEach(c => c.classList.remove('selected'));

        // Add selected class to clicked card
        this.classList.add('selected');

        // Log selected plan (optional)
        console.log('Selected plan:', this.dataset.plan);
    });
});

// CTA Button click handler
const ctaButton = document.querySelector('.cta-button');
ctaButton.addEventListener('click', function () {
    const selectedPlan = document.querySelector('.plan-card.selected');
    if (selectedPlan) {
        console.log('Getting started with plan:', selectedPlan.dataset.plan);
        // You can add navigation or form submission here
    }
});

const carouselContainer = document.getElementById('carouselContainer');
const carouselNav = document.getElementById('carouselNav');

// Scroll carousel on nav click
carouselNav.addEventListener('click', () => {
    const scrollAmount = 300; // Card width + gap
    carouselContainer.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
});

// Add click handlers to cards
const testimonialCards = document.querySelectorAll('.testimonial-card');
testimonialCards.forEach(card => {
    card.addEventListener('click', function () {
        const name = this.querySelector('.person-info h3').textContent;
    });
});

// Optional: Hide nav button at end
carouselContainer.addEventListener('scroll', () => {
    const isAtEnd = carouselContainer.scrollLeft + carouselContainer.clientWidth >= carouselContainer.scrollWidth - 10;
    carouselNav.style.opacity = isAtEnd ? '0.3' : '1';
    carouselNav.style.pointerEvents = isAtEnd ? 'none' : 'auto';
});