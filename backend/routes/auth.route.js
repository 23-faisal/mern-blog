import { Router } from "express";
import { User } from "../models/User.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";

export const authRouter = Router();

const saltRounds = 10;
const jwtSecret = process.env.JWT_SECRET;
// Register
authRouter.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if user already exists
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({
        success: false,
        message: "User already exists!",
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create a new user instance
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    // Save the new user
    await newUser.save();

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
    });
  } catch (err) {
    console.error("Error registering user:", err);
    return res.status(500).json({
      success: false,
      message: "Error registering user",
      error: err.message,
    });
  }
});

// Login

authRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    // If there is any user
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Invalid User!",
      });
    }

    // compare password

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(404).json({
        success: false,
        message: "Invalid Password",
      });
    }

    // jwt token

    const token = jwt.sign({ id: user._id }, jwtSecret, { expiresIn: "2d" });

    res.cookie("auth_token", token, {
      httpOnly: true, // Accessible only by the web server
      secure: true, // Set to true if using HTTPS
      sameSite: "strict", // Prevent CSRF attacks
      maxAge: 3600000000000, // Cookie expiration time in milliseconds
    });

    // Valid user

    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      user: user.username,
      token: `Bearer ${token}`,
    });
    res.cookie("auth_token", token, {
      httpOnly: true, // Accessible only by the web server
      secure: true, // Set to true if using HTTPS
      sameSite: "strict", // Prevent CSRF attacks
      maxAge: 3600000, // Cookie expiration time in milliseconds
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// Logout

authRouter.get("/logout", async (req, res) => {
  try {
    res
      .clearCookie("auth_token", { sameSite: "none", secure: true })
      .status(200)
      .json({
        success: true,
        message: "Logged out successfully",
      });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});
