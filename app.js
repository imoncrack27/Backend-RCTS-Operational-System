require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");

const app = express();

//middlewares;
app.use(express.json());
app.use(cors());

// routes
app.use("/api/user", userRoutes);

// database connection
mongoose
  .connect(process.env.DB)
  .then((result) =>
    app.listen(process.env.PORT, () =>
      console.log("listening on port", process.env.PORT)
    )
  )
  .catch((err) => console.log(err));
