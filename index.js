require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./database");

//database connection
connection();

//middlewares
app.use(express.json());
app.use(cors());

app.use("/auth", require("./routes/auth"));
app.use("/posts", require("./routes/posts"));

app.listen(8000, () => {
  console.log(`Server is running on ${port}...`);
});
