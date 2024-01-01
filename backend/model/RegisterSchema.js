const mongoose = require("mongoose");

const RegisterSchema = new mongoose.Schema({
   
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    }
})

const User = new mongoose.model("registerdata", RegisterSchema);

module.exports= User;