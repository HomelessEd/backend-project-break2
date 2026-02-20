require('dotenv').config();
const express =require('express');
const connectDB = require('./config/db');


const app = express();
connectDB();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

