const express = require("express");
const router = express.Router();
const { Message } = require("../models");

router.post("/", async (req, res) => {
  const msg = req.body;
  await Message.create(msg);
  console.log(msg);
  res.json(msg);
});

router.get("/", async (req, res) => {
  const listOfPosts = await Message.findAll();
  console.log(listOfPosts);
  res.json(listOfPosts);
});

module.exports = router;
