const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const laundrySchema = new Schema({
  imagePath: String,
  name: String,
  address: String,
  telephone: String
});
const Laundry = mongoose.model("Laundry", laundrySchema);

module.exports = Laundry;
