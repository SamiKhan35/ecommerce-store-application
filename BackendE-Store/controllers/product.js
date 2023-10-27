const ProductModel = require('../models/Product');
const { multerImage } = require('../utils/multerConfig'); // multer middleware

// @desc Create Product
// @route POST/api/v1/createproduct
// @access Public
exports.createProduct = async (req, res, next) => {
    try {
        // Handle the file upload with Multer
        multerImage.array('image', 5)(req, res, async function (err) {
            if (err) {
                console.log('Error uploading image:', err);
                return res.status(500).send({
                    success: false,
                    message: 'Error uploading image',
                    error: err.message
                });
            }
            // Check if req.file exists before accessing its properties
            if (!req.files || req.files.length === 0) {
                return res.status(400).json({
                    success: false,
                    message: 'No file uploaded'
                });
            }

            // Once the file upload is complete, log the file data
            console.log('Request File:', req.files);

            // Access the file data and other fields after the file has been uploaded
            const { title, description, size, color, price } = req.body;
            const image = req.files.map(file => file.originalname); // Correct the way to access the filename

            const newProduct = new ProductModel({
                title,
                description,
                size,
                color,
                price,
                image,

            });

            const saveProduct = await newProduct.save();
            // Log the Saved products  
            console.log('saved products :', saveProduct);
            res.status(201).json({
                success: true,
                message: 'New Product Created Successfully',
                product: saveProduct,
            });
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error: error.message,
        });
    }
}
// @desc All Products
// @ route GET//api1/v2/product/getproducts
// @ access Public
exports.getProducts = async (req, res, next) => {
    try {
        const products = await ProductModel.find();
        const productCount = await ProductModel.countDocuments(); // Use countDocuments to get the count
        res.status(200).json({
            success: true,
            message: "All Products Fetched",
            count: productCount,
            product: products,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error: err.message,
        });
    }
}
// @desc Single Product
// @ route GET//api1/v2/product/singleproduct/:id
// @ access Public
exports.singleProduct = async (req, res, next) => {
    const product = await ProductModel.findById(req.params.id);
    if (!product) {
        res.status(404).json({
            success: false,
            message: `product not found with id of ${req.params.id}`
        })
    }
    res.status(200).json({
        success: true,
        message: `Display Product ${req.params.id} `,
        data: product,
    });
}
// @desc Update Product
// @ route PUT//api1/v2/product/updateproduct/:id
// @ access Public
exports.updateProduct = async (req, res, next) => {
    try {
        const updateProduct = await ProductModel.findByIdAndUpdate(
            req.params.id, {
            $set: req.body,
        },
            {
                new: true,
                runValidators: true,
            });
        if (!updateProduct) {
            return res.status(404).json({
                success: false,
                message: `product not found with id ${req.params.id}`,
            });
        }
        res.status(200).json({
            success: true,
            message: `Updated Successfully`,
            data: updateProduct,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message,
        });
    }
}
// @desc Delete Product
// @ route Delete//api1/v2/product/deleteproduct/:id
// @ access Public
exports.deleteProduct = async (req, res, next) => {
    try {
        const productId = req.params.id;
        console.log('here is product id ', productId);
        const deleteProduct = await ProductModel.deleteOne({ _id: productId });

        if (deleteProduct.deletedCount > 0) {
            return res.status(200).send({
                message: 'product has been deleted',
                // data: deleteProduct,
            });
        }
        else {
            res.status(404).json({
                success: false,
                message: 'product not found',

            });
        }

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error: error.message,
        });
    }
}