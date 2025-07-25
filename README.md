# Hoang Computer - E-commerce Website

## Mô tả dự án
Website bán hàng công nghệ với đầy đủ chức năng giỏ hàng và thanh toán.

## Tính năng chính

### 🛒 Hệ thống giỏ hàng
- Thêm sản phẩm vào giỏ hàng từ trang sản phẩm
- Hiển thị số lượng sản phẩm trong giỏ hàng trên header
- Thông báo thành công khi thêm sản phẩm
- Quản lý số lượng sản phẩm trong giỏ hàng
- Xóa sản phẩm khỏi giỏ hàng

### 💳 Hệ thống thanh toán
- Trang thanh toán hoàn chỉnh với giao diện đẹp
- Hiển thị tất cả sản phẩm trong giỏ hàng
- Tính toán tự động: tổng tiền hàng, phí vận chuyển, thuế
- Form thông tin khách hàng với validation
- Chọn phương thức thanh toán
- Xử lý đặt hàng với loading animation
- Lưu trữ đơn hàng vào localStorage

### 🎨 Giao diện
- Responsive design cho mọi thiết bị
- Animation mượt mà
- Gradient backgrounds đẹp mắt
- Icons Font Awesome
- Bootstrap 5 framework

## Cấu trúc file

```
Project/
├── index.html          # Trang chủ
├── products.html       # Trang sản phẩm
├── checkout.html       # Trang thanh toán
├── cart.html          # Trang giỏ hàng (cũ)
├── login.html         # Trang đăng nhập
├── register.html      # Trang đăng ký
├── contact.html       # Trang liên hệ
├── profile.html       # Trang hồ sơ
├── css/
│   ├── style.css      # CSS chính
│   ├── cart.css       # CSS giỏ hàng
│   ├── checkout.css   # CSS thanh toán
│   ├── login.css      # CSS đăng nhập
│   ├── register.css   # CSS đăng ký
│   └── base.css       # CSS cơ bản
├── js/
│   ├── cart.js        # JavaScript giỏ hàng
│   ├── checkout.js    # JavaScript thanh toán
│   ├── main.js        # JavaScript chính
│   ├── login.js       # JavaScript đăng nhập
│   └── register.js    # JavaScript đăng ký
└── images/
    └── logo.png       # Logo website
```

## Cách sử dụng

### 1. Thêm sản phẩm vào giỏ hàng
- Truy cập trang `products.html`
- Click nút "Add to Cart" trên sản phẩm muốn mua
- Sản phẩm sẽ được thêm vào giỏ hàng với thông báo thành công

### 2. Xem giỏ hàng và thanh toán
- Click vào icon giỏ hàng trên header
- Nếu giỏ hàng trống: hiển thị thông báo và nút "Tiếp tục mua sắm"
- Nếu có sản phẩm: chuyển đến trang thanh toán

### 3. Trang thanh toán
- Xem danh sách sản phẩm trong giỏ hàng
- Điều chỉnh số lượng hoặc xóa sản phẩm
- Xem tổng kết đơn hàng (tổng tiền, phí vận chuyển, thuế)
- Điền thông tin khách hàng
- Chọn phương thức thanh toán
- Click "Xác nhận đặt hàng"

### 4. Xử lý đơn hàng
- Validation form tự động
- Hiển thị loading animation
- Lưu đơn hàng vào localStorage
- Hiển thị thông báo thành công với mã đơn hàng
- Chuyển về trang chủ sau 3 giây

## Tính năng kỹ thuật

### Validation
- Email format validation
- Phone number validation (9-12 số)
- Required fields validation
- Real-time form validation

### Animation
- Loading spinner khi xử lý đơn hàng
- Fade in/out animations
- Slide animations
- Hover effects

### Responsive Design
- Mobile-first approach
- Breakpoints: 576px, 768px, 992px
- Flexible grid system
- Touch-friendly buttons

### Local Storage
- Lưu trữ giỏ hàng
- Lưu trữ đơn hàng
- Persist data across sessions

## Phương thức thanh toán
1. **COD (Cash on Delivery)** - Thanh toán khi nhận hàng
2. **Bank Transfer** - Chuyển khoản ngân hàng
3. **MoMo** - Ví MoMo
4. **ZaloPay** - ZaloPay

## Phí và thuế
- **Phí vận chuyển**: 30.000 ₫ (cố định)
- **Thuế**: 10% tổng tiền hàng
- **Tổng thanh toán**: Tổng tiền hàng + Phí vận chuyển + Thuế

## Browser Support
- Chrome (recommended)
- Firefox
- Safari
- Edge

## Cài đặt và chạy
1. Clone repository
2. Mở file `index.html` trong trình duyệt
3. Hoặc sử dụng local server (Live Server extension trong VS Code)

## Tác giả
**Hoang Computer** - Website bán hàng công nghệ

## License
MIT License
# asm_phonesales
# asm_phonesales
‣桰湯獥污獥�