// import Apperror from "../utils/error-utils";
const Apperror = require('../utils/error-utils')
const User = require('../models/user-schema');
const cloudnary = require('cloudinary')




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

  if(!req.file){
    try {
      const result = await cloudnary.v2.uploader.upload(req.file.path,{
        folder:"lms",
        width:250,
        height:250,
        gravity:'face',
        crop: 'fill'
      });

      if(result){
        user.avatar.public_id = result.public_id;
        user.avatar.secure_url = result.secure_url;

        // remove file on local system
        fs.rm(`uploads${req.file.filename}`)
      }
    } catch (error) {
      return next(new Apperror(error || " failed", 500))
    }
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

const bcrypt = require('bcrypt'); // Ensure this is imported if not already

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Find the user and include the password field
    const user = await User.findOne({ email }).select('+password');

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Compare provided password with stored hash
    const isPasswordValid = await bcrypt.compare(password, user.password);
    
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate token (assuming you have a method on the user schema)
    const token = user.generateJwtToken();

    // Set cookie options (make sure this is defined)
    res.cookie('token', token, cookieOption); 

    // Respond with success (you can also return user info without password if needed)
    return res.status(200).json({ success: true, token });

  } catch (error) {
    next(new Apperror("failed to login", 400)); // Pass to error handling middleware
  }
};

const logout = async (req, res) =>{
res.cookie("token", "" ,{
  secure: true,
  maxAge:0,
  httpOnly:true
});

 return res.status(200).json({
  success: true,
  message:"user logged out successfully"
})
};
const getProfile = async (req, res, next) => {
  try {
    const userId = req.user.id; // From JWT middleware
    const user = await User.findById(userId);

    if (!user) {
      return next(new Apperror("User not found", 404));
    }

    res.status(200).json({
      success: true,
      message: "User details",
      user,
    });
  } catch (error) {
    return next(new Apperror("Failed to fetch user details", 500));
  }
};


const forgotpassword = async (req, res, next)=>{
  const {email} = req.body;
  if(!email){
    return next(new Apperror("email is require", 400))
  }

  const user = User.findOne({email})
  if(!user){
    return next(new Apperror("email is not register", 400))
  }

  const resettoken = await user.generatepasswordresettoken();

  await user.save();

  const resetpasswordurl = `&(process.env.FRONTEND_URL)/reset-password/${resettoken}`
  try {
    await sendEmail(email, subject,messaage);
    res.status(200).json({
      success: true,
      messaage:`reset password token is send to ${email} succesfully`
    })
  } catch (error) {
    user.forgotpassword = undefined;
    user.forgetpasswordexpdate = undefined;
     return next(new Apperror(error.message, 500))
  }
  
}


const resetpassword = ()=>{

}

module.exports = {
    register,
    login,
    logout,
    getProfile

} 
