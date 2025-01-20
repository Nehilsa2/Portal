import mongoose, { connect } from "mongoose";

const connectDB = async ()=>{
    mongoose.connection.on("connected",()=>{console.log("Database is connected")});
   
    await mongoose.connect(`${process.env.MONGODB_URI}/portaldb`);
       
}

export default connectDB;