const mongoose = require("mongoose");

const roomChatSchema = mongoose.Schema({
  // _id:mongoose.Schema.Types.ObjectId,
  messages: { type: [], required: true },
  roomId: { type: String, required: true },
});

module.exports = mongoose.model("roomChat", roomChatSchema);
