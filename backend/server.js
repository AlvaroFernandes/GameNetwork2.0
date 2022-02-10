require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const { chats } = require("./Data/data");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

connectDB();
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Running");
});

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);

app.use(notFound);
app.use(errorHandler);

app.get("/api/chats", (req, res) => {
  res.send(chats);
});

app.get("/api/chats/:id", (req, res) => {
  const singleChat = chats.find((c) => c._id === req.params.id);
  res.send(singleChat);
});

const port = process.env.PORT;

app.listen(
  port,
  console.log(colors.white.underline(`server running on port: ${port}`))
);
