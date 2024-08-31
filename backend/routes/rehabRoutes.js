import express from 'express';
import { Rehab } from '../models/rehabModel.js';

const router=express.Router();

router.post('/',async(request,response)=>{
    try {
        if(!request.body.name || !request.body.area || !request.body.description || !request.body.aadhar){
            return response.status(400).send({message : 'Send all required fields'});
        }    
        const newRehab = {
            name: request.body.name,
            area: request.body.area,
            description: request.body.description,
            aadhar: request.body.aadhar
        };
        const rehab=await Rehab.create(newRehab);
        return response.status(201).send(rehab);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({message : error.message})
    }
})

export default router