// Dữ liệu sản phẩm: cập nhật đủ 8 sản phẩm cho mỗi hãng, tên, hình ảnh, mô tả tiếng Anh, các mẫu mới nhất
const products = {
  iphone: [
    {
      id: 'iphone1',
      name: 'iPhone 16 Pro Max 256GB',
      price: '22.090.000đ',
      discount: 15,
      image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro.png'
    },
    {
      id: 'iphone2',
      name: 'iPhone 16 Pro 256GB',
      price: '25.090.000đ',
      image: 'https://cdn.tgdd.vn/Products/Images/42/329143/iphone-16-pro-titan-trang.png'
    },
    {
      id: 'iphone3',
      name: 'iPhone 16 128GB',
      price: '18.050.000đ',
      image: 'https://cdn.nguyenkimmall.com/images/thumbnails/1024/717/product/1006/V-IPHONE-16-HONG1_kh1q-b0.jpg'
    },
    {
      id: 'iphone4',
      name: 'iPhone 15 Pro Max 256GB',
      price: '20.390.000đ',
      image: 'https://product.hstatic.net/1000259254/product/iphone_15_pro_2023_-_xam_0a2c626e9d2a4f84a1771dd1f0c793a3_master.jpg'
    },
    {
      id: 'iphone5',
      name: 'iPhone 15 128GB',
      price: '15.590.000đ',
      image: 'https://cdn.tgdd.vn/Products/Images/42/281570/iphone-15-xanh-thumb-600x600.jpg'
    },
    {
      id: 'iphone6',
      name: 'iPhone 14 Pro Max',
      price: '14.290.000đ',
      image: 'https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-deep-purple.jpg'
    },
    {
      id: 'iphone7',
      name: 'iPhone 14 128GB',
      price: '12.690.000đ',
      image: 'https://cdn.tgdd.vn/Products/Images/42/289663/iPhone-14-plus-thumb-xanh-600x600.jpg'
    },
    {
      id: 'iphone8',
      name: 'iPhone 13 128GB',
      price: '11.490.000đ',
      image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-13-pro-max.png'
    }
  ],
  realme: [
    {
      id: 'realme1',
      name: 'Realme GT 6',
      price: '24.590.000đ',
      image: 'https://rukminim2.flixcart.com/image/704/844/xif0q/mobile/m/1/7/gt-6-rmx3851-realme-original-imah2y7ewhzjpfhd.jpeg?q=90&crop=false'
    },
    {
      id: 'realme2',
      name: 'Realme 12 Pro+',
      price: '12.790.000đ',
      image: 'https://cdn2.cellphones.com.vn/x/media/catalog/product/d/i/dien-thoai-realme-12-pro-plus.png'
    },
    {
      id: 'realme3',
      name: 'Realme Note 50',
      price: '10.990.000đ',
      image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/r/e/realme_note_50_1_.png'
    },
    {
      id: 'realme4',
      name: 'Realme Note 60 4G',
      price: '3.090.000đ',
      image: 'https://m.media-amazon.com/images/I/41nuxZWd8BL._SY1000_.jpg'
    },
    {
      id: 'realme5',
      name: 'Realme 11 Pro',
      price: '16.190.000đ',
      image: 'https://cdn.xtmobile.vn/vnt_upload/product/01_2024/thumbs/600_Realme_11_Pro_Plus_1_1.jpg'
    },
    {
      id: 'realme6',
      name: 'Realme C67',
      price: '4.990.000đ',
      image: 'https://cdn.tgdd.vn/Products/Images/42/320378/realme-c67-xanh-thumb-600x600.jpg'
    },
    {
      id: 'realme7',
      name: 'Realme 10 5G',
      price: '7.990.000đ',
      image: 'https://cdn.tgdd.vn/Products/Images/42/297044/realme-10-5g-600x600.jpg'
    },
    {
      id: 'realme8',
      name: 'Realme Note 10',
      price: '8.690.000đ',
      image: 'https://cdn.tgdd.vn/Products/Images/42/229228/xiaomi-redmi-note-10-pro-thumb-xam-600x600-600x600.jpg'
    }
  ],
  samsung: [
    {
      id: 'samsung1',
      name: 'Samsung Galaxy S25 Ultra',
      price: '15.000.000đ',
      discount: 18,
      image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/d/i/dien-thoai-samsung-galaxy-s25-utra.png'
    },
    {
      id: 'samsung2',
      name: 'Samsung Galaxy S24 Ultra',
      price: '23.990.000đ',
      image: 'https://baotinmobile.vn/uploads/2024/02/s24-ultra-tim.jpg'
    },
    {
      id: 'samsung3',
      name: 'Samsung Galaxy S25 Edge Titan',
      price: '17.990.000đ',
      image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ6l2AUWsGK6_6U9xtSpIYmcTwdq3pGC3xfqqdmfi3g-pq7jdicehbMkRky3V5k3z-DK1WGcXWKiRnyNJPkBSykcKPcx3kMpMR6BJYqioanLzqb4QSvQWrD924'
    },
    {
      id: 'samsung4',
      name: 'Samsung Galaxy S24',
      price: '14.990.000đ',
      image: 'https://bizweb.dktcdn.net/100/257/835/products/2024-1-29-638421471246167545-samsung-galaxy-s24-xam-1.png?v=1736848641077'
    },
    {
      id: 'samsung5',
      name: 'Samsung Galaxy Z Fold6',
      price: '8.990.000đ',
      image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/e/f/ef-of95pc_001_front_gray_240514.png'
    },
    {
      id: 'samsung6',
      name: 'Samsung Galaxy Z Series',
      price: '6.990.000đ',
      image: 'https://taozinsaigon.com/files_upload/product/07_2024/thumbs/600_ava_zfold6_pink_1.jpg'
    },
    {
      id: 'samsung7',
      name: 'Samsung Galaxy S23 Ultra',
      price: '11.990.000đ',
      image: 'https://product.hstatic.net/1000370129/product/galaxy-s23-ultra-green-digiphone_514e6906386c4116b2d6fb43ddb7485e_master.jpg'
    },
    {
      id: 'samsung8',
      name: 'Samsung Galaxy Note 20 5G',
      price: '4.750.000đ',
      image: 'https://didongmango.com/images/products/2023/04/06/large/thumb_note20_3_1665999197jpg_1669907777_1680832319.jpg'
    }
  ],
  oppo: [
    {
      id: 'oppo1',
      name: 'Oppo Reno14',
      price: '8.960.000đ',
      discount: 22,
      image: 'https://cdn11.dienmaycholon.vn/filewebdmclnew/DMCL21/Picture/Apro/Apro_product_36628/oppo-reno14-5g-_main_67.png'
    },
    {
      id: 'oppo2',
      name: 'Oppo Reno 14 Pro',
      price: '25.860.000đ',
      image: 'https://cdn.mobilecity.vn/mobilecity-vn/images/2025/05/oppo-reno14-pro-tim.jpg.webp'
    },
    {
      id: 'oppo3',
      name: 'OPPO Reno13 F 5G 12GB 256GB',
      price: '10.490.000đ',
      image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/d/i/dien-thoai-oppo-reno13-f-5g-hinh-4.jpg'
    },
    {
      id: 'oppo4',
      name: 'Oppo A18',
      price: '3.590.000đ',
      image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/o/p/oppo-a18-xanh.png'
    },
    {
      id: 'oppo5',
      name: 'Oppo A18',
      price: '6.860.000đ',
      image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/o/p/oppo-a79-den.png'
    },
    {
      id: 'oppo6',
      name: 'Oppo A17',
      price: '13.490.000đ',
      image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/d/o/download_1__6_6.png'
    },
    {
      id: 'oppo7',
      name: 'Oppo A16',
      price: '4.290.000đ',
      image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/o/p/oppo-a58-den.jpg'
    },
    {
      id: 'oppo8',
      name: 'Oppo A15',
      price: '8.490.000đ',
      image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/e/text_ng_n_3__5_80.png'
    }
  ],
  vivo: [
    {
      id: 'vivo1',
      name: 'Vivo V50 Lite 5G',
      price: '24.070.000đ',
      image: 'https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1744103027626/e506c9820501690dd40ff9088c16f833.png'
    },
    {
      id: 'vivo2',
      name: 'Vivo V29E 8GB 256GB',
      price: '8.000.000đ',
      image: 'https://dienthoaipro.com/wp-content/uploads/2024/09/v29e.webp'
    },
    {
      id: 'vivo3',
      name: 'Vivo Y19S 8GB 128GB',
      price: '4.990.000đ',
      image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/d/i/dien-thoai-vivo-y19s_5_.png'
    },
    {
      id: 'vivo4',
      name: 'Vivo V30E 12GB 256GB',
      price: '8.490.000đ',
      image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/v/3/v30e_1_.png'
    },
    {
      id: 'vivo5',
      name: 'Vivo Y03 4GB 64GB',
      price: '2.990.000đ',
      image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/y/0/y03.png'
    },
    {
      id: 'vivo6',
      name: 'Vivo Y17s 4GB 128GB',
      price: '2.490.000đ',
      image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/y/1/y17s_1.png'
    },
    {
      id: 'vivo7',
      name: 'Vivo Y18S 6GB 128GB',
      price: '3.590.000đ',
      image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/y/1/y18s_1__2.png'
    },
    {
      id: 'vivo8',
      name: 'Vivo Y03 4GB 128GB',
      price: '2.890.000đ',
      image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/y/0/y03_1.png'
    }
  ]
};

const itemsPerPage = 8;
let currentPage = 1;
let currentCategory = 'all';
let allProducts = [
  ...products.iphone,
  ...products.realme,
  ...products.samsung,
  ...products.oppo,
  ...products.vivo
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
function displayProducts(category) {
  currentCategory = category;
  const productsGrid = document.getElementById('productsGrid');
  const pagination = document.getElementById('pagination');
  let productsToShow = [];
  productsGrid.innerHTML = '';
  pagination.innerHTML = '';
  if (category === 'all') {
    productsToShow = [...allProducts];
    shuffleArray(productsToShow);
  } else {
    productsToShow = products[category] || [];
  }
  const totalPages = Math.ceil(productsToShow.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = productsToShow.slice(startIndex, endIndex);
  currentProducts.forEach(product => {
    const col = document.createElement('div');
    col.className = 'col-lg-3 col-md-6 col-12';
    col.innerHTML = `
<div class="card product-card h-100">
  <div class="product-image position-relative">
      ${product.discount ? `<div class='discount-badge'>-${product.discount}%</div>` : ''}
      <img src="${product.image}" alt="${product.name}" class="product-img-custom">
  </div>
  <div class="card-body d-flex flex-column align-items-center">
      <div class="product-title">${product.name}</div>
      <div class="product-brand mb-2">${product.brand ? product.brand : ''}</div>
      <div class="product-price mb-2">${product.price}</div>
      <button class="btn btn-success btn-add-cart mt-auto w-100" onclick='addToCart(${JSON.stringify(product)})'>
          <i class="fas fa-cart-plus me-2"></i>Add to Cart
      </button>
  </div>
</div>
`;
    // Animation on click
    col.querySelector('.product-card').addEventListener('click', function (e) {
      this.classList.add('card-animate');
      setTimeout(() => this.classList.remove('card-animate'), 350);
    });
    col.querySelector('img').onclick = () => showProductModal(product);
    productsGrid.appendChild(col);
  });
  // Pagination
  for (let i = 1; i <= totalPages; i++) {
    const li = document.createElement('li');
    li.className = `page-item${i === currentPage ? ' active' : ''}`;
    li.innerHTML = `<a class="page-link" href="#" onclick="changePage(${i})">${i}</a>`;
    pagination.appendChild(li);
  }
  // Update active category button
  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.textContent.toLowerCase().includes(category)) {
      btn.classList.add('active');
    }
    if (category === 'all' && btn.textContent.toLowerCase().includes('all')) {
      btn.classList.add('active');
    }
  });
}
function changePage(page) {
  currentPage = page;
  displayProducts(currentCategory);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function filterProducts(category) {
  currentPage = 1;
  displayProducts(category);
}
function showProductModal(product) {
  document.getElementById('modalProductImg').src = product.image;
  document.getElementById('modalProductName').textContent = product.name;
  document.getElementById('modalProductPrice').textContent = product.price;
  document.getElementById('modalProductBrand').textContent = product.brand;
  document.getElementById('modalProductDesc').textContent = product.desc;
  const modal = new bootstrap.Modal(document.getElementById('productModal'));
  modal.show();
  document.getElementById('modalAddToCart').onclick = function () {
    // Logic thêm vào giỏ hàng (có thể mở rộng sau)
    alert('Đã thêm ' + product.name + ' vào giỏ hàng!');
  };
}
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
  // Lấy category từ query string nếu có
  const params = new URLSearchParams(window.location.search);
  const cat = params.get('category');
  if (cat && products[cat]) {
    filterProducts(cat);
  } else {
    displayProducts('all');
  }
  // Sidebar category click
  document.querySelectorAll('.category-item').forEach(item => {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      const cat = this.textContent.trim().toLowerCase();
      if (cat.includes('iphone')) filterProducts('iphone');
      else if (cat.includes('realme')) filterProducts('realme');
      else if (cat.includes('samsung')) filterProducts('samsung');
      else if (cat.includes('oppo')) filterProducts('oppo');
      else if (cat.includes('vivo')) filterProducts('vivo');
    });
  });
});

// Animation on scroll for products page
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
fetch('footer.html')
  .then(res => res.text())
  .then(html => document.getElementById('footerContainer').innerHTML = html);