const express = require("express");
const router = express.Router();
const User = require("../model/RegisterSchema")


router.post ("/register", async (req,res)=>{
    console.log(req.body);
    const { email,password}= req.body;
    if( !email || !password){
        res.status(422).json({message:"please fill the data"});
    }
    try{
        const UserExist = await User.findOne({email:email});
        if(UserExist){
            res.status(422).json({message: "Email Already Exist"})
        }else{
            const addUser = await User({email ,password});
            await addUser.save();
            if(addUser){
                res.status(201).json({
                    email:req.body.email,
                    password: req.body.password,
                });
                console.log(addUser);
            }else{
                res.status(422).json({message: "Invalid Credentials"})
            }
        }

    }catch(err){
        console.log(err);
        res.status(500).json({err: "internal server error"});
    }
})




module.exports= router;