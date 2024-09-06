import User from "../model/user.model.js";

export const loginUser=async(req,res)=>{
    const {email,password}=req.body;
    const isUser=await User.findOne({email});
    if(isUser){
        if(isUser.password!==password){
            res.status(400).json({"Message":"Incorrect password"});
        }
        else{
            res.status(200).json({
                "Message":"Login success"
            })
        }
    }
    else{
        res.status(400).json({"Message":"User not exist sign up first"});
    }
}
export const signUpUser=async(req,res)=>{
    const {fullname,email,password}=req.body;
    const isUser=await User.findOne({email});
    if(isUser){
        res.status(400).json({"Message":"User already exists"});
    }
    else{
        const newUser=new User({
            fullname,
            email,
            password
        });
        newUser.save();
        res.status(200).json({"Message":"User created",newUser});
    }
}
