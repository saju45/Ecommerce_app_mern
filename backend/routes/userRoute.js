import express from "express";
import {
  changePassword,
  getUserInfo,
  login,
  logout,
  register,
  updateProfilePic,
} from "../controller/userController.js";
import { authMiddlware } from "../middleware/authMiddleware.js";
import upload from "../middleware/imageUpload.js";

const router = express();

router.post("/signup", register);
router.post("/login", login);
router.post("/logout", logout);

router.put(
  "/changePassword",
  authMiddlware.verify,
  authMiddlware.authorizeRole("user"),
  changePassword
);

router.put(
  "/updateProfilePic",
  authMiddlware.verify,
  authMiddlware.authorizeRole("user"),
  upload.single("image"),
  updateProfilePic
);

router.get(
  "/getUserInfo",
  authMiddlware.verify,
  authMiddlware.authorizeRole("user"),
  getUserInfo
);

export default router;
