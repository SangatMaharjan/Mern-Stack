// import {Schema,model} from "mongoose";

import { model, Schema } from "mongoose";

let schoolSchema=Schema({
    name:{
        type:String,
        required:[true,"name is required."],
    },

    address:{
    type:String,
    required:[true,"address is required."],
    },
    phone:{
    type:Number,
    required:[true,"phone is required."],
    },
    email:{
    type:String,
    required:[true,"email is required."]
    },
    noOfRooms:{
    type:Number,
    required:[true,"no of rooms is required."],
    }
})

let School=model("School",schoolSchema)
export default School;