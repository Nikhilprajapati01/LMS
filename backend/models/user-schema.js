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

  forgerpasswordtoken: String,
  forgetpasswordexpdate: Date,


   

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

userSchema.methods.generatepasswordresettoken = function(){
  const resetToken = crypto.randomBytes(20).toString('hax');
  this.forgerpasswordtoken = crypto.createHash('sha256')
  .update(resetToken)
  .digest('hax')
  this.forgetpasswordexpdate = Date.now() + 15 * 60 *1000;
  return resetToken;
};
  
const User = mongoose.model('User', userSchema);

module.exports = User;