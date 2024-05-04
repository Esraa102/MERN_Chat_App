import express from "express";
import { getUsersForSidebar } from "../controllers/users.controller.js";
import { verfiyToken } from "../middleware/verfiyToken.js";

const router = express.Router();

router.get("/", verfiyToken, getUsersForSidebar);

export { router as userRouter };
