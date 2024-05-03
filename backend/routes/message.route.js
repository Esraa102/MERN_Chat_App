import express from "express";
import { sendMessage, getMessages } from "../controllers/message.controller.js";
import { verfiyToken } from "../middleware/verfiyToken.js";

const router = express.Router();

router.post("/send/:receiverId", verfiyToken, sendMessage);
router.get("/:id", verfiyToken, getMessages);

export { router as messageRouter };
