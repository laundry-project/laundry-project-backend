var express = require("express");
var router = express.Router();

const {
  addUsers,
  getUsers,
  deleteUser,
  updateUsers,
  getUserById,
  login
} = require("./controller");

/* GET users listing. */
router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", addUsers);
router.post("/login", login);
router.put("/:id", updateUsers);
router.delete("/:id", deleteUser);

module.exports = router;
