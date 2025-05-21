const port = process.env.port || 30000
const connect = require('./config/database-config')
const dotenv = require("dotenv").config()
const app = require('./app');

app.listen(port ,async ()=>{
 console.log("port", `http://localhost:${port}`);
 await connect();
 console.log("db is connected" );
 
 
})