import express from "express";
import {
  addCategory,
  deleteCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
} from "../controller/categoryController.js";
import { authMiddlware } from "../middleware/authMiddleware.js";

const router = express();

//get all categories
router.get("/getAllCategories", getAllCategories);

//get category by id
router.get("/getCategory/:id", getCategoryById);

//add new category
router.post(
  "/addCategory",
  authMiddlware.verify,
  authMiddlware.authorizeRole("admin"),
  addCategory
);

//update categories
router.put("/updateCategories/:id", updateCategory);

//delete categories
router.delete("/deleteCategory/:id", deleteCategory);

export default router;
