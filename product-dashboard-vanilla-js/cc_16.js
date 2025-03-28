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