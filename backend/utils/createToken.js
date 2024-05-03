import jwt from "jsonwebtoken";

export const createToken = (userInfo) => {
  const accessToken = jwt.sign(
    {
      _id: userInfo._id,
      username: userInfo.username,
      email: userInfo.email,
      password: userInfo.password,
    },
    process.env.JWT_SECRET_TOKEN,
    { expiresIn: "7d" }
  );
  return accessToken;
};
