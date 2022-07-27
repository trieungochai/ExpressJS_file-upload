const { StatusCodes } = require("http-status-codes");
const Product = require("../models/Product.model");

const createProduct = async (req, res) => {
  console.log(req.body);
  const newProduct = await Product.create(req.body);

  return res.status(StatusCodes.CREATED).json({ newProduct });
};

const getAllProducts = async (req, res) => {
  return res.send("getAllProducts");
};
const getSingleProduct = async (req, res) => {
  return res.send("getSingleProduct");
};

const updateProduct = async (req, res) => {
  return res.send("updateProduct");
};

const deleteProduct = async (req, res) => {
  return res.send("deleteProduct");
};

module.exports = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
