import express from "express";
import { addUser, getSingleUser } from "../model/user/UserModel.js";

const router = express.Router();

//post user
router.post("/", async (req, res, next) => {
  try {
    console.log(req.body);

    const result = await addUser(req.body);
    console.log(result);
    result?._id
      ? res.json({
          status: "success",
          message: "User created Successfully",
        })
      : res.json({
          status: "error",
          message: "Unable to create user, Please try again later",
        });
  } catch (error) {
    next(error);
  }
});

//login
router.post("/login", async (req, res, next) => {
  try {
    console.log(req.body);

    const result = await getSingleUser(req.body);
    console.log(result)
    result?._id ? 
    res.json({
      status: "success",
      message: "User Logged in successfully",
      result:{
        _id: result._id,
        username: result.username,
        email: result.email
      },
    }): res.json({
      status:"error",
      message:"unable to login"
    })
  } catch (error) {
    next(error);
  }
});

//getuser
export default router;
