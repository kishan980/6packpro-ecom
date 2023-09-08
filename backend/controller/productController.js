const productModel = require("../models/product.model");
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsycnError = require("../middleware/catchAsycnErrors");
const ApiFeature = require("../utils/ApiFeature");

exports.productCreate = catchAsycnError(async (req, res) => {
  const product = await productModel.create(req.body);
  return res
    .status(201)
    .json({ message: "create a product...", success: true, product });
});
exports.getAllProduct = catchAsycnError(async (req, res) => {
  const resultPage = 5;
  const productCount = await productModel.countDocuments()
  const apiFeature = new ApiFeature(productModel.find(), req.query)
    .search()
    .filter().pagination(resultPage);
  const products = await apiFeature.query;
  return res.status(200).json({ success: true, products,totalProduct:productCount });
});

exports.updateProduct = catchAsycnError(async (req, res) => {
  let product = await productModel.findById(req.params.id);
  if (!product) {
    return res.status(200).json({
      success: false,
      message: "product not found",
    });
  }

  //   product = await productModel.findByIdAndUpdate(
  //     req.params.id,
  //     { $set: req.body },
  //     { new: true }
  //   );
  product = await productModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  return res.status(200).json({
    success: true,
    product,
  });
});

exports.deletePRoduct = async (req, res) => {
  const product = await productModel.findById(req.params.id);
  if (!product) {
    return res.status(500).json({
      success: false,
      message: "product not found",
    });
  }

  await productModel.findByIdAndDelete(req.params.id);
  return res.status(200).json({
    success: true,
    message: "product delete successfully",
  });
};

exports.singleProduct = catchAsycnError(async (req, res, next) => {
  let product = await productModel.findById(req.params.id);

  if (!product) {
    // return res.status(500).json({
    //     success:false,
    //     message:"not found product"
    // })
    return next(new ErrorHandler("product not found", 404));
  }
  return res.status(200).json({
    success: true,
    product,
  });
});
