const mongoose=require("mongoose")
const CitySchema=mongoose.Schema({
name:{
    type:String,
    required:true,
    trim:true
},

},{
       timestamps:true

})
module.exports=mongoose.model('City',CitySchema)