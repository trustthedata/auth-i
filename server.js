const express = require("express");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/LoginDB").then(() => {
  console.log("Connected to the database");
});

const server = express();

server.use(express.json());

server.get("/", (req, res) => res.send("API is running..."));

server.listen(5000, () => {
  console.log("Server is listening at port 5000");
});