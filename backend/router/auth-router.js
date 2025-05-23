
const {register, login, getProfile, logout} = require('../controllers/user-controllers')
const express = require('express');
const { isloggedin } = require('../middlewares/error-middleware');

const router = express.Router();

router.post('/signup', register); 
router.post('/signin', login); 
router.post('/logout', logout); 
router.get('/getuser', isloggedin, getProfile); 
router.post('/forgot/password',forgotpassword); 
router.post('/reset-password', resetpassword); 


module.exports = router;