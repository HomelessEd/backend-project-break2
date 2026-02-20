const {Product} = require('../02_models/Product');
const mongoose = require('mongoose');

describe('Product Model Unit Test', () => {
    test('Should send error if category  types is not in the enum list',() => {
       const product = new Product ({
         name: 'Shirt',
         description: 'It´s just a plain old shirt',
         image:'url',
         category: 'Guybrush Threepwood',
         size: 'M',
         price: 20
       });
       const validationError= product.validateSync();
       expect(validationError.errors.category).toBeDefined();
       expect(validationError.errors.category.message).toContain('is not a valid enum value');
    });
    test('Should send error if size is not in the enum list', () => {
        const product = new Product({
            name: 'Shirt',
            description: 'It´s just a plain old shirt',
            image:'url',
            category: 'Camisetas',
            size: 'BenidormBeachWhales',
            price: 20
        });
        const validationError = product.validateSync();
        expect (validationError.errors.size).toBeDefined();
    });
});

  