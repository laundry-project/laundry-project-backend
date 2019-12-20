const express = require("express");
const router = express.Router();

const { getLaundry, addLaundry } = require("./controller");

router.get("/", getLaundry);
router.post("/", addLaundry);

module.exports = router;
