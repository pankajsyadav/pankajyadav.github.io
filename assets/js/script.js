// Carousel Auto-Rotation
document.addEventListener('DOMContentLoaded', function() {
  let currentCarouselIndex = 0;
  const carouselCards = document.querySelectorAll('.carousel-card');
  const indicators = document.querySelectorAll('.indicator');
  
  function updateCarousel() {
    if (carouselCards.length === 0) return;
    
    // Hide all cards
    carouselCards.forEach(card => {
      card.style.display = 'none';
    });
    
    // Remove active state from all indicators
    indicators.forEach(indicator => {
      indicator.classList.remove('active');
    });
    
    // Show current card
    carouselCards[currentCarouselIndex].style.display = 'block';
    indicators[currentCarouselIndex].classList.add('active');
  }
  
  function nextCarouselSlide() {
    currentCarouselIndex = (currentCarouselIndex + 1) % carouselCards.length;
    updateCarousel();
  }
  
  // Initialize carousel
  updateCarousel();
  
  // Auto-rotate every 10 seconds
  setInterval(nextCarouselSlide, 10000);
  
  // Manual indicator click
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', function() {
      currentCarouselIndex = index;
      updateCarousel();
    });
  });
  
  // Expand/Collapse full content
  const readMoreBtns = document.querySelectorAll('.read-more-btn');
  readMoreBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const fullContent = this.closest('.carousel-content').querySelector('.full-content');
      fullContent.classList.toggle('active');
      
      // Toggle button text
      if (fullContent.classList.contains('active')) {
        this.textContent = 'Read Less';
      } else {
        this.textContent = 'Read More';
      }
    });
  });
});
