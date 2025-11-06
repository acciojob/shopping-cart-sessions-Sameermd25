// This is the boilerplate code given for you
// You can modify this code
// Product data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

// DOM elements
const productList = document.getElementById("product-list");
const cartList = document.getElementById("cart-list");
const clearcartBtn = document.getElementById("clear-cart-btn");
// Render product list
function renderProducts() {
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" data-id="${product.id}" onClick='addToCart(${product.id})'>Add to Cart</button>`;
    productList.appendChild(li);
  });
}

// Render cart list
function renderCart() {
	cartList.innerHTML = "";
	cart.forEach((product) => {
    	const li = document.createElement("li");
		li.innerText = `${product.name} - $${product.price} `
		cartList.appendChild(li);
  });
}

// Add item to cart
function addToCart(product_id) {
	const product= products.find((product)=>product.id==product_id)
	
	if (product) {
	    // Always fetch the latest version from sessionStorage
	    const currentCart = JSON.parse(sessionStorage.getItem("cart")) || [];
	    currentCart.push(product);
	    cart = currentCart;

	    // Save updated cart
	    sessionStorage.setItem("cart", JSON.stringify(cart));

	    // Re-render cart UI
	    renderCart();
  }
}

// Remove item from cart
function removeFromCart(productId) {	
}

// Clear cart
clearcartBtn.addEventListener("click",clearCart)
function clearCart() {
  cart = [];
  sessionStorage.setItem("cart", JSON.stringify(cart)); // keep the cart key but empty array
  renderCart();
}

// Initial render
renderProducts();
renderCart();
