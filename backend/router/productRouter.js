const express = require("express");
const {
  getAllProduct,
  productCreate,
  updateProduct,
  deletePRoduct,
  singleProduct,
} = require("../controller/productController");

const router = express.Router();

router.route("/products").get(getAllProduct);
router.route("/product/new").post(productCreate);
router
  .route("/product/:id")
  .put(updateProduct)
  .delete(deletePRoduct)
  .get(singleProduct);

module.exports = router;
