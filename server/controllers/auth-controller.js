const User = require('../model/user-model')
const home = async (req, res) => {
    try {
        res.status(200).send("Hello")
    } catch (error) {
        res.status(500).send('not hello')
    }
}
const register=async (req,res) => {
    try {
        const{username,email,phone,password}=req.body
        const userExist=await User.findOne({email})
        if(userExist){
            return res.status(400).json({message:"Email already exist"})
        }
        const userCreated=await User.create({username,email,phone,password})
        res.status(200).json({message:"Register Succesfully",
            token: await userCreated.generateToken(),
            userId:userExist._id.toString(),
        })
    } catch (error) {
        res.status(500).send('error register')
    }
}
const login=async (req,res) => {
    try{
        const{email,password}=req.body
        const userExist=await User.findOne({email})
        if(!userExist){
            res.status(400).json({message:"email not exist"})
        }
        const user=await userExist.comparePassword(password)
        if(user){
            res.status(200).json({
                message:"Login succesfully"
            })
        }else{
            res.status(400).json({
                message:"Invalid password",
                token: await userExist.generateToken(),
                userId:userExist._id.toString(),
            })
        }


    }catch(error){
        res.status(500).send("not login")
    }
}
module.exports={home,register,login}