
import express, { json } from "express";
import firstRoute from "./src/routes/firstRoute.js";
import productRoutes from "./src/routes/productRoutes.js";
import userRoutes from "./src/routes/userRoutes.js";
import mongoose from "mongoose";
import schoolRoute from "./src/routes/schoolRoutes.js";
import cors from "cors"
let app=express()

app.listen(8000,() => {
    console.log("application is listening at port 8000");
    
    mongoose.connect("mongodb://localhost:27017/cosmos");
    console.log("the data base connection sucessfulley!!");
    
})

app.use(cors()) // we enable browser to request backend



app.use(json())
app.use(firstRoute)
app.use("/product", productRoutes)
// app.use("/user",userRoutes)
app.use("/school",schoolRoute)