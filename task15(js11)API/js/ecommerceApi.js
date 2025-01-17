
// Fetch all categories and products
async function fetchCategories() {
  try {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    const categories = await response.json();
    printCategories(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
}

async function fetchProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    printData(products);
      setupCheckboxListeners(products);
      sortProductsByPrice(products);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

// Display categories as checkboxes
function printCategories(categories) {
  const checkedList = document.getElementById("checkedList");
  categories.forEach((category) => {
    checkedList.innerHTML += `
            <label class="checkbox-container">
                <input type="checkbox" value="${category}" class="category-checkbox">
                ${category}
            </label>
        `;
  });
}

// Display products in the DOM
function printData(products) {
  const productsContainer = document.getElementById("productsContainer");
  // Clear previous content
    productsContainer.innerHTML = ""; 
  products.forEach((product) => {
    productsContainer.innerHTML += `
            <div class="cart-container">
                <img src="${product.image}" alt="${product.title}" class="cart-img">
                <h4 class="product-title">${product.title}</h4>
                <p class="product-overview">${product.description}</p>
                <p class="product-price">$${product.price}</p>
            </div>
        `;
  });
}

// Handle filtering by selected categories
function setupCheckboxListeners(products) {
  const checkboxes = document.querySelectorAll(".category-checkbox");

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const selectedCategories = Array.from(checkboxes)
        .filter((cb) => cb.checked)
        .map((cb) => cb.value);

      if (selectedCategories.length > 0) {
        const filteredProducts = products.filter((product) =>
          selectedCategories.includes(product.category)
        );
        printData(filteredProducts);
      } else {
          // Show all products if no category is selected
        printData(products); 
      }
    });
  });
}


function sortProductsByPrice(products) {
  const priceCheckbox = document.querySelectorAll(".price-checkbox");

  priceCheckbox.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const selectedPrice = checkbox.value;
      let sortedProducts;

      if (selectedPrice === "asc") {
        // Sort in ascending order (without mutating the original array)
        sortedProducts = [...products].sort((a, b) => a.price - b.price);
      } else if (selectedPrice === "desc") {
        // Sort in descending order (without mutating the original array)
        sortedProducts = [...products].sort((a, b) => b.price - a.price);
      } else if (selectedPrice === "default") {
        // Reset to the original products order
        sortedProducts = products;
      }

      // Print the sorted or default products
      printData(sortedProducts);
    });
  });
}




// Fetch data on page load
fetchCategories();
fetchProducts();




