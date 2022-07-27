const { StatusCodes } = require("http-status-codes");

const createProduct = async (req, res) => {
  return res.send("createProduct");
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
