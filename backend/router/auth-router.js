
const {register, login, getProfile, logout} = require('../controllers/user-controllers')
const express = require('express');

const router = express.Router();

router.post('/signup', register); 
router.post('/signin', login); 
router.post('/logout', logout); 
router.get('/getuser', getProfile); 


module.exports = router;