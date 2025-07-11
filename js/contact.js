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
// Animation on scroll for contact page
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
  // Form submit đơn giản
  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    this.reset();
    alert('Your message has been sent successfully! We will get back to you soon.');
  });
});