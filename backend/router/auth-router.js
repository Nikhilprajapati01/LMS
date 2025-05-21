
const {register} = require('../controllers/user-controllers')
const express = require('express');

const router = express.Router();

router.post('/Signup', register);


module.exports = router;