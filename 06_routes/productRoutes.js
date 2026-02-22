const express = require('express');
const router = express.Router();
const productController = require('../05_controllers/productController');
const { upload } = require('../01_config/cloudinary');

//Shopfront
router.get('/products', productController.showProducts);
router.get('/products/:id', productController.showProductById);

//BackoShop
router.get('/dashboard', productController.showProducts);
router.get('/dashboard/new', productController.showForm);
router.post('/dashboard', upload.single('image'), productController.createProduct);
router.get('/dashboard/:id/edit', productController.showEditForm);
router.put('/dashboard/:id', upload.single('image'), productController.updateProduct);
router.post('/dashboard/:id/update',upload.single('image'), productController.updateProduct);
router.get('/dashboard/:id', productController.showAdminDetail);

//My deletes
router.delete('/dashboard/:id/delete', productController.deleteProduct);
router.post('/dashboard/:id/delete', productController.deleteProduct);


//Bugger off to index.js
module.exports = router;