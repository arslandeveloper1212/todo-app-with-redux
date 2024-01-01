const mongoose = require("mongoose");

const DB = process.env.DATABASE;
mongoose.set("strictQuery", false);

mongoose.connect(DB).then(()=>{
    console.log("database connected");
}).catch((err)=>{
    console.log("not connected");
})