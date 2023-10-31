const mongoose = require('mongoose');
const crypto = require('crypto');
// const { reset } = require('nodemon');
// const joi = require('joi');



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
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
});

// const userValidation = async (data) => {
//     const UserSchema = joi.object({
//         name: joi.string().max(30),
//         email: joi.string().email(),
//         password: joi.string().min(6),
//         role: joi.string().valid('user', 'admin'),
//     });
// }
// const res = await UserSchema.validateAsync(data);
// return res;

UserSchema.methods.getResetPasswordToken = async function() {
    // Generate and set the reset token and expiration time here
    const resetToken = crypto.randomBytes(20).toString('hex');
    
    this.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');
    
    // Set the expiration time
    this.resetPasswordExpire = Date.now() + 3600000; // 10 minutes in milliseconds

    return resetToken;
};

module.exports = mongoose.model('User', UserSchema);
// module.exports.schema = userValidation;




