// Enomy Marketplace Interactivity

document.addEventListener('DOMContentLoaded', () => {
  // 1. Header scroll shadow effect
  const header = document.querySelector('.header-wrapper');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 2. Shop by Category slider controls
  const categoriesContainer = document.querySelector('.categories-container');
  const btnPrev = document.querySelector('.btn-slide.prev');
  const btnNext = document.querySelector('.btn-slide.next');

  if (categoriesContainer && btnPrev && btnNext) {
    const scrollAmount = 300; // Scroll amount on click

    btnPrev.addEventListener('click', () => {
      categoriesContainer.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    });

    btnNext.addEventListener('click', () => {
      categoriesContainer.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    });
  }

  // 3. Category selector alert / search explore simulation
  const searchInput = document.querySelector('.hero-search input');
  const searchBtn = document.querySelector('.hero-search button');

  if (searchBtn && searchInput) {
    searchBtn.addEventListener('click', () => {
      const query = searchInput.value.trim();
      if (query) {
        alert(`Searching for "${query}" near you...`);
      } else {
        alert('Please enter a product or category to search.');
      }
    });
  }

  // 4. Top nav search bar explore simulation
  const topSearchInput = document.querySelector('.search-bar input');
  if (topSearchInput) {
    topSearchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const query = topSearchInput.value.trim();
        if (query) {
          alert(`Searching for "${query}"...`);
        }
      }
    });
  }

  // 5. WhatsApp chat simulator
  const whatsappBtns = document.querySelectorAll('.btn-whatsapp-chat, .benefit-icon-box.whatsapp-bg, .work-card:nth-child(2)');
  whatsappBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      // Find product name if clicked inside product card
      const productCard = btn.closest('.product-card');
      let message = "Hello! I am interested in buying items from your store on Enomy.";
      if (productCard) {
        const productName = productCard.querySelector('.product-name').textContent;
        const productPrice = productCard.querySelector('.product-price').textContent;
        message = `Hello! I am interested in the "${productName}" priced at ${productPrice}. Is it still available?`;
      }
      
      // WhatsApp API link (using placeholder number)
      const encodedMsg = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/2348000000000?text=${encodedMsg}`;
      
      // Open in new tab
      window.open(whatsappUrl, '_blank');
    });
  });

  // 6. Categories menu toggle
  const catBtn = document.querySelector('.btn-categories');
  if (catBtn) {
    catBtn.addEventListener('click', () => {
      alert('Categories list: Women\'s Fashion, Men\'s Fashion, Electronics, Phones & Tablets, Home & Living, Beauty & Health, Sports & Outdoors, Cars, Food & Groceries, Books & Movies');
    });
  }

  // 7. Become a vendor action
  const vendorBtns = document.querySelectorAll('.btn-become-vendor, .app-left-buttons .btn-become-vendor, .app-left-buttons .btn-outline-primary');
  vendorBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      alert('Redirecting to the Enomy Vendor registration page. Prepare your product catalog and business name!');
    });
  });

  // 8. Smooth scrolling with sticky header offset for navigation links
  const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
  smoothScrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      
      // If it's just '#' then scroll to top
      if (targetId === '#') {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        return;
      }
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = header.offsetHeight || 130; // Get actual height dynamically or fallback
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // 9. Scroll Reveal animation using Intersection Observer
  const revealElements = document.querySelectorAll('.buying-works, .products-section, .categories-section, .app-banner');
  revealElements.forEach(el => el.classList.add('reveal'));

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // Log confirmation
  console.log('Enomy template scripting loaded successfully.');
});
