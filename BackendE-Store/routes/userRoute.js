const express = require('express');
const router = express.Router();

const { registerUser, loginUser } = require('../controllers/user');

//ALL ROUTES 
router.route('/createuser').post(registerUser);
router.route('/loginuser').post(loginUser);


module.exports = router;