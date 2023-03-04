const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  image: String,

  name: {
    type: String,
    unique: [true, "An item with this name already exist"],
  },

  price: Number,

  category: String,

  type: String,

  buyingPrice: {
    type: Number,
    default: 0,
  },

  status: {
    type: String,
    default: "Exhausted",
    enum: ["Good", "Warning", "Danger", "Exhausted"],
  },

  remaining: {
    type: [Number],
    default: [0, 0],
  },

  availability: {
    type: Boolean,
    default: false,
  },

  available: [Object],

  sellingUnit: String,

  storeInputUnit: String,

  storeOutputUnit: String,

  storeOutputPerInput: {
    type: Number,
    default: 0,
  },

  salesPoint: Array,
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
