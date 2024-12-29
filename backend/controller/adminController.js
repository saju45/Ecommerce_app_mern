import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../model/userModel.js";
export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    //check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (user.role !== "admin") {
      return res.status(403).json({ error: "Unauthorized access" });
    }

    //check if password is correct
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    //generate a token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "30d" }
    );

    res.cookie(
      "jwt",
      token,
      { httpOnly: true, expires: new Date(Date.now() + 3600000 * 24 * 30) } // 30 days expiry
    );

    res.json({ message: "Admin logged in successfully", user, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
