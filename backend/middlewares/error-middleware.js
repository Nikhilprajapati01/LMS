const errormiddleware = (err, req , res ,next)=>{
    err.statuscode = err.statuccode || 500
    err.message = err.message || "something went wrong"
    res.status().json({
        success: false,
        message:err.message,
        stack: err.stack
    })
}


const isloggedin = ()=>{
    
}
module.exports = errormiddleware;