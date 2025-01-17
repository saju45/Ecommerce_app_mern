import Category from "../model/categoryModel.js";

//add category
export const addCategory = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res
        .status(400)
        .json({ error: "Please provide a name for the category" });
    }

    const categoryExist = await Category.findOne({ name });

    if (categoryExist) {
      return res.status(400).json({ error: `Category ${name} already exists` });
    }
    const newCategory = new Category({ name });

    await newCategory.save();

    res.status(201).json({
      message: `Category ${name} added successfully`,
      category: newCategory,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "There was an error in server side" });
  }
};

//get all categories
export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find({});

    res.status(200).json(categories);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "There was an error in server side" });
  }
};

//get category by id
export const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "Please provide a valid id" });
    }

    const category = await Category.findById(id);

    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    res.status(200).json(category);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "There was an error in server side" });
  }
};

//update category
export const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const updatedCategory = {};

    if (name) updatedCategory.name = name;
    if (!id) {
      return res.status(400).json({ error: "Please provide a valid id" });
    }
    if (!updatedCategory) {
      return res
        .status(400)
        .json({ error: "Please provide updated category details" });
    }
    const category = await Category.findByIdAndUpdate(id, updatedCategory, {
      new: true,
    });
    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }
    res.status(200).json({ message: `category update successfully`, category });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "There was an error in server side" });
  }
};

//delete category
export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: "Please provide a valid id" });
    }
    const category = await Category.findByIdAndDelete(id);
    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }
    res.status(200).json({ message: "Category deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "There was an error in server side" });
  }
};
