const ProductModel = require("../models/product.model");
exports.productCreate = async (req, res) => {
  const product = await ProductModel.create(req.body);
  return res
    .status(200)
    .json({ message: "create a product...", success: true, product });
};
exports.getAllProduct = async (req, res) => {
  // return
};
