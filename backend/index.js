import express, { response } from "express";
import mongoose from "mongoose";
import { PORT, mongoDBURL } from "./config.js";
import regionRoutes from "./routes/regionRoutes.js";
import rehabRoutes from "./routes/rehabRoutes.js";
import cors from 'cors';

const app=express();

app.use(express.json());

app.use(cors());

app.use("/regions", regionRoutes);
app.use("/rehab", rehabRoutes);

mongoose.connect(mongoDBURL).then(()=>{
    console.log('App Connected to MongoDB successfully')
    app.listen(PORT,()=>{
        console.log(`App is listening to port ${PORT}`)
    })
}).catch((error)=>{
    console.log(error);
})