const express = require("express");
const router = express.Router();

const { createOrder } = require("../controller/orderController");

router.route("/orders").post(createOrder);

module.exports = router;
