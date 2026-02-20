const { categories, sizes} = require('../models/Product');

const getProductCards = (products) => {
    if (!products || products.length === 0) {
        return '<p> Sorry we couldn´t find that product</p>'
    } return products.map(melon=> `
       <div class="product-card">
        <img src= "${melon.image}" alt="${melon.name}" width="150">
        <h3>${melon.name}</h3>
            <p>${melon.category} - ${melon.size}</p>
            <p>${melon.price}€</p>
            <a href="/products/${melon._id}">View Details</a>
        </div>
    `).join('');
};

const getProductForm = () => {
    return `
        <h2>Add New Product</h2>
        <form action="/dashboard" method="POST">
            <input type="text" name="name" placeholder="Product Name" required>
            
            <select name="category">
                ${categories.map(cat => `<option value="${cat}">${cat}</option>`).join('')}
            </select>
            
            <select name="size">
                ${sizes.map(s => `<option value="${s}">${s}</option>`).join('')}
            </select>
            
            <input type="number" name="price" placeholder="Price" step="0.01" required>
            <input type="text" name="image" placeholder="Image URL">
            
            <button type="submit">Create Product</button>
        </form>
    `;
};

module.exports = {getProductCards, getProductForm};