const PRODUCTS = [
  { id: 'tomato', name: 'Tomato', price: 28, unit: 'per kg', img: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce' },
  { id: 'potato', name: 'Potato', price: 32, unit: 'per kg', img: 'https://images.unsplash.com/photo-1604908176916-238e6f0f8f36' },
  { id: 'onion', name: 'Onion', price: 40, unit: 'per kg', img: 'https://images.unsplash.com/photo-1603052875336-285e58c86899' },
  { id: 'carrot', name: 'Carrot', price: 48, unit: 'per kg', img: 'https://images.unsplash.com/photo-1582515073490-dc84f5ed6a93' },
  { id: 'cucumber', name: 'Cucumber', price: 36, unit: 'per kg', img: 'https://images.unsplash.com/photo-1582510809879-7a1c32177e07' }
];

let cart = {};

function renderProducts() {
  const grid = document.getElementById("grid");
  if (!grid) return;
  grid.innerHTML = "";
  PRODUCTS.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p class="price">₹${p.price} <small>${p.unit}</small></p>
      <button onclick="addToCart('${p.id}')">Add to Cart</button>
    `;
    grid.appendChild(card);
  });
}

function renderCart() {
  const cartList = document.getElementById("cartList");
  const totalEl = document.getElementById("total");
  if (!cartList || !totalEl) return;
  
  cartList.innerHTML = "";
  let total = 0;
  Object.keys(cart).forEach(id => {
    const p = PRODUCTS.find(x => x.id === id);
    const qty = cart[id];
    total += p.price * qty;
    const li = document.createElement("li");
    li.textContent = `${p.name} x ${qty} = ₹${p.price * qty}`;
    cartList.appendChild(li);
  });
  totalEl.textContent = "₹" + total;
}

function addToCart(id) {
  cart[id] = (cart[id] || 0) + 1;
  renderCart();
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  renderCart();
});

