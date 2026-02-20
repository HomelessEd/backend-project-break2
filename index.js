require('dotenv').config();
const express =require('express');
const connectDB = require('./01_config/db');
const productController = require('./03_controllers/productController');

const app = express();
connectDB();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Routes
app.get('/products', productController.showProducts);
app.get('/products/new', productController.showForm);
app.post('/products', productController.createProduct);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

