const productModel = require("../models/productModel");

//Get Products API - /api/v1/products
exports.getProducts = async (req, res, next) => {
  const products = await productModel.find();

  res.json({
    success: true,
    products,
  });
};

//Get Products API - /api/v1/products/:id
exports.getSingleProduct = async (req, res, next) => {
  try {
    // console.log(req.params.id);
    const singleProduct = await productModel.findById(req.params.id);
    res.json({
      success: true,
      message: singleProduct,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "No product matches.",
    });
  }
};
