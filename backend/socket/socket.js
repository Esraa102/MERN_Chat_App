import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);

// build socket server on top of express server
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173"],
    methods: ["POST", "GET"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("user is connected", socket.id);
  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id);
  });
});

export { app, io, server };
