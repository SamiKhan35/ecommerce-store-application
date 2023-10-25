const express = require('express');
const router = express.Router();

//controllers
const { createProduct, getProducts, singleProduct, updateProduct, deleteProduct } = require('../controllers/product');
//all routes
router.route('/createproduct').post(createProduct);
router.route('/getproducts').get(getProducts);
router.route('/singleproduct/:id').get(singleProduct);
router.route('/updateproduct/:id').put(updateProduct);
router.route('/deleteproduct/:id').delete(deleteProduct);
module.exports = router;