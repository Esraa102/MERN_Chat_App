import express from "express";
import {
  checkAuth,
  logInUser,
  logOutUser,
  registerUser,
} from "../controllers/auth.controller.js";
import { verfiyToken } from "../middleware/verfiyToken.js";
import {
  loginValidation,
  registerValidation,
  validators,
} from "../middleware/validators.js";

const router = express.Router();

router.post("/register", validators(registerValidation), registerUser);
router.post("/login", validators(loginValidation), logInUser);
router.get("/logout", verfiyToken, logOutUser);
router.get("/check-auth", verfiyToken, checkAuth);
export { router as authRouter };
