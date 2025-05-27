const connect = require('./config/database-config');
 require("dotenv").config();
const app = require('./app');
const port = process.env.PORT || 30000

app.listen(port ,async ()=>{
 console.log("port", `http://localhost:${port}`);
 await connect();
 console.log("db is connected" );
 
 
})