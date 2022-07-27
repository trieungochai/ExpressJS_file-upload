const { StatusCodes } = require("http-status-codes");
const path = require("path");

const uploadProductImage = async (req, res) => {
  // console.log(req.files);
  const productImage = req.files.image;
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
