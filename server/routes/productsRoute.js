const express = require("express");

const {
  getProducts,
  getSingleProduct,
} = require("../controller/productsController");

const router = express.Router();

router.route("/products").get(getProducts);
router.route("/products/:id").get(getSingleProduct);

module.exports = router;
