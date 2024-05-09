import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import { app, server } from "./socket/socket.js";
import cookieParser from "cookie-parser";
import { connectToDB } from "./config/connectToDB.js";
import { authRouter } from "./routes/auth.route.js";
import { messageRouter } from "./routes/message.route.js";
import { conversationRouter } from "./routes/conversation.route.js";
import { userRouter } from "./routes/user.route.js";
import path from "path";
const port = process.env.PORT || 5001;
connectToDB();

const __dirname = path.resolve();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.JWT_SECRET_TOKEN));
app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.use(
  cors({
    origin: "https://mern-chat-app-c4jv.onrender.com",
    methods: ["POST", "GET"],
    credentials: true,
  })
);

//Routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/messages", messageRouter);
app.use("/api/v1/coversations", conversationRouter);
app.use("/api/v1/users", userRouter);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});
server.listen(port, () => {
  console.log("Server Is Running on", port);
});
