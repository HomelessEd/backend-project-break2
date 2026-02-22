const { categories } = require('../02_models/Product'); 

const getNavBar = (isAdmin = false) => {
    const categoryLinks = categories.map(cat => 
        `<a href="/products?category=${cat}">${cat}</a>`
    ).join(' | ');

    return `
    <nav class="header-top">
        <a href="/products">All</a> | 
        ${categoryLinks} | 
        <a href="/dashboard">Admin</a>
        ${isAdmin ? ' | <a href="/dashboard/new">New Product</a>' : ''}
    </nav>
    `;
};

module.exports = getNavBar;