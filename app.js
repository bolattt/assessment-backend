const express = require("express");
const app = express();
const cors = require("cors");
const itemsController = require("./controllers/items-controller.js");

app.use(cors());
app.use(express.json());

// routes
app.use("/items", itemsController);

app.get("/", (req, res) => {
  res.status(200).json({ data: "Service is running!" });
});

module.exports = app;
