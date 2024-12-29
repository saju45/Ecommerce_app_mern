import Product from "../model/productModel.js";

// Add new product
export const addProduct = async (req, res) => {
  try {
    const { name, price, category, stock, brand, rating, description, images } =
      req.body;

    if (
      !name ||
      !price ||
      !category ||
      !stock ||
      !brand ||
      !rating ||
      !description
    ) {
      return res.status(400).json({ error: "All fields are required" });
    }

    if (!req.files) {
      return res.status(400).json({ error: "Please upload a product image" });
    }

    const newProduct = new Product({
      name,
      price,
      category,
      stock,
      brand,
      rating,
      description,
      images: req.files.map((file) => file.path),
    });

    await newProduct.save();
    res
      .status(201)
      .json({ message: "product add successfully", product: newProduct });
  } catch (error) {
    console.error("Error adding product", error);
    res.status(500).json({ error: error.message });
  }
};
