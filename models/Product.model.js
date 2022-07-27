const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide product name"],
  },
  price: {
    type: Number,
    required: [true, "Please provide product price"],
  },
  image: {
    type: String,
    required: [true, "Please provide product image"],
  },
});

module.exports = mongoose.model("Product", ProductSchema);
