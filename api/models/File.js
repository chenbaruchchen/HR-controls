const mongoose = require("mongoose");

const fileSchema=mongoose.Schema({
    // _id:mongoose.Schema.Types.ObjectId,
    file:{type: [], required:false},
    roomId:{type: String, required:false},
    meta:{type: Object , required:false},

  
})

module.exports=mongoose.model('file',fileSchema)