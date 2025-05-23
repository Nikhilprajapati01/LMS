const cookieParser = require('cookie-parser');
const express = require('express');
const {errormiddleware, isloggedin} = require('./middlewares/error-middleware')
const bodyparser = require('body-parser')
const route= require('./router/auth-router')


const app = express();

// app.use(authMiddleware);
app.use(cookieParser)
app.use(bodyparser.json())
app.use(isloggedin)
app.use(bodyparser.urlencoded({extended:true}))
app.use(errormiddleware)
app.use('/api/v1', route)

app.get("/", (req , res) =>{
    res.json("hello")
})

module.exports =  app;