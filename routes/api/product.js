const express = require("express");
const router = express.Router();
const Product = require("../../models/productModel");

router.get("/", async (req, res) => {
  try {
    let products = await Product.find();
    if (products.length > 0) {
      res.status(200).send(products);
    } else {
      res.status(404).send({ message: "No records found" });
    }
  } catch (err) {
    res.status(404).send({ message: "There is some problem" });
  }
});

router.post("/", async (req, res) => {
    let  product = new Product(req.body);
    await product.save();
    return res.send(product);
  
});

router.get("/:id", async (req, res) => {
  let product = await Product.findById(req.params.id);
  if (product) {
    res.status(200).send(product);
  } else {
    res.status(404).send({ message: "This product does not exist" });
  }
});

module.exports = router;
