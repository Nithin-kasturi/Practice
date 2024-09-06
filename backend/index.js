import express from 'express';
import userRouter from './route/user.route.js'
import databaseConnect from './database/Database.js';
import cors from 'cors';
const app=express();
const PORT=5000;
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("Backend is working")
});
app.use(cors(
    {
        origin: ["http://localhost:3000"],
        methods: ["POST", "GET"],
        credentials: true
    }
));
databaseConnect();
app.use('/user',userRouter);
app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})
// /=>backend is working
// /user/login , /user/signup
// Model -> schema for database
// Route ->Routing purpose
// Controller ->requests controller