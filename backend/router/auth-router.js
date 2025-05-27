const express = require('express');
const router = express.Router();
const {isloggedin} = require('../middlewares/auth-middleware')
console.log('isloggedin →', isloggedin);
console.log('typeof isloggedin →', typeof isloggedin);



const {
  register,
  login,
  getProfile,
  logout,
  forgotPassword,
//   resetpassword
 
} = require('../controllers/user-controllers');
console.log({ register, login, getProfile, logout, forgotPassword,});


router.post('/signup', register); 
router.post('/signin', login); 
router.post('/logout', logout); 
router.get('/getuser', isloggedin, getProfile); 
router.post('/forgot/password',forgotPassword); 
// router.post('/reset-password', resetpassword); 


module.exports = router;