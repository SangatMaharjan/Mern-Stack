import { Router } from "express";
import User from "../schema/userSchema.js";


let userRoutes=Router()

userRoutes
.route("/")
.post(async(req,res,next)=>{
    try {
         let result= await User.create(req.body)
         res.json({
        success:true,
        message:"user created successfully.",
        result:result,
         });
        
    } catch (error) {
        res.status(400).json({
        success:false,
        message:error.message,
        });
    }
})
    


.get(async(req,res,next)=>{
    try{
         let result= await User.find()
        res.json({
        success:true,
        message:"user read successfully.",
        result:result,
         }); 
    }catch(error){
    res.status(400).json({
        success:false,
        message:error.message,
        });
    }})

userRoutes
.route("/:id")
.get(async(req,res,next)=>{
    try {
        let result=await User.findById(req.params.id);
        res.json({
            success:true,
            message:"user read successfully.",
            result:result,
        })
        
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message,
        })
    }
})
 .patch(async(req,res,next)=>{
    try {
        let result=await User.findByIdAndUpdate(req.params.id,req.body);
        res.json({
            success:true,
            message:"user updated successfully.",
            result:result,
        })
        
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message,
        })
    }
 })




 .delete(async(req,res,next)=>{
    try {
        let result=await User.findByIdAndDelete(req.params.id);
        res.json({
            success:true,
            message:"user deleted successfully.",
            result:result,
        })
        
    } catch (error) {
        res.json({
            success:false,
            message:error.message,
        })
    }
})

export default userRoutes


/**
 * product.create(req.body)
 * product.find()
 * product.findById(req.params.id)
 * product.findByIdAndUpdate(req.params.id,req.body)
 * product.findByIdAndDelete(req.params.id)
 */