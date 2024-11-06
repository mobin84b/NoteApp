import mongoose from "mongoose";
const userSchema =new mongoose.Schema({
    email:{
        type:String,
        required:[true,"email is required"],
        match:[/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g,'email invalid'],
        unique:[true,'email is already  taken']
    },
    password:{
        type:String,
        required:[true,'password is required']
    },
    name:{
        type:String,
        required:[true,'name is required']
    },
    role:{
        type:String,
        default:'user',
        enum:['user','admin']
    }
},{timestamps:true})
const User=mongoose.model('User',userSchema)
export default User