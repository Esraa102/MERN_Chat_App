import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectToDB } from "./config/connectToDB.js";
import { authRouter } from "./routes/auth.route.js";
import { messageRouter } from "./routes/message.route.js";
import { conversationRouter } from "./routes/conversation.route.js";
const app = express();

const port = process.env.PORT || 5001;
connectToDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.JWT_SECRET_TOKEN));
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["POST", "PUT", "GET", "DELETE"],
    credentials: true,
  })
);

//Routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/messages", messageRouter);
app.use("/api/v1/coversations", conversationRouter);

app.listen(port, () => {
  console.log("Server Is Running on", port);
});
