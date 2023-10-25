const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is Required'],
        unique: true,
        trim: true,
        maxlength: [30, 'Name can not be more than 30 characters'],
    },
    email: {
        type: String,
        match: [
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            'Please Add a Valid Email Address'
        ]
    },
    password: {
        type: String,
        required: [true, 'Password is Required'],
        minlength: 6,
        select: false,
    },
});
// new

module.exports = mongoose.model('User', UserSchema);