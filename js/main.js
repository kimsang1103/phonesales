 // Giỏ hàng localStorage
 function getCart() {
  return JSON.parse(localStorage.getItem('cart') || '[]');
}
function setCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}
function addToCart(product) {
  let cart = getCart();
  // Nếu sản phẩm đã có trong giỏ thì tăng số lượng
  let found = cart.find(item => item.id === product.id);
  if (found) {
    found.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  setCart(cart);
  updateCartBadge();
}
function updateCartBadge() {
  let cart = getCart();
  let total = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById('cartBadge').textContent = total;
}
// Gọi khi load trang
document.addEventListener('DOMContentLoaded', function () {
  updateCartBadge();
  // Add to cart functionality
  document.querySelectorAll('.btn-add-cart').forEach(button => {
    button.addEventListener('click', function () {
      this.innerHTML = '<i class="fas fa-check"></i> Added';
      this.style.background = '#28a745';
      setTimeout(() => {
        this.innerHTML = '<i class="fas fa-cart-plus"></i> Add to Cart';
        this.style.background = '';
      }, 2000);
    });
  });

  // Newsletter form
  document.querySelector('.newsletter-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const input = this.querySelector('.newsletter-input');
    const btn = this.querySelector('.newsletter-btn');

    btn.innerHTML = '<i class="fas fa-check"></i> Subscribed';
    btn.style.background = '#28a745';

    setTimeout(() => {
      btn.innerHTML = '<i class="fas fa-paper-plane"></i> Subscribe';
      btn.style.background = '';
      input.value = '';
    }, 3000);
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Animation for fade-in-up cards
  window.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.fade-in-up');
    cards.forEach((card, i) => {
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.animationDelay = (i * 0.12) + 's';
        card.classList.add('fade-in-up');
      }, 100);
    });
  });

  // Animation for hero section
  window.addEventListener('DOMContentLoaded', () => {
    const heroEls = document.querySelectorAll('.hero-section .fade-in, .hero-section .fade-in-up');
    heroEls.forEach((el, i) => {
      setTimeout(() => {
        el.style.opacity = '1';
        el.classList.add('fade-in-trigger');
      }, i * 180 + 200);
    });
  });

  // Sidebar category click chuyển trang sang products.html?category=...
  document.querySelectorAll('.category-item').forEach(item => {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      const cat = this.textContent.trim().toLowerCase();
      let url = 'products.html?category=';
      if (cat.includes('iphone')) url += 'iphone';
      else if (cat.includes('realme')) url += 'realme';
      else if (cat.includes('samsung')) url += 'samsung';
      else if (cat.includes('oppo')) url += 'oppo';
      else if (cat.includes('vivo')) url += 'vivo';
      window.location.href = url;
    });
  });
});

// Animation on scroll for index page
function revealOnScroll() {
  document.querySelectorAll('.fade-in-up').forEach(function (el) {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      el.classList.add('show');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', function () {
  revealOnScroll();
});