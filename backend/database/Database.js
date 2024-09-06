import mongoose from "mongoose";
const URI='mongodb+srv://nithin20891a05e5:gQRtqA1sUY0dwE1l@cluster0.b7dei.mongodb.net/';
export default function databaseConnect(){
    try {
        mongoose.connect(URI
            ,{
                useNewUrlParser:true,
                useUnifiedTopology:true
            }
        )
        .then(()=>console.log("Connected to mongodb"))
        .catch((error)=>console.log(error));
    } catch (error) {
        console.log(error);
    }
    
}
