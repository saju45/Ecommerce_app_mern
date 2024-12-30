import express from "express";
import {
  addProduct,
  getAllProducts,
  getNewArrivalsProducts,
  getProductByCategory,
  getProductById,
} from "../controller/productController.js";
import { authMiddlware } from "../middleware/authMiddleware.js";
import upload from "../middleware/imageUpload.js";

const router = express();

router.get("/fetchAllProduct", getAllProducts);
router.get("/fetchNewArrivals", getNewArrivalsProducts);
router.get("/:id", getProductById);
router.get("/fetchProductByCategory/:category", getProductByCategory);
router.post(
  "/addProduct",
  authMiddlware.verify,
  authMiddlware.authorizeRole("admin"),
  upload.array("images", 5),
  addProduct
);

export default router;
