const mongoose = require("mongoose");

const wifiSchema = new mongoose.Schema({
  username: String,
  password: String,
  roomNumber: {
    type: String,
    default: "000",
  },
  dateCreated: {
    type: Date,
    default: new Date(),
  },
});

const Wifi = mongoose.model("Wifi", wifiSchema);

module.exports = Wifi;
