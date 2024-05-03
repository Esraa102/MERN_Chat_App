import jwt from "jsonwebtoken";

export const verfiyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.status(422).json({
      status: "Error",
      message: "Invalid Or Expired Token, You Need To Log In ",
    });
  } else {
    jwt.verify(token, process.env.JWT_SECRET_TOKEN, (err, decoded) => {
      if (err) {
        return res.status(422).json({
          status: "Error",
          message: "Invalid Or Expired Token, You Need To Log In ",
        });
      } else {
        req.user = decoded;
        next();
      }
    });
  }
};
