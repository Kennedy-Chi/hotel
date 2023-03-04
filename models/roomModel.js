const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  roomNumber: {
    type: String,
    required: [true, "A room must have a number"],
    unique: [true, "A room with the room number already exist"],
  },
  roomName: {
    type: String,
    required: [true, "A room must have a name"],
  },
  roomPrice: {
    type: String,
    required: [true, "A room must have a price"],
  },

  roomFacilities: {
    type: Array,
  },

  roomServices: {
    type: Array,
  },

  roomDetails: {
    type: String,
  },

  roomPictures: {
    type: Array,
  },

  roomVideo: {
    type: String,
  },

  wifiPassword: {
    type: String,
  },

  bookingDetails: {
    type: Object,
  },

  isBooked: {
    type: Boolean,
    default: false,
  },
});

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;
