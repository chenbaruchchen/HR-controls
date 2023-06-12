const mongoose = require("mongoose");

const roomSchema = mongoose.Schema({
  // _id:mongoose.Schema.Types.ObjectId,
  array: { type: [], required: true },
  name: { type: String, required: true },
});

module.exports = mongoose.model("room", roomSchema);
