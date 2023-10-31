const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,

    },
    description: {
        type: String,
    },
    image: [{ type: String }],

    size: {
        type: String
    },
    color: {
        type: String
    },
    price: {
        type: Number,
    },

},
    { timestamps: true }
);
module.exports = mongoose.model('Product', ProductSchema);