const {Product} = require('../02_models/Product');
const {getProductCards, getProductForm } = require('../05_helpers/template');
const baseHtml = require('../05_helpers/baseHtml');
const getNavBar= require('../05_helpers/getNavBar');

const productController = { showProducts: async (req,res) => {
    try{
        const products = await Product.find();
        const nav =getNavBar();
        const cards = getProductCards(products);
        const html = baseHtml('Please Bloody Work', nav, cards);
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
        await Product.create(req.body);
        res.redirect('/products');
    } catch (error) {
         console.error("Error in createProduct:", error);
         res.status(500).send('<h1>Error creating product</h1>');
    }
  }
};

module.exports = productController;