import { Router } from "express";
import Product from "../schema/productSchema.js";

const productRoutes=Router()

productRoutes
.route("/")
.post(async (req,res,next)=>{
     try {
        let result=await Product.create(req.body);
        res.json({
            success:true,
            message:"product created successfully.",
            result:result,
        })
        
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message,
        })
    }
})



.get(async(req,res,next)=>{
   try{
       let result = await Product.findById(req.params.id);
        res.json({
        success:true,
        message:"product read successfully.",
        result:result,
   })}
    catch(error){   
        res.status(400).json({
            success:false,
            message:error.message,
        })
    }
})

productRoutes
.route("/:id")
.get(async (req,res,next)=>{
let result=await Product.findById(req.params.id);
    res.json({
        success:true,
        message:"product read successfully.",
        result:result,  
    })
})


.patch(async (req,res,next)=>{
    let result=await Product.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.json({
        success:true,
        message:"product updated successfully.",
        result:result,  
    })  
})
.delete(async(req,res,next)=>{  
    let result=await Product.findByIdAndDelete(req.params.id);
    res.json({
        success:true,
        message:"product deleted successfully.",
        result:result,  
    })  
})

export default productRoutes;