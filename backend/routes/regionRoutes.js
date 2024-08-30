import express from 'express';
import { Region } from '../models/regionModel.js';

const router=express.Router();


router.post('/',async(request,response)=>{
    try {
        if(!request.body.region){
            return response.status(400).send({message : 'Send all required fields'});
        }
        const newRegion = {
            region: request.body.region
        };
        const region=await Region.create(newRegion);
        return response.status(201).send(region);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({message : error.message})
    }
})


router.get('/', async(request,response)=>{
    try {
        const region=await Region.find({});
        return response.status(200).json({
            count:region.length,
            data:region
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message : error.message})
    }
});


router.get(`/:id`, async(request,response)=>{
    try {
        const {id}=request.params;
        const region=await Region.findById(id);
        return response.status(200).json(region);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message : error.message})
    }
});


export default router