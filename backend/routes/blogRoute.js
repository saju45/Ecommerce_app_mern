import express from "express";
import {
  addBlog,
  addToFavourite,
  deleteBlog,
  getAllBlogs,
  getAllFavourtie,
  getSingleBlog,
  removedFromFavourite,
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

//add to favourite
router.put(
  "/addToFavourite/:blogid",
  authMiddlware.verify,
  authMiddlware.authorizeRole("user"),
  addToFavourite
);

router.put(
  "/removeFromFavourite/:blogid",
  authMiddlware.verify,
  authMiddlware.authorizeRole("user"),
  removedFromFavourite
);

router.get(
  "/getAllFavourtie",
  authMiddlware.verify,
  authMiddlware.authorizeRole("user"),
  getAllFavourtie
);

export default router;
