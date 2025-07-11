fetch('header.html')
  .then(res => res.text())
  .then(html => document.getElementById('headerContainer').innerHTML = html);
fetch('footer.html')
  .then(res => res.text())
  .then(html => document.getElementById('footerContainer').innerHTML = html);

// Giỏ hàng localStorage
function getCart() {
  return JSON.parse(localStorage.getItem('cart') || '[]');
}
function setCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}
function updateCartBadge() {
  let cart = getCart();
  let total = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById('cartBadge').textContent = total;
}
// Hiển thị sản phẩm trong giỏ hàng
function renderCheckoutItems() {
  const cart = getCart();
  const checkoutItemsDiv = document.getElementById('checkoutItems');
  let html = '';
  let subtotal = 0;
  if (cart.length === 0) {
    checkoutItemsDiv.innerHTML = '<div class="p-3">Your cart is empty.</div>';
    document.getElementById('orderSubtotal').textContent = '0 ₫';
    document.getElementById('orderTax').textContent = '0 ₫';
    document.getElementById('orderTotal').textContent = '0 ₫';
    document.getElementById('orderShipping').textContent = '0 ₫';
    document.getElementById('checkoutForm').style.display = 'none';
    return;
  }
  html += `<div class="table-responsive" style="max-height:none;overflow:visible;"><table class="table mb-0 align-middle text-center fs-6">
  <thead class="table-light"><tr>
    <th></th>
    <th>Product</th>
    <th>Unit Price</th>
    <th>Quantity</th>
    <th>Total</th>
    <th></th>
  </tr></thead><tbody>`;
  cart.forEach((item, idx) => {
    const priceNum = parseInt(item.price.toString().replace(/\D/g, '')) || 0;
    subtotal += item.quantity * priceNum;
    html += `<tr class='cart-table-row'>
    <td>${item.image ? `<img src="${item.image}" alt="${item.name}" class="cart-img-custom img-fluid">` : ''}</td>
    <td style="min-width:140px;max-width:220px;word-break:break-word;padding:18px 10px;">${item.name}</td>
    <td style="padding:18px 10px;">${priceNum.toLocaleString()} ₫</td>
    <td style="padding:18px 10px;">
      <div class="d-flex justify-content-center align-items-center gap-2">
        <button class="btn btn-outline-secondary btn-sm" onclick="changeQuantity(${idx}, -1)">-</button>
        <span class="mx-2">${item.quantity}</span>
        <button class="btn btn-outline-secondary btn-sm" onclick="changeQuantity(${idx}, 1)">+</button>
      </div>
    </td>
    <td style="padding:18px 10px;">${(item.quantity * priceNum).toLocaleString()} ₫</td>
    <td style="padding:18px 10px;">
      <button class="btn btn-outline-danger btn-sm" onclick="deleteCartItem(${idx})" title="Delete"><i class="fas fa-trash"></i></button>
    </td>
  </tr>`;
  });
  html += '</tbody></table></div>';
  checkoutItemsDiv.innerHTML = html;
  // Tổng kết đơn hàng
  const shipping = cart.length > 0 ? 30000 : 0;
  const tax = Math.round(subtotal * 0.1);
  const total = subtotal + shipping + tax;
  document.getElementById('orderSubtotal').textContent = subtotal.toLocaleString() + ' ₫';
  document.getElementById('orderShipping').textContent = shipping.toLocaleString() + ' ₫';
  document.getElementById('orderTax').textContent = tax.toLocaleString() + ' ₫';
  document.getElementById('orderTotal').textContent = total.toLocaleString() + ' ₫';
  document.getElementById('checkoutForm').style.display = '';
}
function changeQuantity(idx, delta) {
  let cart = getCart();
  if (!cart[idx]) return;
  cart[idx].quantity += delta;
  if (cart[idx].quantity < 1) cart[idx].quantity = 1;
  setCart(cart);
  updateCartBadge();
  renderCheckoutItems();
}
function deleteCartItem(idx) {
  let cart = getCart();
  if (!cart[idx]) return;
  cart.splice(idx, 1);
  setCart(cart);
  updateCartBadge();
  renderCheckoutItems();
}
document.addEventListener('DOMContentLoaded', function () {
  updateCartBadge();
  renderCheckoutItems();
  document.getElementById('checkoutForm').addEventListener('submit', function (e) {
    e.preventDefault();
    // Validate
    const name = document.getElementById('customerName').value.trim();
    const phone = document.getElementById('customerPhone').value.trim();
    const email = document.getElementById('customerEmail').value.trim();
    const address = document.getElementById('customerAddress').value.trim();
    const payment = document.getElementById('paymentMethod').value;
    if (!name || !phone || !email || !address || !payment) {
      document.getElementById('checkoutMessage').innerHTML = '<div class="alert alert-danger">Please fill in all required information!</div>';
      return;
    }
    // Xử lý đặt hàng thành công
    localStorage.removeItem('cart');
    updateCartBadge();
    renderCheckoutItems();
    document.getElementById('checkoutMessage').innerHTML = '<div class="alert alert-success">Order confirmed! Thank you for your purchase.</div>';
    document.getElementById('checkoutForm').reset();
  });
});

// Animation on scroll for cart page
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