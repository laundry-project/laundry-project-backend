const mongoose = require("mongoose");

const servicesSchema = new mongoose.Schema({
  service: String,
  price: Number
});

const services = mongoose.model("services", servicesSchema);

module.exports = services;
