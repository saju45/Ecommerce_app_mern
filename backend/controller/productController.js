import Product from "../model/productModel.js";

export const getAllProducts = async (req, res) => {
  const { search, category, minPrice, maxPrice, brand, region } = req.query;
  //pagination
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const total = await Product.countDocuments();
  const totalPages = Math.ceil(total / limit);
  let query = {};

  if (search) query.name = { $regex: search, $options: "i" };
  if (category) query.category = category;
  if (brand) query.brand = brand;
  //my database is shipping.rigions
  if (region) {
    if (Array.isArray(region)) {
      query["shipping.regions"] = { $in: region };
    } else {
      query["shipping.regions"] = region;
    }
  }

  if (minPrice || maxPrice) {
    query.price = {};
    if (minPrice) query.price.$gte = minPrice;
    if (maxPrice) query.price.$lte = maxPrice;
  }

  try {
    const products = await Product.find(query)
      .skip(startIndex)
      .limit(limit)
      .sort({ price: 1 });
    if (!products) {
      return res.status(404).json({ error: "Products not found" });
    }
    res.json({ products, currentPage: page, totalPages });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

//get all product with out pagination
export const getAllProductsNoPagination = async (req, res) => {
  try {
    const { search } = req.query;

    let query = {};

    if (search) query.name = { $regex: search, $options: "i" };
    const products = await Product.find(query);

    if (!products) {
      return res.status(404).json({ error: "Products not found" });
    }

    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

//get existing shippin rigions
export const getShippingRegions = async (req, res) => {
  try {
    // Fetch unique shipping regions from all products
    const regions = await Product.distinct("shipping.regions");
    res.status(200).json(regions);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch shipping regions", error });
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

//get brand name by category
export const getBrandNameByCategory = async (req, res) => {
  try {
    const { category } = req.query;

    if (!category) {
      const brand = await Product.distinct("brand").sort({ brand: 1 });
      return res.json(brand);
    }
    const brand = await Product.distinct("brand", { category });
    return res.json(brand);
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
    const { name, price, category, stock, brand, rating, description } =
      req.body;
    const sizes = JSON.parse(req.body.sizes);

    console.log("request body : ", req.body);

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

    console.log("sizes : ", sizes);

    if (!req.files) {
      return res.status(400).json({ error: "Please upload a product image" });
    }

    const newProduct = new Product({
      name,
      price,
      category,
      sizes,
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
    console.log("errror : ");

    console.log(error);
    console.log("Error adding product", error);
    res.status(500).json({ error: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { name, price, category, stock, sizes, brand, rating, description } =
      req.body;

    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "Please provide productId " });
    }

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

    const data = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!data) {
      return res.status(401).json({ error: "update failed" });
    }

    res
      .status(200)
      .json({ message: "product update successfully ", product: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "There was an error in server side" });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "pleease provide productid" });
    }

    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ error: "product not found" });
    }

    res.status(200).json({ message: `${product.name} deleted successfully` });
  } catch (error) {
    console.log(error);
    res.status(500).json("There was an error in server side ");
  }
};
