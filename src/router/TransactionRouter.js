import express from "express";
import {
  createTransaction,
  getTransactionById,
} from "../model/transaction/TransModel.js";

const router = express.Router();

//post transaction
router.post("/", async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    const result = await createTransaction({
      ...req.body,
      userId: authorization,
    });
    // console.log(result);
    result?._id
      ? res.json({
          status: "success",
          message: "New transaction added successfully!",
        })
      : res.json({
          status: "error",
          message: "Unable to add new transaction, Please try again later",
        });
  } catch (error) {
    next(error);
  }
});

//gettransaction
router.get("/", async (req, res, next) => {
  try {
    //auth headers
    const { authorization } = req.headers;
    // console.log(authorization);
    const result = await getTransactionById({ userId: authorization });
    console.log(result);
    res.json({
      status: "success",
      message: "Transaction fetched successfully!",
      result,
    });
  } catch (error) {
    next(error);
  }
});

//delete transaction
router.delete("/", async (req, res, next) => {
  try {
    //auth headers
    const { authorization } = req.headers;
    // console.log(authorization);
    const result = await getTransactionById(req.body, {
      userId: authorization,
    });
    console.log(result);
    res.json({
      status: "success",
      message: "Transaction fetched successfully!",
      result,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
