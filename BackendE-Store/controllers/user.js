const userModel = require('../models/User');
const { hashPassword, comparePassword } = require('../utils/passwordUtils');
const JWT = require('jsonwebtoken');




// @ desc Register User
// @ route POST/api/v1/creatuser
// @ access Public
exports.registerUser = async (req, res) => {
  try {
    // const sami = [2, 2]
    //destructure 
    const { name, email, password } = req.body;
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
      name, email, password: hashedPass
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
exports.loginUser = async (req, res) => {
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

