const { categories, sizes} = require('../02_models/Product');

const getProductCards = (products, isAdmin = false) => {
    if (!products || products.length === 0) {
        return '<p> Sorry we couldn´t find that product</p>';
    } 

    return products.map(melon => {
        
        const detailPath = isAdmin ? 'dashboard' : 'products';

        return `
            <div class="product-card">
                <img src="${melon.image}" alt="${melon.name}" >
                <h3>${melon.name}</h3>
                <p>${melon.category} - ${melon.size}</p>
                <p>${melon.price}€</p>
                <a href="/${detailPath}/${melon._id}" class="button">View Details</a>
                
                ${isAdmin ? `
                    <form action="/dashboard/${melon._id}/delete?_method=DELETE" method="POST">
                       <button type="submit" class="button button-delete">Delete</button>
                    </form>
                ` : ''}
            </div>
        `;
    }).join('');
};

const getProductForm = () => {
    return `
        <h2>Add New Product</h2>
        <form action="/dashboard" method="POST" enctype="multipart/form-data">
            <input type="text" name="name" placeholder="Product Name" required>
            
            <select name="category">
                ${categories.map(cat => `<option value="${cat}">${cat}</option>`).join('')}
            </select>
            
            <select name="size">
                ${sizes.map(s => `<option value="${s}">${s}</option>`).join('')}
            </select>
            
            <textarea name="description" placeholder="Describe the product" required></textarea>

            <input type="number" name="price" placeholder="Price" step="0.01" required>
            <input type="file" name="image" required>
            

            <button type="submit" class="button"> Create Product</button>
        </form>
    `;
};

const getProductDetail = (product) => {
    return `
        <div class="product-detail">
            <h1>${product.name}</h1>
            <img src="${product.image}" alt="${product.name}" width="300">
            <p>${product.description}</p>
            <p><strong>Category:</strong> ${product.category}</p>
            <p><strong>Size:</strong> ${product.size}</p>
            <p><strong>Price:</strong> ${product.price}€</p>
            <a href="/products" class= "button">Back to products</a>
        </div>
    `;
};
const getAdminDetail = (product) => {
    return `
        <div class="admin-detail">
            <h2>Admin View: ${product.name}</h2>
            <img src="${product.image}" alt="${product.name}" style="width:200px;">
            <p>${product.description}</p>
            <p>Price: ${product.price}€</p>
            <hr>
            <a href="/dashboard/${product._id}/edit"><button class="button">Edit Product</button></a>
            
            <form action="/dashboard/${product._id}/delete?_method=DELETE" method="POST" style="display:inline;">
                <button type="submit" class="button button-delete">Delete Product</button>
            </form>
            <br><br>
            <a href="/dashboard"> <button class= "button"> Back to Dashboard</button></a>
        </div>
    `;
};

const getEditForm = (product) => {
    return `
        <h2>Edit Product: ${product.name}</h2>
        <form action="/dashboard/${product._id}?_method=PUT" method="POST" enctype="multipart/form-data" >
            <label>Name: <input type="text" name="name" value="${product.name}"></label><br>
            <label>Description: <input type="text" name="description" value="${product.description}"></label><br>
            <label>Price: <input type="number" name="price" value="${product.price}"></label><br>
            <label>Image: <input type="file" name="image"></label><br>
            <button type="submit" class= "button">Update Product</button>
        </form>
    `;
};

module.exports = {getProductCards, getProductForm, getProductDetail,getAdminDetail, getEditForm};