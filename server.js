const express = require("express");
const app = express();
var cors = require("cors");
const http = require("http");
var server = require("http").Server();
var io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});
app.io = io;
// io.set("origins", "*:*");

app.post("/configurator", (req, res) => {
  req.app.io.emit("cartevent", { success: "true" });
  res.send("Hello World!");
});

server.listen(3000, () => {
  console.log("Listening on 3000.");
});
