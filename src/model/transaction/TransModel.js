import TransSchema from "./TransSchema.js";

export const createTransaction = (userObj) => {
  return TransSchema(userObj).save();
};

export const getTransactionById = (userId) => {
  return TransSchema.find(userId);
};

// export const deleteSingleTransaction = (_id) => {
//   return TransSchema.findById(_id)
// }

export const deleteTransactionByIds = (userId, idArg) => {
  return TransSchema.deleteMany({userId, _id: { $in: idArg } })
}
