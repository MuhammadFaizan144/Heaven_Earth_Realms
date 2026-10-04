const mongoose=require('mongoose')
const { email } = require('zod')
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        required:false
    }
})
const User=new mongoose.Schema.model("User",userSchema)
module.exports=User