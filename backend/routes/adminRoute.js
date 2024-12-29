import express from "express";
import { adminLogin } from "../controller/adminController.js";

const router = express();

router.post("/login", adminLogin);

export default router;
