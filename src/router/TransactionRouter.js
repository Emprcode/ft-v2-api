import express from "express";
import {
  createTransaction,
  deleteTransactionByIds,
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

// delete single transaction
// router.delete("/", async (req, res, next) => {
//   try {
//     const { authorization } = req.header;
//     console.log(req.body);
//     const result = await deleteSingleTransaction(req.body, {
//       userId: authorization,
//     });

//     result?._id
//       ? res.json({
//           status: "success",
//           message: "deleted",
//         })
//       : res.json({
//           status: "error",
//           message: "unable to delete, Please try again later",
//         });
//   } catch (error) {
//     next(error);
//   }
// });

//delete many transaction

router.delete("/", async (req, res, next) => {
  try {
    //auth headers
    const { authorization } = req.headers;
    console.log(req.body);

    // console.log(req.body)
    // const result = await deleteTransactionByIds(
    //   req.body,
    //    authorization,
    // );
    const result = await deleteTransactionByIds(req.body, authorization);
    console.log(result);
    result?.deletedCount
      ? res.json({
          status: "success",
          message: result?.deletedCount + "item(s) deleted",
        })
      : res.json({
          status: "error",
          message: "Unable to delete transaction, Please try again later",
        });
  } catch (error) {
    next(error);
  }
});

export default router;
