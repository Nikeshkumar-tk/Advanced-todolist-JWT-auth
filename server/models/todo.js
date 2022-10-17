const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
},{timestamps:true})


module.exports = mongoose.model("Todo", todoSchema)