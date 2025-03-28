// Task 2: Fetch Products with .then()


function fetchProductsThen() {
    fetch('https://www.course-api.com/javascript-store-products')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network error');
        }
        return response.json();
    })
    .then(products => {
        products.forEach(product => {
            console.log(product.name);
        });
    })
    .catch(error => {
        console.error('An error occured while fetching products', error);
    })
}

// Task 3: Fetch Products with async/await

async function fetchProductsAsync() {

    try {const response = await fetch('https://www.course-api.com/javascript-store-products');
        if (!response.ok) {
            throw new Error('Network error');
        }
        const products  = await response.json(); 
        displayProducts(products)
        } catch (error) {
            handleError(error);
        }

}

// Task 4: Display the Products

function displayProducts(products) {
    const container = document.getElementById('products-container');

    products.splice(0,5).forEach(product => {
        const listProduct = document.createElement('li');
        
        const productName = document.createElement('h2');
        productName.textContent = product.name;
       
        const productPrice = document.createElement('p');
        productPrice.textContent = product.price;

        const productImage = document.createElement('img');
        productImage.src = product.image;

        listProduct.appendChild(productName);
        listProduct.appendChild(productPrice);
        listProduct.appendChild(productImage);

        container.appendChild(listProduct);
    })
}

// Task 5: Reusable Error Handle

function handleError(error) {
    console.error("An Error Occure", error.message)
}