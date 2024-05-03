import { User } from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { createToken } from "../utils/createToken.js";

const registerUser = async (req, res, next) => {
  const { username, email, password, fullName, gender } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ status: "Error", message: "User  Already Exist" });
    } else {
      const hashedPassword = bcryptjs.hashSync(password, 10);
      const newUser = await User.create({
        username,
        fullName,
        profileImg: `https://avatar.iran.liara.run/public/${
          gender === "Male" ? "boy" : "girl"
        }?username=${username.trim().toLowerCase()}`,
        email,
        password: hashedPassword,
        gender,
      });
      if (!newUser) {
        return res
          .status(400)
          .json({ status: "Error", message: "Failed To Create New Account" });
      } else {
        const { password: encryptedPass, ...rest } = newUser._doc;
        const accessToken = createToken(newUser);
        return res
          .status(201)
          .cookie("access_token", accessToken, {
            httpOnley: true,
            maxAge: 86400000 * 7, // 7 days in milliseconds
          })
          .json({ status: "OK", userData: rest });
      }
    }
  } catch (error) {
    return res.status(500).json({ status: "Error", message: error.message });
  }
};

const logInUser = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(401)
        .json({ status: "Error", message: "User Is Unathorized" });
    } else {
      if (bcryptjs.compareSync(password, user.password)) {
        const { password: encryptedPass, ...rest } = user._doc;
        const accessToken = createToken(user);
        return res
          .status(200)
          .cookie("access_token", accessToken, {
            httpOnley: true,
            maxAge: 86400000 * 7, // 7 days in milliseconds
          })
          .json({ status: "OK", userData: rest });
      } else {
        return res
          .status(400)
          .json({ status: "Error", message: "Wrong Credentials" });
      }
    }
  } catch (error) {
    return res.status(500).json({ status: "Error", message: error.message });
  }
};

const logOutUser = (req, res, next) => {
  if (req.user) {
    return res
      .clearCookie("access_token", {
        httpOnley: true,
      })
      .status(200)
      .json({ status: "OK", message: "Logged Out Successfully" });
  } else {
    return res.status(403).json({
      status: "Error",
      message: "Your session has been expired, you need to log in first",
    });
  }
};

const checkAuth = async (req, res, next) => {
  if (req.user) {
    const { password, ...rest } = req.user;
    return res.status(200).json({ status: "OK", userData: rest });
  } else {
    return res
      .status(403)
      .json({ status: "Error", message: "Something Went Wrong :(" });
  }
};

export { registerUser, logInUser, logOutUser, checkAuth };
