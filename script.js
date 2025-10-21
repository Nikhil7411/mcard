document.addEventListener("DOMContentLoaded", () => {
  // Category button functionality
  const categoryButtons = document.querySelectorAll('.category-btn');
  const menuContainers = document.querySelectorAll('.menu-container');
  const backToTopBtn = document.getElementById('backToTop');
  
  // Show Biryani menu by default
  menuContainers.forEach(container => {
    if (container.id === 'biryani-menu') {
      container.classList.add('active');
    } else {
      container.classList.remove('active');
    }
  });
  
  // Add active class to Biryani button by default
  categoryButtons.forEach(button => {
    if (button.getAttribute('data-category') === 'biryani') {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
  
  // Add click event to each category button
  categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.getAttribute('data-category');
      
      // Remove active class from all buttons and containers
      categoryButtons.forEach(btn => btn.classList.remove('active'));
      menuContainers.forEach(container => container.classList.remove('active'));
      
      // Add active class to clicked button
      button.classList.add('active');
      
      // Show the corresponding menu container
      const targetMenu = document.getElementById(`${category}-menu`);
      if (targetMenu) {
        targetMenu.classList.add('active');
        
        // Smooth scroll to the menu container on mobile
        if (window.innerWidth <= 768) {
          setTimeout(() => {
            targetMenu.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'start'
            });
          }, 100);
        }
      }
    });
  });
  
  // Back to top button functionality
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  });
  
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});