// Product Catalog
const productList = document.getElementById('product-list');

fetch('https://example.com/api/products')
    .then(response => response.json())
    .then(data => {
        data.forEach(product => {
            const productItem = document.createElement('li');
            productItem.className = 'product-item';
            productItem.innerHTML = `
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>Price: ${product.price}</p>
                <button>Add to Cart</button>
            `;
            productList.appendChild(productItem);
        });
    });

// Shopping Cart
const cartList = document.getElementById('cart-list');

// Add event listener to "Add to Cart" buttons
productList.addEventListener('click', event => {
    if (event.target.tagName === 'BUTTON') {
        const productItem = event.target.parentNode;
        const productName = productItem.querySelector('h3').textContent;
        const productPrice = productItem.querySelector('p:nth-child(2)').textContent;

        // Add product to cart
        const cartItem = document.createElement('li');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <h3>${productName}</h3>
            <p>Price: ${productPrice}</p>
            <button>Remove</button>
        `;
        cartList.appendChild(cartItem);
    }
});

// Remove product from cart
cartList.addEventListener('click', event => {
    if (event.target.tagName === 'BUTTON') {
        const cartItem = event.target.parentNode;
        cart
