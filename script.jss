const products = [
  { id: 1, name: "Laptop", price: 50000, image: "assets/laptop.jpg" },
  { id: 2, name: "Phone", price: 30000, image: "assets/phone.jpg" },
  { id: 3, name: "Headphones", price: 2000, image: "assets/headphones.jpg" },
  { id: 4, name: "Shoes", price: 1500, image: "assets/shoes.jpg" },
  { id: 5, name: "TV", price: 40000, image: "assets/tv.jpg" },
];

const cart = [];
const productContainer = document.getElementById("products");
const cartContainer = document.getElementById("cart");

function displayProducts(products) {
  productContainer.innerHTML = '';
  products.forEach((product) => {
    productContainer.innerHTML += `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Price: ₹${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
    `;
  });
}

function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  cart.push(product);
  updateCart();
}

function updateCart() {
  cartContainer.innerHTML = '';
  let total = 0;
  cart.forEach((product, index) => {
    total += product.price;
    cartContainer.innerHTML += `
      <p>${product.name} - ₹${product.price} <button onclick="removeFromCart(${index})">Remove</button></p>
    `;
  });
  cartContainer.innerHTML += `<p><strong>Total: ₹${total}</strong></p>`;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function searchProducts() {
  const searchQuery = document.getElementById("searchBar").value.toLowerCase();
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery)
  );
  displayProducts(filteredProducts);
}

displayProducts(products);
