const mongoose = require("mongoose");

const fileSchema = mongoose.Schema({
  // _id:mongoose.Schema.Types.ObjectId,
  ans: { type: [], required: true },
  roomId: { type: String, required: true },
  meta: { type: {}, required: true },
});

module.exports = mongoose.model("file", fileSchema);
