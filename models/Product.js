//This is where are product schema using mongoose will go 

const mongoose = require('mongoose');
const categories = ["Camisetas", "Pantalones", "Zapatos","Accesorios"];
const sizes = ["XS","S","M","L","XL"];

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'We need a product name mate'],
    trim: true
  }, 
    description:{
    type: String,
    required: [true, 'We need a description mate'],
  },
  image: {
    type: String,
    required: [true, 'We need an Image URL mate']
  },
  category: {
    type:String,
    required: true,
    enum: categories
  },
  size: {
    type: String,
    required: true,
    enum: sizes
  },
  price: {
    type: Number,
    required: [true, 'It needs a price'],
    min:0.1 
  }
}, {timestamps: true}
);

const Product = mongoose.model('Product', productSchema);

module.exports = {
    categories,
    sizes,
    Product
};