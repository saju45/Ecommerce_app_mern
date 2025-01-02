import express from "express";
import {
  addBlog,
  deleteBlog,
  getAllBlogs,
  getSingleBlog,
  updateBlog,
} from "../controller/blogController.js";
import { authMiddlware } from "../middleware/authMiddleware.js";
import upload from "../middleware/imageUpload.js";

const router = express();

//add blog
router.post(
  "/addBlog",
  authMiddlware.verify,
  authMiddlware.authorizeRole("admin"),
  upload.single("image"),
  addBlog
);

//fetch all blogs
router.get("/fetchAllBlogs", getAllBlogs);

//fetch single blog
router.get("/fetchSingleBlog/:id", getSingleBlog);

//update blog
router.put(
  "/updateBlog/:id",
  authMiddlware.verify,
  authMiddlware.authorizeRole("admin"),
  upload.single("image"),
  updateBlog
);

//delete blog,
router.delete("/deleteBlog/:id", deleteBlog);

export default router;
