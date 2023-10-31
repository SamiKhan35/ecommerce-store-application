// const User = require('../models/User');
const userModel = require('../models/User');
const { hashPassword, comparePassword } = require('../utils/passwordUtils');
const JWT = require('jsonwebtoken');
const sendMail = require('../utils/email');
const crypto = require('crypto');

// @ desc Register User
// @ route POST/api/v1/creatuser
// @ access Public
exports.registerUser = async (req, res, next) => {
  try {

    //destructure 
    const { name, email, password, role } = req.body;

    // console.log('here is req.body', req.body);
    //validation
    if (!name || !email || !password) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }
    //check if the user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: 'User already Existed, please Login',
      });
    };
    //Hash the password
    const hashedPass = await hashPassword(password);
    //create a new user
    const newUser = await userModel.create({
      name, email, password: hashedPass, role: role
    });

    res.status(201).json({
      success: true,
      message: 'User Register Successfully',
      user: newUser,
    });


  } catch (error) {
    console.log('Error in Registration', error);
    res.status(500).send({
      success: false,
      message: 'error in registration',
      error: error.message,
    });
  }
}

// @ desc Login User
// @ desc route POST/api/v1/loginuser
// @ desc access Public 
exports.loginUser = async (req, res, next) => {
  try {
    // destructure
    const { email, password } = req.body;
    console.log('req. body is :', req.body);
    // validation 
    if (!email) {
      return res.status(404).json({
        success: false,
        message: 'Email or Phone number is Required',
      });
    }
    if (!password) {
      return res.status(404).json({
        success: false,
        message: 'Password is Required',
      });
    }
    // check if user exists
    const existedUser = await userModel.findOne({ email }).select("+password");
    //  reason of .select("+password") :when you query the database, Mongoose will exclude the "password" field from the query result. to prevent the password from being unintentionally exposed in query results.
    console.log('user email is :', email);
    if (!existedUser) {
      return res.status(404).json({
        success: false,
        message: 'Email or Phone number is not Registered',
      });
    }
    const isPasswordMatch = await comparePassword(password, existedUser.password)
    console.log('matching the password is', isPasswordMatch);
    if (!isPasswordMatch) {
      return res.status(404).json({
        success: false,
        message: 'Invalid Password',
      });
    }
    // Generate and Send a JWT token
    const token = JWT.sign({ _id: existedUser._id },
      process.env.JWT_SECRET, {
      expiresIn: "3d",
    }
    );
    console.log('here is token', token);
    res.status(200).json({
      success: true,
      message: 'Login Successfully',
      user: {
        name: existedUser.name,
        email: existedUser.email,
        password: existedUser.password,
      },
      token: token,
    });
  } catch (error) {
    console.log("Error in login", error);
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: error.message,
    });
  }
}
// @ desc Particular User
// @ desc route GET/api/v1/getme
// @ desc access Private
exports.getMe = async (req, res, next) => {
  const user = await userModel.findById(req.user.id);
  res.status(200).json({
    success: true,
    data: user,
  });
}
// @ desc Password User
// @ desc route POST/api/v1/forgotpassword
// @ desc access Public 
exports.forgotPwd = async (req, res, next) => {
  try {
    // 1. Get User Based on Email
    const user = await userModel.findOne({ email: req.body.email });
    console.log('forgot password user email is', user);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: " User not Found",
        error: error.message,
      });
    }
    // 2. Generate Random Token 
    const newToken = await user.getResetPasswordToken(); // Generate a reset token
    console.log('here is your new TOken', newToken)
    await user.save({ validateBeforeSave: false }); // Save the token and user
    
    // Create the reset URL
    const resetUrl = `${req.protocol}://${req.get('host')}/api/v1/user/forgotpassword/${newToken}`;
    
    // Compose the email message
    const message = `We have received a password reset request. Please use the following link to reset your password:\n\n${resetUrl}\n\nThis reset password link is valid for 10 minutes.`;
    
    // Send the email with the reset link
    await sendMail({
      email: user.email,
      subject: 'Password Change Request',
      message: message,
    });
    
    // Respond with a success message
    res.status(200).json({
      status: 'success',
      message: 'Password reset link sent to the user email successfully.',
    });
    

  } catch (error) {
    res.status(404).json({
      success: false,
      message: 'Internal Server Error',
      error: error.message,
    });
  }
}
// @ desc Reset Password User
// @ desc route PUt/api/v1/resetpassword
// @ desc access Public 
exports.resetPwd = async (req, res, next) =>{
  try{
    //if user exist with the given token and token has not expired
    const token = crypto.createHash('sha256').update(req.params.token).digest('hex');
    const userfound = await userModel.findOne({resetPasswordToken:token});
    if(!userfound){
      return res.status(404).json({
        success: false,
        message: "Token Is Invalid and Expire",
        });
      }
      // resetting the password
      const newpassword = req.body.password;
      const hashedPassword = await hashPassword(newpassword);
      userfound.password = hashedPassword;
      userfound.resetPasswordToken = undefined;
      await userfound.save();

      // Generate a new Login With token
      const loginwithtoken = await JWT.sign({_id :userfound._id}, process.env.JWT_SECRET,{
        "expiresIn": "1d",
      });
      res.status(200).send({
        success: true,
        message: 'Password Reset Successfully. Please login again',
        userFound: {
            name: userfound.name,
            email: userfound.email,
            phone: userfound.phone,
            address: userfound.address,
        },
        token: loginwithtoken,
    });

  }
  catch(error){
    res.status(404).json({
      success: false,
      message:"Internal Server Error",
      error: error.message,
    });
  }
}
