const mongoose = require('mongoose');
require('dotenv').config();
const mongo = process.env.mongo_url


const connect = async () => {
    await mongoose.connect( "mongodb://localhost/lms")
    .then(()=>{
        console.log("connected db")
            
    })
     .catch((err)=>{
            console.log(err.message);
            
        })

}

module.exports = connect;