var express = require("express");
var router = express.Router();

const {
  addUsers,
  getUsers,
  deleteUser,
  updateUsers,
  getUserById,
  login,
  logout,
  register
} = require("./controller");

/* GET users listing. */
router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", addUsers);
router.put("/:id", updateUsers);
router.delete("/:id", deleteUser);
router.post("/login", login);
router.get("/logout", logout);
router.post("/register", register);

module.exports = router;
