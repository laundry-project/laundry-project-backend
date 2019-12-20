require("dotenv").config();

const mongoose = require("mongoose");
const node_env = process.env.NODE_ENV || "development";
const MONGODB_URI =
  node_env === "development"
    ? "mongodb://localhost:27017/laundry"
    : process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

const db = mongoose.connection;

module.exports = db;
