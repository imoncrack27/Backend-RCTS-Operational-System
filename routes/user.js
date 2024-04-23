const express = require("express");

const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const { login, signup } = require("../controllers/userControllers");
const router = express.Router();

//login
router.post("/login", login);

//signup
router.post("/signup", signup);

module.exports = router;
