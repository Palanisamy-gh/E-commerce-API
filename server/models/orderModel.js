const mongoose = require("mongoose");

const ordersScheme = new mongoose.Schema({
  cartItems: Array,
  amount: String,
  status: String,
  createdAt: Date,
});

const orderModel = mongoose.model("Order", ordersScheme);

module.exports = orderModel;
