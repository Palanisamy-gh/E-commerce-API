const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: String,
  price: String,
  description: String,
  rating: String,
  images: [
    {
      image: String,
    },
  ],
  category: String,
  stock: Number,
  seller: String,
  createdAT: Date,
});

const productModel = mongoose.model("Product", productSchema);

module.exports = productModel;
