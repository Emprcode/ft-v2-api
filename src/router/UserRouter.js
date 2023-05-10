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

//getUser
router.post("/login", async (req, res, next) => {
  try {
    console.log(req.body);

    const result = await getSingleUser(req.body);
    res.json({
      status: "success",
      message: "User created Successfully",
      result,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
