const {Product}  = require("../02_models/Product")
const productController = require("../03_controllers/productController")
jest.mock('../02_models/Product')

describe('Does the productController acually bloody work?', () => {
    test('showProducts should fetch all the info and send HTML', async () => {
        const fakeProducts = [
            {name:'Oh Lenny the Lion!', 
            price: 10, 
            category: 'Fruit', size:'M'}
        ]; 
        const req = {};
        const res = {
          status:jest.fn().mockReturnThis(),   
          send: jest.fn() 
           };
        Product.find.mockResolvedValue(fakeProducts);
        await productController.showProducts(req,res);
        expect(Product.find).toHaveBeenCalled();
        expect(res.send).toHaveBeenCalledWith(expect.stringContaining('Oh Lenny the Lion!'));
        expect(res.send).toHaveBeenCalledWith(expect.stringContaining('Please Bloody Work'));
   });
});
