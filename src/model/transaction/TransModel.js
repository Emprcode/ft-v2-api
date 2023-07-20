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

export const deleteTransactionByIds = ( idArg) => {
  return TransSchema.deleteMany( {_id: { $in: idArg} } )
}
