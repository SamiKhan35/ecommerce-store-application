const express = require('express');
const router = express.Router();

const { registerUser, loginUser, getMe } = require('../controllers/user');
const { authorize, protect } = require('../middleware/authorize');

//ALL ROUTES 
router.route('/createuser').post(authorize('user', 'admin'), (registerUser));
router.route('/loginuser').post(loginUser);
router.route('/getme').get(protect, getMe);


module.exports = router;