// import { Schema, model } from "mongoose";
// import { isEmail } from "validator";


// const userOtpSchema = new Schema({
//     email:{
//         type:String,
//         required:true,
//         unique:true,
//         validate(value){
//             if(!isEmail(value)){
//                 throw new Error("Not Valid Email")
//             }
//         }
//     },
//     otp:{
//         type:String,
//         required:true
//     }
// });


// // user otp model
// const userotp = new model("userotps",userOtpSchema);

// export default userotp
const mongoose = require("mongoose");
const validator = require("validator");


const userOtpSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Not Valid Email")
            }
        }
    },
    otp:{
        type:String,
        required:true
    }
});


// user otp model
const userotp = new mongoose.model("userotps",userOtpSchema);

module.exports = userotp