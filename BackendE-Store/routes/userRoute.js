const express = require('express');
const router = express.Router();
// require('../utils/passport-setup');
//import controllers 
const { registerUser, loginUser } = require('../controllers/user');
// const passport = require('passport');

//ALL ROUTES 
router.route('/createuser').post(registerUser);
router.route('/loginuser').post(loginUser);
// router.route('/google').get(passport.authenticate('google', {
//     scope: ['profile', 'email'],
// }));

module.exports = router;