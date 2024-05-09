import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

export const verfiyToken = async (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.status(422).json({
      status: "Error",
      message: "Invalid Or Expired Token, You Need To Log In ",
    });
  } else {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET_TOKEN);
      if (!decoded) {
        s;
        return res.status(422).json({
          status: "Error",
          message: "Invalid Or Expired Token, You Need To Log In ",
        });
      }
      const authUser = await User.findById(decoded._id).select("-password");
      if (!authUser) {
        return res.status(404).json({
          status: "Error",
          message: "User Not Found",
        });
      }
      req.user = authUser;
      next();
    } catch (error) {
      return res.status(500).json({
        status: "Error",
        message: error.message,
      });
    }
  }
};
