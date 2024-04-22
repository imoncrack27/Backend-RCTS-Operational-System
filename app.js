require("dotenv").config();
const express = require("express");
// const cors = require("cors");
// const userRoutes = require("./routes/users");
// const authRoutes = require("./routes/auth");
const mongoose = require("mongoose");
const app = express();

// database URI
const dbURI =
  "mongodb+srv://auth_user:authuser@cluster0.cpu18q4.mongodb.net/database?retryWrites=true&w=majority&appName=Cluster0";

// database connection
mongoose
  .connect(dbURI)
  .then((result) => console.log("connected to db"))
  .catch((err) => console.log(err));

// middlewares
// app.use(express.json());
// app.use(cors());

// routes
// app.use("/api/users", userRoutes);
// app.use("/api/auth", authRoutes);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
