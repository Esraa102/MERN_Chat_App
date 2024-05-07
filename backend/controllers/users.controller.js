import { User } from "../models/user.model.js";

const getUsersForSidebar = async (req, res, next) => {
  const loggedInUser = req.user._id;
  try {
    const allUsers = await User.find({ _id: { $ne: loggedInUser } }); // get all users except the current user
    res.status(200).json({ status: "OK", users: allUsers });
  } catch (error) {
    return res.status(500).json({ status: "Error", message: error.message });
  }
};

export { getUsersForSidebar };
