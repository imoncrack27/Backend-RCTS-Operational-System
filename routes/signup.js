const express = require("express");
const router = express.Router();
const User = require("../models/user.model");

router.post("/signup", async (req, res) => {
  try {
    const {
      username,
      email,
      phoneNumber,
      password,
      idNumber,
      termsAccepted,
      privacyPolicyAccepted,
    } = req.body;

    // Create new user
    const newUser = new User({
      username,
      email,
      phoneNumber,
      password,
      idNumber,
      termsAccepted,
      privacyPolicyAccepted,
    });
    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
