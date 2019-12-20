const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  // user: String,
  service: [String],
  date: String,
  amount: Number,
  price: Number,
  note: String,
  address: String,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  pickUpTime: String
});

const order = mongoose.model("order", orderSchema);

module.exports = order;
