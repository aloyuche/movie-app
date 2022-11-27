const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

const userAuth = require("./routes/auth");

const cors = require("cors");

app.use(cors());

app.use("/api/auth", userAuth);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Server connected to MongoDb"))
  .catch((error) => console.log(error));
app.get("/", (req, res) => {
  return res.json("Hey ...! How are you");
});

app.listen(4000, () => console.log("Server is running on port 4000"));
