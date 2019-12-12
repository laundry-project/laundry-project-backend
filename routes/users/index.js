var express = require("express");
var router = express.Router();

const {
  addUsers,
  getUsers,
  deleteUsers,
  updateUsers,
  getUsersById
} = require("./controller");

/* GET users listing. */
router.post("/", addUsers);
router.get("/", getUsers);
router.get("/:id", getUsersById);
router.put("/:id", updateUsers);
router.delete("/:id", deleteUsers);

module.exports = router;
