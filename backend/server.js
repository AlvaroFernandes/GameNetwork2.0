require("dotenv").config();
const express = require("express");
const { chats } = require("./Data/data");

const app = express();

app.get("/", (req, res) => {
  res.send("API Running");
});

app.get("/api/chats", (req, res) => {
  res.send(chats);
});

app.get("/api/chats/:id", (req, res) => {
  const singleChat = chats.find((c) => c._id === req.params.id);
  res.send(singleChat);
});

const port = process.env.PORT;

app.listen(port, console.log(`server running on port: ${port}`));
