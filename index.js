require('dotenv').config();
const express =require('express');
const connectDB = require('./01_config/db');
const productController = require('./05_controllers/productController');
const methodOverride = require('method-override');
const apiRoutes = require('./06_routes/apiRoutes');

const app = express();
connectDB();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(express.static('public')); //This is why css wasn´t working melon. 

//Base Landing Page message for my bloody sanity 
app.get('/', (req, res) => {
    res.send('<h3>Hello Human</h3>');
});

//Routes
const productRoutes = require('./06_routes/productRoutes');
app.use('/', productRoutes);
app.use('/api', apiRoutes);

//Open Server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

