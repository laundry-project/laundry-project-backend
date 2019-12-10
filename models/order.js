const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  date: String,
  user: String,
  amount: Number,
  price: Number,
  address: String,
  note: String
});

const order = mongoose.model("order", orderSchema);

module.exports = order;
