const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const userControllers = require("../controllers/userControllers");

//login
router.post("http://localhost:3000/login", userControllers.login);

//signup
router.post("http://localhost:3000/signup", userControllers.signup);

module.exports = router;
