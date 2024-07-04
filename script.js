
document.addEventListener('DOMContentLoaded', function() {
    const companies = ['Company1', 'Company2', 'Company3', 'Company4', 'Company5'];
    const category = 'electronics';
    const topN = 10;

    const fetchProducts = async (company) => {
        try {
            const response = await fetch('http://20.244.56.144/test/comapnies/:{AMZ}/categories/:{Computer}/products?top=n&minPrice=p&maxPrice=q');
            const data = await response.json();
            return data;
        }   catch (error) {
            console.error('Error fetching products:', error);
            return [];
        }
    };

    const displayProducts = (products) => {
        const productsContainer = document.getElementById('products');
        productsContainer.innerHTML = '';

        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('card', 'product-card');

            productCard.innerHTML = `
                <div class="card-content">
                    <div class="details">
                        <span class="card-title">${product.name}</span>
                        <p>Company: ${product.company}</p>
                        <p>Rating: ${product.rating}</p>
                        <p>Availability: ${product.availability ? 'In Stock' : 'Out of Stock'}</p>
                    </div>
                    <div class="price">$${product.price}</div>
                </div>
                <div class="card-action">
                    <a href="#">View Details</a>
                </div>
            `;

            productsContainer.appendChild(productCard);
        });
    };

    const loadProducts = async () => {
        let allProducts = [];
        for (const company of companies) {
            const products = await fetchProducts(company);
            allProducts = allProducts.concat(products);
        }

        
        allProducts.sort((a, b) => a.price - b.price);
        
        displayProducts(allProducts);
    };

    loadProducts();
});
