import nodemailer from "nodemailer";
import Order from "../model/orderModel.js";
import Product from "../model/productModel.js";
import User from "../model/userModel.js";

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const addOrder = async (req, res) => {
  try {
    const {
      products,
      shippingAddress,
      paymentMethod,
      price,
      shippingPrice,
      totalPrice,
    } = req.body;
    //check if order data exists
    if (
      !products ||
      !shippingAddress ||
      !paymentMethod ||
      !price ||
      !shippingPrice ||
      !totalPrice
    ) {
      return res.status(400).json({ error: "Please provide order data" });
    }
    //check if user exists
    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }
    //const prepare order data
    const orderData = {
      user: req.user._id,
      products: products,
      shippingAddress: shippingAddress,
      price: price,
      shippingPrice: shippingPrice,
      totalPrice: totalPrice,
      isPaid: false,
      paymentMethod: paymentMethod,
      shippingAddress: shippingAddress,
      itemsShipped: false,
      delivered: false,
    };
    // user.orders.push(newOrder._id);
    const newOrder = new Order(orderData);

    if (!newOrder) {
      return res.status(400).json({ error: "Order creation failed" });
    }

    //update product stock
    products.forEach(async (product) => {
      const updatedProduct = await Product.findByIdAndUpdate(
        product.productId,
        { $inc: { stock: -product.quantity } },
        { new: true }
      );
      if (!updatedProduct) {
        return res.status(400).json({ error: "Product stock update failed" });
      }
    });

    //update user details
    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      { $push: { orders: newOrder._id } },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(400).json({ error: "User order update failed" });
    }

    const mailOptions = {
      from: "ecommerce_app_admin@gmail.com",
      to: "shanawajsaju@gmail.com",
      subject: "New Order",
      text: `New order has been placed by ${user.name}`,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: ", info.response);
      }
    });

    transporter.sendMail(
      {
        from: "ecommerce_app_admin@gmail.com",
        to: user.email,
        subject: "Order Confirmation",
        text: `Your order has been confirmed`,
      },
      (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: ", info.response);
        }
      }
    );

    //save order to db
    await newOrder.save();
    res.status(201).json({
      success: true,
      message: "Order placed successfully",
      order: newOrder,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json("There was an error in server side");
  }
};

export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({}).populate("user");
    res.status(200).json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).json("There was an error in server side");
  }
};

//get recent 5 order
export const getRecentOrders = async (req, res) => {
  try {
    const recentOrders = await Order.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .populate("user");
    res.status(200).json(recentOrders);
  } catch (error) {
    console.log(error);
    res.status(500).json("There was an error in server side");
  }
};

export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }
    res.status(200).json(order);
  } catch (error) {
    console.log(error);
    res.status(500).json("There was an error in server side");
  }
};

export const getOrdersByUserId = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.params.id });
    if (!orders) {
      return res.status(404).json({ error: "Orders not found" });
    }
    res.status(200).json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).json("There was an error in server side");
  }
};
//update status
export const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;
    if (!status) {
      return res.status(400).json({ error: "Please provide status" });
    }
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      { $set: { status } },
      { new: true }
    );
    if (!updatedOrder) {
      return res.status(404).json({ error: "Order not found" });
    }
    //send response with message
    res.status(200).json({
      success: true,
      message: `Order status updated to ${status}`,
      order: updatedOrder,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json("There was an error in server side");
  }
};

export const deleteOrder = async (req, res) => {
  try {
    const deletedOrder = await Order.findByIdAndDelete(req.params.id);
    if (!deletedOrder) {
      return res.status(404).json({ error: "Order not found" });
    }
    res.status(200).json(deletedOrder);
  } catch (error) {
    console.log(error);
    res.status(500).json("There was an error in server side");
  }
};
