const express = require('express');
const router = express.Router();

const { registerUser, loginUser, getMe, forgotPwd ,resetPwd} = require('../controllers/user');
const { authorize, protect } = require('../middleware/authorize');

//ALL ROUTES 
router.route('/createuser').post(authorize('user', 'admin'), (registerUser));
router.route('/loginuser').post(loginUser);
router.route('/getme').get(protect, getMe);
router.route('/forgotpassword').post(forgotPwd);
router.route('/resetpassword/:token').put(resetPwd);


module.exports = router;