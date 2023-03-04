const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  description: Array,

  price: Number,

  customerId: String,

  customer: String,

  salesId: String,

  status: {
    type: Boolean,
    default: false,
  },

  transaction: {
    type: Boolean,
    default: false,
  },

  day: String,

  time: String,

  formatedDate: String,
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
