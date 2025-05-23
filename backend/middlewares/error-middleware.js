const Apperror = require("../utils/error-utils")
const jwt = require('jsonwebtoken')

const errormiddleware = (err, req , res ,next)=>{
    err.statuscode = err.statuccode || 500
    err.message = err.message || "something went wrong"
    res.status().json({
        success: false,
        message:err.message,
        stack: err.stack
    })
}


const isloggedin = async (req,res, next)=>{
    const {token} = req.cookies;

    if(!token){
        return next(new Apperror("unauthantication ", 400))
    }
    const userDetails = await jwt.verify(token, process.env.jwt_secret);
    res.user = userDetails;
next();
}
module.exports = {
    errormiddleware,
    isloggedin
}