import express from "express";
import { addProduct } from "../controller/productController.js";
import { authMiddlware } from "../middleware/authMiddleware.js";
import upload from "../middleware/imageUpload.js";

const router = express();

router.post(
  "/addProduct",
  authMiddlware.verify,
  authMiddlware.authorizeRole("admin"),
  upload.array("images", 5),
  addProduct
);

export default router;
