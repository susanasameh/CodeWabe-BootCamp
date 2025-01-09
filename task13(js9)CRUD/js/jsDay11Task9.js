class Product {
  constructor(name, price, category) {
    this.name = name;
    this.price = parseFloat(price);
    this.category = category;
  }
}

let products = [];
let editIndex = null; // To track the product being edited

// Load products from localStorage
if (localStorage.getItem("products") != null) {
  products = JSON.parse(localStorage.getItem("products"));
}

// DOM Elements
let productName = document.getElementById("name");
let productCategory = document.getElementById("category");
let productPrice = document.getElementById("price");
let tbody = document.getElementById("tbody");

// Display products in the table
function displayProducts() {
  tbody.innerHTML = ""; // Clear existing rows

  products.forEach((product, index) => {
    const row = `
            <tr>
                <td>${index + 1}</td>
                <td>${product.name}</td>
                <td>${product.category}</td>
                <td>${product.price.toFixed(2)}</td>
                <td>
                    <button class="edit" onclick="editProduct(${index})">Edit</button>
                    <button class="delete" onclick="deleteProduct(${index})">Delete</button>
                </td>
            </tr>`;
    tbody.innerHTML += row;
  });

  // Save updated products to localStorage
  localStorage.setItem("products", JSON.stringify(products));
}

// Add a new product
function addProduct() {
  const name = productName.value.trim();
  const category = productCategory.value.trim();
  const price = productPrice.value.trim();

  // Input validation
  if (name === "" || category === "" || price === "" || isNaN(price)) {
    alert("Please provide valid inputs.");
    return;
  }

  const newProduct = new Product(name, price, category);
  products.push(newProduct);

  clearForm();
  displayProducts();
}

// Edit a product
function editProduct(index) {
  const product = products[index];
  editIndex = index;

  // Prefill form with existing product data
  productName.value = product.name;
  productCategory.value = product.category;
  productPrice.value = product.price;

  document.getElementById("create-btn").style.display = "none";
  document.getElementById("update-btn").style.display = "inline-block";
  document.getElementById("cancel-btn").style.display = "inline-block";
}

// Update a product
function updateProduct() {
  const name = productName.value.trim();
  const category = productCategory.value.trim();
  const price = productPrice.value.trim();

  // Input validation
  if (name === "" || category === "" || price === "" || isNaN(price)) {
    alert("Please provide valid inputs.");
    return;
  }

  // Update the product
  const updatedProduct = new Product(name, price, category);
  products[editIndex] = updatedProduct;

  clearForm();
  displayProducts();

  document.getElementById("create-btn").style.display = "inline-block";
  document.getElementById("update-btn").style.display = "none";
  document.getElementById("cancel-btn").style.display = "none";
  editIndex = null;
}

// Delete a product
function deleteProduct(index) {
  if (confirm("Are you sure you want to delete this product?")) {
    products.splice(index, 1);
    displayProducts();
  }
}

// Cancel edit operation
function cancelUpdate() {
  clearForm();

  document.getElementById("create-btn").style.display = "inline-block";
  document.getElementById("update-btn").style.display = "none";
  document.getElementById("cancel-btn").style.display = "none";
  editIndex = null;
}

// Clear form fields
function clearForm() {
  productName.value = "";
  productCategory.value = "";
  productPrice.value = "";
  productName.focus();
}

// Initialize display
displayProducts();
