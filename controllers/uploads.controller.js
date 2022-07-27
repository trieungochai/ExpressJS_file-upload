const { StatusCodes } = require("http-status-codes");
const path = require("path");
const { BadRequestError } = require("../errors");

const uploadProductImage = async (req, res) => {
  // console.log(req.files);
  // check if file exists
  // check format
  // check size
  if (!req.files) {
    throw new BadRequestError("No file uploaded");
  }

  const productImage = req.files.image;
  if (productImage.mimetype.startsWith("image")) {
    throw new BadRequestError("Please upload image");
  }

  const maxSize = 1024 * 1024;
  if (productImage.size > maxSize) {
    throw new BadRequestError("Please upload image smaller than 1KB");
  }

  const imagePath = path.join(
    __dirname,
    "../public/uploads/" + `${productImage.name}`
  );

  await productImage.mv(imagePath);

  return res
    .status(StatusCodes.OK)
    .json({ image: { src: `/public/uploads/${productImage.name}` } });
};

module.exports = uploadProductImage;
