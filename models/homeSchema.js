const mongoose=require('mongoose');
const schema=mongoose.Schema;
const userSchema=new schema({
    userName:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    pswd:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model('registerUser',userSchema)