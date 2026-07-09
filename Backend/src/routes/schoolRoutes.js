import { Router } from "express";
import School from "../schema/schoolSchema.js";


let schoolRoute = Router()

schoolRoute
.route("/")
.post(async(req,res,next)=>{
    try {
    let result= await School.create(req.body)    
    res.json({
        success:true,
        message:"school created successfully.",
        result:result,
    });  
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message,
        })
    }
})
.get(async(req,res,next)=>{
    try {
        let result= await School.find(req.params.id)
        res.json({
        success:true,
        message:"school read successfully.",
        result:result,
         });  
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message,
        })
    }
})


schoolRoute
.route("/:id")

.patch(async(req,res,next)=>{
    try {
        let result= await School.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.json({
        success:true,
        message:"school updated successfully.",
        result:result,
        });  
    } catch (error) {
        res.json({
            success:false,
            message:error.message,
        })
    }
})
.delete(async(req,res,next)=>{
    try {
        let result= await School.findByIdAndDelete(req.params.id)
        res.json({
        success:true,
        message:"school deleted successfully.",
        result:result,  
         });  
    } catch (error) {
        res.json({
            success:false,
            message:error.message,
        })
    }
})

export default schoolRoute; 