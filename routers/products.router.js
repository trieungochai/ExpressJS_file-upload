const express = require("express");
const {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/products.controller");
const uploadProductImage = require("../controllers/uploads.controller");

const productRouter = express.Router();

productRouter.route("/").post(createProduct).get(getAllProducts);
productRouter
  .route("/:id")
  .get(getSingleProduct)
  .patch(updateProduct)
  .delete(deleteProduct);

productRouter.route("/uploads").post(uploadProductImage);

module.exports = productRouter;
