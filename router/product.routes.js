const { Router } = require("express");

const {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} = require("../controller/product.controller");

const router = Router();

router.post("/", createProduct);
router.get("/", getProducts);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
