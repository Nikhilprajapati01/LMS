// import Apperror from "../utils/error-utils";
const Apperror = require('../utils/error-utils')
const User = require('../models/user-schema');




const cookieOption = {
    maxAge: 7*24*60*100 ,// 7d
    httpOnly: true,
    secure: true
}
const register = async (req, res, next) => {
  const { fullname, email, password } = req.body;

  if (!fullname || !email || !password) {
    return next(new Apperror("All fields are required", 400));
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    return next(new Apperror("Email already exists", 409));
  }

  const user = await User.create({
    fullname,
    email,
    password,
    avatar: {
      public_id: email,
      secure_url: ""
    }
  });

  if (!user) {
    return next(new Apperror("User registration failed", 400));
  }

  const token = user.generateJwtToken(); // ✅ call on instance

  res.cookie('token', token, cookieOption); // make sure cookieOption is defined

  res.status(201).json({
    success: true,
    message: "User registered successfully",
    token: token,
    user // ✅ return the created user
  });
};

const login = async (req, res, next)=>{
    

}


module.exports = {
    register

} 
