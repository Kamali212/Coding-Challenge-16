// Task 2: Fetch Products with .then()

// Create function to fetch products and show error message if url does not respond
function fetchProductsThen() { 
    fetch('https://www.course-api.com/javascript-store-products')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network error');
        }
        return response.json();
    })
    // Log products names to console
    .then(products => { 
        products.forEach(product => {
            console.log(product.name);
        });
    })
    // Catch if there was an error
    .catch(error => { 
        console.error('An error occured while fetching products', error);
    })
}

// Task 3: Fetch Products with async/await

async function fetchProductsAsync() {
// Fetch products and throw an error is response is not ok
    try {const response = await fetch('https://www.course-api.com/javascript-store-products'); 
        if (!response.ok) {
            throw new Error('Network error');
        }
        const products  = await response.json(); 
        // Display products and handle errors
        displayProducts(products) 
        } catch (error) {
            handleError(error);
        }

}

// Task 4: Display the Products
// Function to display products
function displayProducts(products) { 
    // Select product container and clear container 
    const container = document.getElementById('product-container'); 

    container.innerHTML = ''; 
    // Display 5 products only using splice
    products.splice(0,5).forEach(product => { 
        // Create an element for product name, price, and image
        const listProduct = document.createElement('div'); 
        
        const productName = document.createElement('h2');
        productName.textContent = `${product.fields.name}`;
       
        const productPrice = document.createElement('p');
        productPrice.textContent = `${product.fields.price}`;

        const productImage = document.createElement('img');
        productImage.src = product.fields.image[0].url;
        // Append to product div
        listProduct.appendChild(productName); 
        listProduct.appendChild(productPrice);
        listProduct.appendChild(productImage);
        // Append div to container 
        container.appendChild(listProduct);
    })
}

// Task 5: Reusable Error Handle
// Reusable error handler that logs errors to console
function handleError(error) {
    console.error("An Error Occured", error.message)
}

// Task 6: Call Your Fetch Function
// Call both fetch functions
fetchProductsThen();
fetchProductsAsync();