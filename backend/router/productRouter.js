const express = require("express")
const { getAllProduct,productCreate } = require("../controller/productController")

const router = express.Router()

router.route("/products").get(getAllProduct)
router.route("/product/new").post(productCreate)

module.exports =router