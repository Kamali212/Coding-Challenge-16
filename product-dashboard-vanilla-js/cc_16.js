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