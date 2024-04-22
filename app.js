require("dotenv").config();
const express = require("express");
const cors = require("cors");
// const router = require("./routes/login");
// const router = require("./routes/signup");
const mongoose = require("mongoose");
// const User = require("./models/user");
const app = express();

//JWT secret key
process.env.JWT_SECRET = "secret-key";

// database URI
const dbURI =
  "mongodb+srv://auth_user:authuser@cluster0.cpu18q4.mongodb.net/database?retryWrites=true&w=majority&appName=Cluster0";

// database connection
mongoose
  .connect(dbURI)
  .then((result) => app.listen(8000))
  .catch((err) => console.log(err));

// Allow requests from specific origin
const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

//middlewares;
app.use(express.json());
app.use(cors());

// routes;
// app.use("/routes/login", router);
// app.use("/routes/signup", router);
