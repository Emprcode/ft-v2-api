import { getSingleUser } from "../model/user/UserModel.js";

export const userAuth = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    console.log(authorization);
    // check if user is valid
    const user = await getSingleUser({ _id: authorization });
    if (user?._id) {
      return next();
    }
    res.json({
      status: "error",
      message: "Unauthorize",
    });
  } catch (error) {
    next(error);
  }
};
