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
	
}
//const addToCartBtn=document.querySelector("add-to-cart-btn")

// Add item to cart
function addToCart(product_id) {
	products.map((product)=>{
		if(product.id==product_id){
			const li = document.createElement("li");
		    li.innerHTML = `${product.name} - $${product.price} `
			sessionStorage.setItem(product.name,JSON.stringify(product));
			cartList.appendChild(li);
		}
	})
}

// Remove item from cart
function removeFromCart(productId) {
	
}

// Clear cart
clearcartBtn.addEventListener("click",clearCart)
function clearCart() {
	cartList.innerText="";
	sessionStorage.clear();
}

// Initial render
renderProducts();
renderCart();
