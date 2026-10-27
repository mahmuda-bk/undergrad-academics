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
  timer = setInterval(() => goToSlide(activeIndex + 1), 5000);
}

document.querySelector('.prev').addEventListener('click', () => goToSlide(activeIndex - 1));
document.querySelector('.next').addEventListener('click', () => goToSlide(activeIndex + 1));
goToSlide(0);

async function loadFeaturedProducts() {
  const grid = document.getElementById('product-grid');
  const error = document.getElementById('product-error');

  try {
    const response = await fetch('/api/products/featured');
    if (!response.ok) throw new Error('Request failed');
    const products = await response.json();

    if (!products.length) {
      grid.innerHTML = '<div class="empty-state">No featured products right now.</div>';
      return;
    }

    grid.innerHTML = products.map((product) => `
      <article class="product-card">
        <div class="product-image-wrap">
          <img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}" loading="lazy" />
          <span class="product-id">${escapeHtml(product.prod_id)}</span>
        </div>
        <div class="product-info">
          <div>
            <h3>${escapeHtml(product.name)}</h3>
            <p>${escapeHtml(product.description)}</p>
          </div>
          <span class="card-arrow">↗</span>
        </div>
      </article>
    `).join('');
  } catch (err) {
    grid.innerHTML = '';
    error.textContent = 'Could not load products. Make sure MongoDB and the backend server are running.';
    error.classList.remove('hidden');
  }
}

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

loadFeaturedProducts();
