const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: String,
  address: String,
  date: String,
  amount: Number,
  price: Number,
  note: String
});

const order = mongoose.model("order", orderSchema);

module.exports = order;