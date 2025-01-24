import express from "express";
import cors from "cors";
import 'dotenv/config';
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import authRouter from "./Routes/authRoutes.js"
import userRouter from "./Routes/userRouter.js";

const app = express();
const port = process.env.PORT || 4000
connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials:true})); 
    
//API ENDPOINTS
app.get("/",(req,res)=>{
    res.send("api working");
})

app.use("/api/auth",authRouter);
app.use("/api/user",userRouter);


app.listen(port,()=>{
    console.log(`server started on port :${port}`)
})

