// Product data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

// DOM elements
const productList = document.getElementById("product-list");
const cartList = document.getElementById("cart-list");
const clearcartBtn = document.getElementById("clear-cart-btn");

// Load cart from sessionStorage or empty array
let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

// Render products
function renderProducts() {
  productList.innerHTML = "";
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button onClick="addToCart(${product.id})">Add to Cart</button>`;
    productList.appendChild(li);
  });
}

// Render cart
function renderCart() {
  cartList.innerHTML = "";
  cart.forEach((product) => {
    const li = document.createElement("li");
    li.innerText = `${product.name} - $${product.price}`;
    cartList.appendChild(li);
  });
}

// Add item to cart
function addToCart(product_id) {
  const product = products.find(p => p.id === product_id);
  if (!product) return;

  // Fetch latest cart from sessionStorage to preserve previous items
  cart = JSON.parse(sessionStorage.getItem("cart")) || [];
  
  // Add product
  cart.push(product);

  // Save updated cart
  sessionStorage.setItem("cart", JSON.stringify(cart));

  // Update UI
  renderCart();
}

// Remove item from cart
function removeFromCart(productId) {	
}

// Clear cart
function clearCart() {
  cart = [];
  sessionStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

clearcartBtn.addEventListener("click", clearCart);

// Initial render
renderProducts();
renderCart();
