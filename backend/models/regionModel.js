import mongoose from "mongoose";

const regionSchema=mongoose.Schema({
    region:{
        type: String,
        required: true
    }
    },
    {
        timestamps:true
    }
);

export const Region = mongoose.model('regions', regionSchema);