const env = require('dotenv');
const express = require("express")
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
app.use(express.json());
env.config({path:"./config.env"})

const corsOptions = {
    origin: 'http://localhost:3000', // Replace with your frontend's domain
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // enable set cookie
    optionsSuccessStatus: 204,
  };

 

const port = process.env.PORT;


 // Middleware to enable CORS with options
 app.use(cors(corsOptions));
require("./db/conn");
app.use(require("./router/auth"));
app.use (require("./model/RegisterSchema"));




app.get("/", (req,res)=>{
    res.send("home page");
})




app.listen(port, (req,res)=>{
    console.log(`listen to the port of ${port}`)
})