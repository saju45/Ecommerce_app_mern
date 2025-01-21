import express from "express";
import {
  addToCart,
  clearCart,
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

//clear cart
router.put(
  "/clearCart",
  authMiddlware.verify,
  authMiddlware.authorizeRole("user"),
  clearCart
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
