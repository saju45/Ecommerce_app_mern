import express from "express";
import {
  addOrder,
  deleteOrder,
  getAllOrders,
  getOrdersByUserId,
  getRecentOrders,
  updateOrderStatus,
} from "../controller/orderController.js";
import { authMiddlware } from "../middleware/authMiddleware.js";

const router = express();

//get all orders
router.get("/getAllOrders", authMiddlware.verify, getAllOrders);

router.get(
  "/getRecentOrders",
  authMiddlware.verify,
  authMiddlware.authorizeRole("admin"),
  getRecentOrders
);
//get orderByUserId
router.get(
  "/getOrdersByUserId/:id",
  authMiddlware.verify,
  authMiddlware.authorizeRole("user"),
  getOrdersByUserId
);

//add Order
router.post(
  "/addOrder",
  authMiddlware.verify,
  authMiddlware.authorizeRole("user"),
  addOrder
);

//update order
router.put(
  "/updateOrderStatus/:id",
  authMiddlware.verify,
  authMiddlware.authorizeRole("admin"),
  updateOrderStatus
);

//delete order
router.delete(
  "/deleteOrder/:id",
  authMiddlware.verify,
  authMiddlware.authorizeRole("admin"),
  deleteOrder
);

export default router;
