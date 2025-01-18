import express from "express";
import {
  addProduct,
  deleteProduct,
  getAllProducts,
  getAllProductsNoPagination,
  getNewArrivalsProducts,
  getProductByCategory,
  getProductById,
  updateProduct,
} from "../controller/productController.js";
import { authMiddlware } from "../middleware/authMiddleware.js";
import upload from "../middleware/imageUpload.js";

const router = express();

router.get("/fetchAllProduct", getAllProducts);
router.get("/allProducts", getAllProductsNoPagination);
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

router.put(
  "/updateProduct/:id",
  authMiddlware.verify,
  authMiddlware.authorizeRole("admin"),
  updateProduct
);

router.delete(
  "/:id",
  authMiddlware.verify,
  authMiddlware.authorizeRole("admin"),
  deleteProduct
);

export default router;
