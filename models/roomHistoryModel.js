const mongoose = require("mongoose");

const roomHistorySchema = new mongoose.Schema({
  number: {
    type: String,
    required: [true, "A room must have a number"],
  },

  name: {
    type: String,
    required: [true, "A room must have a name"],
  },

  price: {
    type: Number,
    required: [true, "A room must have a price"],
  },

  username: String,

  userId: String,

  checkIn: Date,

  checkOut: Date,

  transaction: Boolean,
});

const RoomHistory = mongoose.model("RoomHistory", roomHistorySchema);

module.exports = RoomHistory;
