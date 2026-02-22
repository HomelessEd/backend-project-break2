const {Product} = require('../02_models/Product');
const {getProductCards, getProductForm, getProductDetail, getAdminDetail, getEditForm } = require('../03_helpers/template');
const baseHtml = require('../03_helpers/baseHtml');
const getNavBar= require('../03_helpers/getNavBar');

const productController = 
{ showProducts: async (req,res) => {
    try{
        const {category} =req.query;
        const products = await Product.find(category ? {category} : {});
        const isAdmin = req.originalUrl.includes('dashboard');
        const nav =getNavBar(isAdmin);
        const cards = getProductCards(products, isAdmin);
        const title = category ? `Super Shop - ${category}` : 'Super Shop - All Products';
        const html = baseHtml('Super Shop- Buy this stuff', nav, cards);
        res.send(html);
    } catch (error) {
        console.error("Error in showProducts:", error);
        res.status(500).send('<h1>Server Error</h1>');
    }
  }, showForm: async (req,res) => {
    try {
        const nav = getNavBar();
        const form = getProductForm();
        const html =baseHtml('Add new product', nav, form);
        res.send(html);
    } catch (error) {
     res.status(500).send('<h1>Error</h1>');
    }
  }, createProduct: async (req, res) => {
    try {
        const productData = {...req.body};
        if (req.file) {
          productData.image = req.file.path;
        } await Product.create(productData);
          res.redirect('/dashboard');
    } catch (error) {
         console.error("Error in createProduct:", error);
         res.status(500).send('<h1>Error creating product</h1>');
    }
  }, showProductById: async (req, res) => {
    try{ 
      const product = await Product.findById(req.params.id);
      const nav = getNavBar();
      const detailHtml = getProductDetail(product);
      const html = baseHtml(product.name, nav, detailHtml);
      res.send(html);
    } catch(error) {
      console.error('Product could not be found', error);
      res.status(500).send('Product could not be found', error);
    }
  }, showAdminDetail: async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        const nav = getNavBar();
        const content = getAdminDetail(product); 
        const html = baseHtml(`Admin: ${product.name}`, nav, content);
        res.send(html);
    } catch (error) {
        res.status(500).send("Error loading admin detail");
    }
}, deleteProduct: async (req, res) => {
    try {
      await Product.findByIdAndDelete(req.params.id);
      res.redirect('/dashboard');
    } catch (error) {
      console.error('Error deleting product', error);
      res.status(500).send('<H1> Sorry we couldn´t delete product, check the error Ed</h1>');
    }
  }, showEditForm: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      const nav = getNavBar();
      const form = getEditForm(product);
      const html = baseHtml(`Editing ${product.name}`, nav, form);
      res.send(html);
    } catch (error) {
      res.status(500).send("Error loading edit form");
    }
  }, updateProduct: async (req, res) => {
    try {
      const updateData = { ...req.body};
      if (req.file) {
        updateData.image = req.file.path;
      } await Product.findByIdAndUpdate(req.params.id, updateData);
      res.redirect('/dashboard');
    } catch (error) {
      res.status(500).send("Error updating product");
    }
  }
};

module.exports = productController;