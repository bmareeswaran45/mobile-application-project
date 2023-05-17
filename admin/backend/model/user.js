const mongoose = require('mongoose')

//Schema

const Schema = mongoose.Schema;

//userSchema

const userSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    brand:{
        type:String,
        required:true,
    },
    model:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    image:{
        type:String,
    
    }
})

module.exports = mongoose.model('Mobile',userSchema)
//mobiles
//localhost:2000/mobiles