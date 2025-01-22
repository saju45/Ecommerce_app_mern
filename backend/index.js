import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import connect from "./connection/connection.js";
import adminRouter from "./routes/adminRoute.js";
import blogRouter from "./routes/blogRoute.js";
import cartRouter from "./routes/cartRoute.js";
import categoryRouter from "./routes/categoryRoute.js";
import emailRouter from "./routes/emailRouter.js";
import orderRouter from "./routes/orderRoute.js";
import productRouter from "./routes/productRoute.js";
import userRouter from "./routes/userRoute.js";

const app = express();

// Middleware
dotenv.config();

app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//cors middleware
app.use(
  cors({
    origin: "https://ecommerce-app-frontend-mqhg.onrender.com",
    credentials: true,
  })
);

app.use((err, req, res, next) => {
  console.error("Server Error:", err.message);
  res.status(500).json({ error: "An unexpected error occurred." });
});

// Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Connect to MongoDB
await connect();

app.use("/users", userRouter);
app.use("/admin", adminRouter);
app.use("/products", productRouter);
app.use("/cart", cartRouter);
app.use("/orders", orderRouter);
app.use("/blog", blogRouter);
app.use("/categories", categoryRouter);
app.use("/email", emailRouter);

app.listen(process.env.PORT, () => {
  console.log(`App is listening on port : ${process.env.PORT}`);
});
