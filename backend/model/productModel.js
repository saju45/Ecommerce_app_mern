import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    sizes: [],
    stock: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    brand: {
      type: String,
      required: true,
    },
    shipping: {
      available: { type: Boolean, default: true },
      regions: [String],
      cost: { type: Number, default: 0 },
    },
    images: [],

    reviews: [
      {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        comment: { type: String, required: true },
        rating: { type: Number, required: true, min: 0, max: 5 },
      },
    ],
  },

  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
