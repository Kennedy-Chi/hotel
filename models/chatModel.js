const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  date: String,
  members: [String],
  unRead: { type: Number, default: 1 },
  messages: {
    type: Array,
  },
});

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;
