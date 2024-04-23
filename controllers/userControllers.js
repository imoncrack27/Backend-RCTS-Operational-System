const express = require("express");
const User = require("../models/userModel");
const { uniq } = require("lodash");

// Login controller
const login = async (req, res) => {
  res.json({ mssg: "login successful" });
};

// Signup controller
const signup = async (req, res) => {
  const { userName, email, phoneNumber, password, idNumber } = req.body;

  try {
    const user = await User.signup(
      userName,
      email,
      phoneNumber,
      password,
      idNumber
    );

    res.status(200).json({
      userName,
      email,
      phoneNumber,
      password,
      idNumber,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { login, signup };
