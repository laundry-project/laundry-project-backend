var express = require("express");
var router = express.Router();

const {
  addOrders,
  getOrders,
  getOrdersById,
  updateOrdersById,
  deleteOrdersById
} = require("./controller");

router.get("/", getOrders);
router.get("/:id", getOrdersById);
router.post("/", addOrders);
router.put("/:id", updateOrdersById);
router.delete("/:id", deleteOrdersById);

module.exports = router;
