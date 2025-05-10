const UserSchema=require("../models/userModel")
const {userValidator}=require("../dataValidator/userValidator")
const mongoose=require("mongoose")
const getUsers=async(req,res)=>{
    const users=await UserSchema.find().lean()
    res.json(users)
}
const getUserById=async (req,res)=>{
    const {_id}=req.params
    if(!mongoose.Types.ObjectId.isValid(_id))
            return res.status(400).send("type error")
    const user=await UserSchema.findById(_id).lean()
    if(!user)
        return res.status(404).send("the user not found")
    res.json(user)
}
const addUser=async (req,res)=>{
    const data=req.body
    const result= await userValidator(data)
    if(result.status!==200)
        return res.status(result.status).send(result.message)
    const newuser=await UserSchema.create({name:data.name,userName:data.userName,email:data.email,password:data.password,permission:data.permission})
    res.json(newuser)
}
const updateUser=async(req,res)=>{
    const {_id,name,userName,email,password,permission}=req.body
    if(!mongoose.Types.ObjectId.isValid(_id))
        return res.status(400).send("type error")
    let user=await UserSchema.findById(_id)
    if(!user)
        return res.status(404).send("the user not found")
    const result=await userValidator({_id,name,userName,email,password,permission})
    if(result.status!==200)
        return res.status(result.status).send(result.message)
    user.name=name
    user.userName=userName
    user.email=email
    user.password=password
    user.permission=permission
    const updateUser=await user.save()
    res.json(updateUser)
}
const deleteUser=async (req,res)=>{
    const {_id}=req.params
    if(!mongoose.Types.ObjectId.isValid(_id))
            return res.status(400).send("type error")
    const user=await UserSchema.findById(_id)
    if(!user)
        return res.status(404).send("the user not found")
    const deletedUser= await user.deleteOne()
    //get
    res.json(deletedUser)
}
module.exports={getUsers,getUserById,addUser,updateUser,deleteUser}