// import dotenv from "dotenv";
// import mongoose from "mongoose";

// dotenv.config();

// const connectDB = async () => {
//   console.log("test");

//   try {
//     console.log("test 2");

//     const reponse = await mongoose.connect(process.env.MONGODB_URI);
//     console.log("test 3");
//     console.log("MongoDB Connected...");
//   } catch (error) {
//     console.error("TEST4 ");
//     console.error(`Error connecting to MongoDB: ${error.message}`);
//   }
// };

// export default connectDB;

import mongoose from "mongoose";

// Connect to MongoDB
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("database connected");
  } catch (error) {
    console.error("Error connecting to database", error);
  }
};

export default connect;
