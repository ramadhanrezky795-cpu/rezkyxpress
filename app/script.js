const cartCountEl = document.getElementById('cart-count');
const filterButtons = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');
const addCartButtons = document.querySelectorAll('.add-cart');

let cartCount = 0;

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((btn) => btn.classList.toggle('active', btn === button));

    productCards.forEach((card) => {
      const category = card.dataset.category;
      const shouldShow = filter === 'all' || category === filter;
      card.classList.toggle('hidden', !shouldShow);
    });
  });
});

addCartButtons.forEach((button) => {
  button.addEventListener('click', () => {
    cartCount += 1;
    cartCountEl.textContent = cartCount;

    const originalText = button.textContent;
    button.textContent = 'Ditambahkan';
    button.disabled = true;

    setTimeout(() => {
      button.textContent = originalText;
      button.disabled = false;
    }, 800);
  });
});
