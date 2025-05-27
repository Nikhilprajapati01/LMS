const mongoose = require("mongoose");
// const {Schema} =  mongoose;
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')
const crypto = require('crypto')


const userSchema = new mongoose.Schema({

fullname: {
  type: String,
  required: true
},

       email: {
        type: String,
          required: true,
         unique: true
        
    
    },
   password: {
    type: String,
    required: [true, 'Password is required'],
    trim: true
     },
     

      role: {
    type: String,
    enum: ['user', 'admin'], // allowed values
    default: 'user' // default role
  },

  forgotPasswordToken: String,
  forgotPasswordExpire: Date,


   

}, {
    timestamps: true
});

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    const hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
  }
  next();
});

userSchema.methods.generateJwtToken = function () {
  return jwt.sign(
    {
      id: this._id,
      email: this.email,
      subscription: this.subscription, // fix spelling if needed
      role: this.role
    },
    process.env.JWT_SECRET, // use uppercase by convention
    {
      expiresIn: '1h'
    }
  );
};

userSchema.methods.generatePasswordResetToken = function () {
  // Generate a random token
  const resetToken = crypto.randomBytes(20).toString('hex');

  // Hash the token and store in the DB
  this.forgotPasswordToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  // Set token expiration time (15 minutes from now)
  this.forgotPasswordExpire = Date.now() + 15 * 60 * 1000;

  // Return the plain token (to send via email)
  return resetToken;
};
  
const User = mongoose.model('User', userSchema);

module.exports = User;