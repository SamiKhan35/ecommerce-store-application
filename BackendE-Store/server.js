const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const connectDB = require('./config/db');
const cors = require('cors');
const path = require('path');


//load dotenv 
dotenv.config({ path: './config/config.env' });
//connect to DB
connectDB();
//rest or instance object
const app = express();

// Use express.json() middleware to parse JSON data
app.use(express.json());
app.use(cors());
app.use("/Image", express.static(path.join(__dirname, "Image")))
//routes require
const userRoute = require('./routes/userRoute');
const productRoute = require('./routes/productRoute');
//routes middlewares
app.use('/api/v1/user', userRoute)
app.use('/api1/v2/product', productRoute)
const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
    console.log(`Server Is Running on ${PORT}`.green.bold);
});

