const mongoose = require("mongoose");
const validator= require("validator");


const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:3
    },
    email:{
        type: String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid email")
            }
        }

    },
    message:{
        type:String,
        required:true,
        minLength:3
    },

    date:{
        type:Date,
        default:Date.now
    }
})

// create a collection 
 const User = mongoose.model("User",userSchema);

 module.exports =User;
