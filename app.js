require("dotenv").config();
const express = require("express");
// const cors = require("cors");
// const userRoutes = require("./routes/users");
// const authRoutes = require("./routes/auth");
const mongoose = require("mongoose");
const User = require("./models/user");
const app = express();

//JWT secret key
process.env.JWT_SECRET =
  "058c77a13ababdcf25863e741ec859b11850a39b598a65934aa895477a5ed007";

// database URI
const dbURI =
  "mongodb+srv://auth_user:authuser@cluster0.cpu18q4.mongodb.net/database?retryWrites=true&w=majority&appName=Cluster0";

// database connection
mongoose
  .connect(dbURI)
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

app.get("/login", (req, res) => {
  const User = new User({
    userName: "test",
    email: "test123@gmail.com",
    password: "password",
    confirmPassword: "password",
    contactNumber: 1234567890,
    idNumber: "1234567890",
  });
});

// middlewares
// app.use(express.json());
// app.use(cors());

// routes
// app.use("/api/users", userRoutes);
// app.use("/api/auth", authRoutes);
