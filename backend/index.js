import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import connect from "./connection/connection.js";
import adminRouter from "./routes/adminRoute.js";
import blogRouter from "./routes/blogRoute.js";
import cartRouter from "./routes/cartRoute.js";
import productRouter from "./routes/productRoute.js";
import userRouter from "./routes/userRoute.js";

const app = express();

// Middleware
dotenv.config();

app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

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
app.use("/blog", blogRouter);

app.listen(process.env.PORT, () => {
  console.log(`App is listening on port : ${process.env.PORT}`);
});
