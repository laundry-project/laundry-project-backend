var express = require("express");
var router = express.Router();

const {
  addUser,
  getUser,
  deleteUser,
  updateUser,
  getUserById,
  login
} = require("./controller");

/* GET users listing. */
router.get("/", getUser);
router.get("/:id", getUserById);
router.post("/", addUser);
router.post("/login", login);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
