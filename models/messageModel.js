const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  date: String,
  members: [String],
  unRead: { type: Number, default: 1 },
  messages: Array,
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
