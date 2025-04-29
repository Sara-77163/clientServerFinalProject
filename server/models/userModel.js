const mongoose=require("mongoose")
const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    useName:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        trim:true,
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
    permission:{
        type:String,
        enum:['user','admin'],
        default:'user'
    }


},{
    timestamps:true
})
module.exports= mongoose.model('User',UserSchema)