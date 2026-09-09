const express = require("express");
const router = express.Router();
const products = require("../data/data")

router.get("/",products.getProducts)

router.get("/:id",products.getProductID)

router.post("/",products.addProduct )

router.put("/:id",products.updateProduct)

router.delete("/:id",products.deleteProduct)

module.exports=router