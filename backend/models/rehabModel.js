import mongoose from "mongoose";

const rehabSchema=mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    area:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    aadhar:{
        type: String,
        required: true
    },
    },
    {
        timestamps:true
    }
);

export const Rehab = mongoose.model('rehabs', rehabSchema);