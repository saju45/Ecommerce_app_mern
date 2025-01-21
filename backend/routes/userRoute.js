import express from "express";
import {
  changePassword,
  deleteUser,
  getUserInfo,
  getUsers,
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

router.get(
  "/getAllUser",
  authMiddlware.verify,
  authMiddlware.authorizeRole("admin"),
  getUsers
);

router.delete(
  "/deleteUser/:userId",
  authMiddlware.verify,
  authMiddlware.authorizeRole("admin"),
  deleteUser
);

export default router;
