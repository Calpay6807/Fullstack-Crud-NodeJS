import express from "express";
import { User } from "../models/userModels.js";
import bcrpyt from "bcrypt";

const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    console.log(req.body);
    const { fullname, password, phoneNumber, email } = req.body;

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "User already exist" });
    }
    const hashedPassword = await bcrpyt.hash(password, 10);
    const createdUser = await User.create({
      fullname,
      email,
      password: hashedPassword,
      phoneNumber,
    });
    return res.status(200).json(createdUser);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
});

router.post("/signin", async (req, res) => {
  try {
    console.log(req.body);
    const { password, email } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User Does Not exist" });
    }
    const isPasswordCorrect = await bcrpyt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "wrong Password" });
    }
    return res.status(200).json({ user, message: "Authentication successful" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
});

export default router;
