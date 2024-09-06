import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

//@desc Fetch all products
//@route GET /api/products
//@access Public

const getAllProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

//@desc Fetch product by ID
//@route GET /api/products/:id
//@access Public

const getProductById = asyncHandler(async (req, res) => {
  // const id = req.params.id;
  // const product = products.find((p) => p._id === id); // w/o db connection
  const product = await Product.findById(req.params.id);
  if (product) {
    return res.json(product);
  } else {
    res.status(404);
    throw new Error("Resource not Found");
  }
});

export { getAllProducts, getProductById };
