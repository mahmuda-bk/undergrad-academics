const slides = [...document.querySelectorAll('.slide')];
const dotsContainer = document.querySelector('.dots');
const currentSlide = document.getElementById('current-slide');
let activeIndex = 0;
let timer;

slides.forEach((_, index) => {
  const dot = document.createElement('button');
  dot.className = 'dot';
  dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
  dot.addEventListener('click', () => goToSlide(index));
  dotsContainer.appendChild(dot);
});

const dots = [...document.querySelectorAll('.dot')];

function goToSlide(index) {
  activeIndex = (index + slides.length) % slides.length;
  slides.forEach((slide, i) => slide.classList.toggle('active', i === activeIndex));
  dots.forEach((dot, i) => dot.classList.toggle('active', i === activeIndex));
  currentSlide.textContent = String(activeIndex + 1).padStart(2, '0');
  restartTimer();
}

function restartTimer() {
  clearInterval(timer);
  timer = setInterval(() => goToSlide(activeIndex + 1), 3500);
}

document.querySelector('.prev').addEventListener('click', () => goToSlide(activeIndex - 1));
document.querySelector('.next').addEventListener('click', () => goToSlide(activeIndex + 1));
goToSlide(0);

const grid = document.getElementById('product-grid');
const error = document.getElementById('product-error');
const searchInput = document.getElementById('product-search');
const categoryFilter = document.getElementById('category-filter');
const brandFilter = document.getElementById('brand-filter');
const searchButton = document.getElementById('search-button');
const clearButton = document.getElementById('clear-search');
const resultCount = document.getElementById('result-count');
const suggestions = document.getElementById('search-suggestions');

let allProducts = [];
let featuredProducts = [];
let cart = JSON.parse(localStorage.getItem('neonCart') || '[]');

const cartDrawer = document.getElementById('cart-drawer');
const cartToggle = document.getElementById('cart-toggle');
const cartClose = document.getElementById('cart-close');
const cartBackdrop = document.getElementById('cart-backdrop');
const cartItems = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');
const checkoutButton = document.getElementById('checkout-button');

async function loadProducts() {
  try {
    const [allResponse, featuredResponse, brandsResponse, categoriesResponse] = await Promise.all([
      fetch('/api/products'),
      fetch('/api/products/featured'),
      fetch('/api/products/brands'),
      fetch('/api/products/categories')
    ]);

    if (!allResponse.ok || !featuredResponse.ok || !brandsResponse.ok || !categoriesResponse.ok) {
      throw new Error('Request failed');
    }

    allProducts = await allResponse.json();
    featuredProducts = await featuredResponse.json();
    const brands = await brandsResponse.json();
    const categories = await categoriesResponse.json();

    populateSelect(categoryFilter, categories, 'Category');
    populateSelect(brandFilter, brands, 'Brand');
    renderProducts(featuredProducts, false);
  } catch (err) {
    grid.innerHTML = '';
    error.textContent = 'Could not load products. Make sure MongoDB is running and the backend server is started.';
    error.classList.remove('hidden');
  }
}

function populateSelect(select, options, placeholder) {
  select.innerHTML = `<option value="">${placeholder}</option>` + options
    .map(option => `<option value="${escapeHtml(option)}">${escapeHtml(option)}</option>`)
    .join('');
}

function renderProducts(products, isFiltered) {
  error.classList.add('hidden');

  if (!products.length) {
    grid.innerHTML = '<div class="empty-state">No products match your filters. Try another category, brand, or keyword.</div>';
    resultCount.textContent = '0 products';
    return;
  }

  grid.innerHTML = products.map((product) => `
    <article class="product-card">
      <div class="product-image-wrap">
        <img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}" loading="lazy"
             onerror="this.src='https://placehold.co/900x900/f0eee8/222?text=Home+Decor';" />
        <span class="product-id">${escapeHtml(product.prod_id)}</span>
        <span class="product-badge">${escapeHtml(product.category)}</span>
      </div>
      <div class="product-info">
        <div>
          <span class="product-brand">${escapeHtml(product.brand)}</span>
          <h3>${escapeHtml(product.name)}</h3>
          <p>${escapeHtml(product.description)}</p>
          <div class="product-price">${formatBDT(product.price)}</div>
        </div>
        <button class="add-cart" type="button" data-add-id="${escapeHtml(product.prod_id)}">Add to cart</button>
      </div>
    </article>
  `).join('');

  grid.querySelectorAll('[data-add-id]').forEach(button => {
    button.addEventListener('click', () => addToCart(button.dataset.addId, button));
  });

  resultCount.textContent = isFiltered
    ? `${products.length} product${products.length === 1 ? '' : 's'} found`
    : `${products.length} featured products`;
}

function updateSuggestions() {
  const raw = searchInput.value.trim();
  const term = raw.toLowerCase();

  if (!term) {
    suggestions.innerHTML = '';
    suggestions.classList.add('hidden');
    return;
  }

  const selectedCategory = categoryFilter.value;
  const selectedBrand = brandFilter.value;
  const matches = allProducts
    .filter(product => {
      const categoryMatches = !selectedCategory || product.category === selectedCategory;
      const brandMatches = !selectedBrand || product.brand === selectedBrand;
      return categoryMatches && brandMatches && product.name.toLowerCase().startsWith(term);
    })
    .sort((a, b) => a.name.localeCompare(b.name))
    .slice(0, 8);

  if (!matches.length) {
    suggestions.innerHTML = '<div class="suggestion-item" aria-disabled="true"><span class="suggestion-name">No matching product names</span></div>';
    suggestions.classList.remove('hidden');
    return;
  }

  suggestions.innerHTML = matches.map(product => `
    <button type="button" class="suggestion-item" data-product-name="${escapeHtml(product.name)}" role="option">
      <span class="suggestion-name">${escapeHtml(product.name)}</span>
      <span class="suggestion-meta">${escapeHtml(product.brand)} · ${escapeHtml(product.category)}</span>
    </button>
  `).join('');
  suggestions.classList.remove('hidden');

  suggestions.querySelectorAll('[data-product-name]').forEach(button => {
    button.addEventListener('click', () => {
      searchInput.value = button.dataset.productName;
      suggestions.classList.add('hidden');
      filterProducts();
    });
  });
}

function filterProducts() {
  const term = searchInput.value.trim().toLowerCase();
  const selectedCategory = categoryFilter.value;
  const selectedBrand = brandFilter.value;
  const hasFilters = Boolean(term || selectedCategory || selectedBrand);

  if (!hasFilters) {
    renderProducts(featuredProducts, false);
    clearButton.classList.add('hidden');
    return;
  }

  const filtered = allProducts.filter((product) => {
    const categoryMatches = !selectedCategory || product.category === selectedCategory;
    const brandMatches = !selectedBrand || product.brand === selectedBrand;
    const textMatches = !term || [
      product.name,
      product.description,
      product.brand,
      product.category,
      product.prod_id
    ].some(value => String(value).toLowerCase().includes(term));

    return categoryMatches && brandMatches && textMatches;
  });

  clearButton.classList.toggle('hidden', !hasFilters);
  renderProducts(filtered, true);
}

searchInput.addEventListener('input', () => {
  updateSuggestions();
  filterProducts();
});
categoryFilter.addEventListener('change', () => {
  updateSuggestions();
  filterProducts();
});
brandFilter.addEventListener('change', () => {
  updateSuggestions();
  filterProducts();
});
searchButton.addEventListener('click', filterProducts);

searchInput.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    suggestions.classList.add('hidden');
    return;
  }
  if (event.key === 'Enter') {
    suggestions.classList.add('hidden');
    filterProducts();
  }
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.search-wrap')) suggestions.classList.add('hidden');
});

clearButton.addEventListener('click', () => {
  searchInput.value = '';
  suggestions.classList.add('hidden');
  categoryFilter.value = '';
  brandFilter.value = '';
  filterProducts();
  searchInput.focus();
});

function formatBDT(value) {
  return `৳${Number(value || 0).toLocaleString('en-BD')}`;
}

function saveCart() {
  localStorage.setItem('neonCart', JSON.stringify(cart));
  renderCart();
}

function addToCart(productId, button) {
  const product = allProducts.find(item => item.prod_id === productId);
  if (!product) return;
  const existing = cart.find(item => item.prod_id === productId);
  if (existing) existing.quantity += 1;
  else cart.push({ prod_id: product.prod_id, name: product.name, brand: product.brand, category: product.category, image: product.image, price: product.price, quantity: 1 });
  saveCart();
  button.classList.add('added');
  button.textContent = 'Added';
  setTimeout(() => { button.classList.remove('added'); button.textContent = 'Add to cart'; }, 800);
  openCart();
}

function changeQuantity(productId, delta) {
  const item = cart.find(entry => entry.prod_id === productId);
  if (!item) return;
  item.quantity += delta;
  if (item.quantity <= 0) cart = cart.filter(entry => entry.prod_id !== productId);
  saveCart();
}

function removeFromCart(productId) {
  cart = cart.filter(entry => entry.prod_id !== productId);
  saveCart();
}

function renderCart() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = cart.reduce((sum, item) => sum + (Number(item.price) * item.quantity), 0);
  cartCount.textContent = count;
  cartTotal.textContent = formatBDT(total);

  if (!cart.length) {
    cartItems.innerHTML = '<div class="cart-empty"><div><strong>Your cart is empty</strong><span>Add something beautiful to your space.</span></div></div>';
    return;
  }

  cartItems.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.name)}" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=85';" />
      <div class="cart-item-main">
        <div class="cart-item-name">${escapeHtml(item.name)}</div>
        <div class="cart-item-meta">${escapeHtml(item.brand)} · ${escapeHtml(item.category)}</div>
        <div class="cart-item-price">${formatBDT(item.price)}</div>
        <div class="quantity-control" aria-label="Quantity">
          <button type="button" data-minus="${escapeHtml(item.prod_id)}">−</button>
          <span>${item.quantity}</span>
          <button type="button" data-plus="${escapeHtml(item.prod_id)}">+</button>
        </div>
      </div>
      <div class="cart-item-side">
        <strong>${formatBDT(item.price * item.quantity)}</strong>
        <button type="button" class="remove-item" data-remove="${escapeHtml(item.prod_id)}">Remove</button>
      </div>
    </div>
  `).join('');

  cartItems.querySelectorAll('[data-minus]').forEach(btn => btn.addEventListener('click', () => changeQuantity(btn.dataset.minus, -1)));
  cartItems.querySelectorAll('[data-plus]').forEach(btn => btn.addEventListener('click', () => changeQuantity(btn.dataset.plus, 1)));
  cartItems.querySelectorAll('[data-remove]').forEach(btn => btn.addEventListener('click', () => removeFromCart(btn.dataset.remove)));
}

function openCart() {
  cartDrawer.classList.add('open');
  cartDrawer.setAttribute('aria-hidden', 'false');
  document.body.classList.add('cart-open');
}
function closeCart() {
  cartDrawer.classList.remove('open');
  cartDrawer.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('cart-open');
}

cartToggle.addEventListener('click', openCart);
cartClose.addEventListener('click', closeCart);
cartBackdrop.addEventListener('click', closeCart);
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeCart(); });
checkoutButton.addEventListener('click', () => {
  if (!cart.length) return;
  alert('Demo checkout: your cart is ready.');
});

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

renderCart();
loadProducts();
