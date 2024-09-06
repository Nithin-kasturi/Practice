import mongoose, { Schema } from "mongoose";
const userSchema=new Schema({
    fullname:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    }
});
const User=mongoose.model("Users",userSchema);
export default User;