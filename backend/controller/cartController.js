import Cart from "../model/cartModel.js";
import User from "../model/userModel.js";

export const addToCart = async (req, res) => {
  try {
    const { productid, quantity, price, name, image } = req.body;

    if (!productid || !quantity || !price || !name || !image) {
      return res
        .status(400)
        .json({ error: "Please Provide productId quantity price name image" });
    }

    const userData = await User.findById(req.user._id);

    if (!userData) {
      return res
        .status(400)
        .json({ error: "User not found, please provide valid userId" });
    }

    const cartData = {
      productId: productid,
      quantity,
      price,
      name,
      image,
    };

    let cart = await Cart.findOne({ userId: req.user._id });

    if (!cart) {
      cart = new Cart({ userId: req.user._id, items: [] });
    }

    const existingItem = cart.items.find((item) =>
      item.productId.equals(productid)
    );

    if (existingItem) {
      return res.status(400).json({ error: "product is already cart" });
    }

    cart.items.push(cartData);

    await cart.save();

    res.status(200).json({ message: "Cart added successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json("There was an server side error");
  }
};

export const updateCartQuantity = async (req, res) => {
  try {
    const { productid, quantity } = req.body;

    if (!productid || !quantity) {
      return res
        .status(400)
        .json({ error: "Please Provide productId and quantity " });
    }

    if (!req.user) {
      return res
        .status(400)
        .json({ error: "User not found, please provide valid userId" });
    }

    const userData = await User.findById(req.user._id);

    if (!userData) {
      return res
        .status(400)
        .json({ error: "User not found, please provide valid userId" });
    }

    const cart = await Cart.findOneAndUpdate(
      { userId: req.user._id, "items.productId": productid },
      { $set: { "items.$.quantity": quantity } },
      { new: true }
    );

    if (!cart) {
      return res.status(404).json({ error: "Cart or item not found" });
    }
    res
      .status(200)
      .json({ message: "Cart Quantity update successfully", cart });
  } catch (error) {
    console.log(error);
    res.status(500).json("There was an server side error");
  }
};

export const removeFromCart = async (req, res) => {
  try {
    const { productid } = req.headers;

    let cart = await Cart.findOne({ userId: req.user._id });

    if (!cart) {
      res.status(400).json({ error: "cart not found" });
    }

    const existingItem = cart.items.find((item) =>
      item.productId.equals(productid)
    );

    if (!existingItem) {
      return res
        .status(401)
        .json({ error: "this product not available in cart" });
    }

    let result;

    if (cart.items.length > 1) {
      result = await Cart.updateOne(
        { userId: req.user._id },
        { $pull: { items: { productId: productid } } }
      );
    } else {
      result = await Cart.findOneAndDelete({ userId: req.user._id });
    }

    res.status(200).json({ message: "item remove from cart" });
  } catch (error) {
    console.log(error);
    res.status(500).json("There was an server side error");
  }
};

export const getCartData = async (req, res) => {
  try {
    const data = await Cart.findOne({ userId: req.user._id });

    if (!data) {
      return res.status(400).json({ error: "Data not found" });
    }
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};
