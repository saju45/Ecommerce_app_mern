import express from "express";
import {
  addToCart,
  getCartData,
  removeFromCart,
  updateCartQuantity,
} from "../controller/cartController.js";
import { authMiddlware } from "../middleware/authMiddleware.js";

const router = express();

router.put(
  "/add-to-cart",
  authMiddlware.verify,
  authMiddlware.authorizeRole("user"),
  addToCart
);

router.put(
  "/removeCartData",
  authMiddlware.verify,
  authMiddlware.authorizeRole("user"),
  removeFromCart
);

router.put(
  "/updateCart",
  authMiddlware.verify,
  authMiddlware.authorizeRole("user"),
  updateCartQuantity
);

router.get(
  "/getCartData",
  authMiddlware.verify,
  authMiddlware.authorizeRole("user"),
  getCartData
);

export default router;
