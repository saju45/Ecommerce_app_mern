// backend/routes/email.js
import dotenv from "dotenv";
import express from "express";
import { sendEmail } from "../controller/emailController.js";
dotenv.config();

const router = express.Router();

// send an email
router.post("/sendEmail", sendEmail);

export default router;
