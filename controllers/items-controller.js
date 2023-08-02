const express = require("express");
const itemsController = express.Router();
const itemsData = require("../data/data.json");

itemsController.get("/", (req, res) => {
  try {
    res.status(200).json({ data: itemsData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

itemsController.get("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const item = itemsData.find((item) => item.id === id);
    if (!item) {
      res.status(404).json({ error: "Item not found" });
    } else {
      res.status(200).json({ data: item });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = itemsController;
