const User = require('../models/User');
const jwt = require('jsonwebtoken');

// access to specific Role
exports.authorize = (...roles) => { // roles is predefined and array passed as arguments
    return (req, res, next) => {
        if (!roles.includes(req.body.role)) {
            return res.status(403).json(`body Role ${req.body.role} is not authorized to access`)
        } else {
            next();
        }
    }

}
// protection of route from unauthorized user
// exports.protect = async (req, res, next) => {
//     try {
//         let token;
//         if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
//             token = req.headers.authorization.split(' ')[1];
//         }
//         if (!token) {
//             return res.status(401).json("Not Authorized to Access this route");
//         }
//         const decode = jwt.verify(token, process.env.JWT_SECRET);
//         console.log(decode);
//         req.user = await User.findById(decode.id);
//         next
//     } catch (error) {
//         return res.status('401').json("Not Authorized to Access");
//     }
// }


exports.protect = async (req, res, next) => {
    try {
        let token;
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(' ')[1];
        }
        if (!token) {
            return res.status(401).json("Not Authorized to Access this route");
        }
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decode);
        // Fetch the complete user data from your database
        const user = await User.findById(decode._id);
        if (!user) {
            return res.status(401).json("User not found");
        }
        // Attach the user object to the request for further processing
        req.user = user;
        next(); // Continue to the protected route
    } catch (error) {
        return res.status(401).json("Not Authorized to Access");
    }
}



