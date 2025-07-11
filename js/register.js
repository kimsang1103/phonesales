fetch('footer.html')
      .then(res => res.text())
      .then(html => document.getElementById('footerContainer').innerHTML = html);
    // Badge giỏ hàng đồng bộ
    function getCart() {
      return JSON.parse(localStorage.getItem('cart') || '[]');
    }
    function updateCartBadge() {
      let cart = getCart();
      let total = cart.reduce((sum, item) => sum + item.quantity, 0);
      document.getElementById('cartBadge').textContent = total;
    }
    // Animation on scroll for register page
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
      updateCartBadge();
      // Đăng ký demo
      document.getElementById('registerForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const btn = this.querySelector('button[type="submit"]');
        btn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span> Registering...';
        btn.disabled = true;
        this.style.opacity = '1';
        this.style.transition = 'opacity 0.5s';
        setTimeout(() => {
          this.style.opacity = '0.4';
        }, 200);
        setTimeout(() => {
          alert('Registration successful!');
          this.reset();
          window.location.href = 'login.html';
        }, 1200);
      });
    });