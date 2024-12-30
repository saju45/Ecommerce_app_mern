import Product from "../model/productModel.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

//get newarrivals product
export const getNewArrivalsProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 }).limit(4);

    if (!products) {
      return res.status(404).json({ error: "Products not found" });
    }

    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const searchProducts = async (req, res) => {
  try {
    const { name } = req.query;

    const products = await Product.find({
      name: { $regex: name, $options: "i" },
    });

    if (!products) {
      return res.status(404).json({ error: "Products not found" });
    }

    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const getProductByCategory = async (req, res) => {
  try {
    const products = await Product.find({ category: req.params.category });

    if (!products) {
      return res.status(404).json({ error: "Products not found" });
    }

    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Add new product
export const addProduct = async (req, res) => {
  try {
    const {
      name,
      price,
      category,
      stock,
      sizes,
      brand,
      rating,
      description,
      images,
    } = req.body;

    if (
      !name ||
      !price ||
      !category ||
      !stock ||
      !sizes ||
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
      sizes: JSON.parse(sizes),
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
