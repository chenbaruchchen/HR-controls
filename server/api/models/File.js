const mongoose = require("mongoose");

const fileSchema=mongoose.Schema({
    // _id:mongoose.Schema.Types.ObjectId,
    file:{type: [], required:false},
    roomId:{type: String, required:false},
    type:{type: String, required:false},

  
})

module.exports=mongoose.model('file',fileSchema)