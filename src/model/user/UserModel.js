import UserSchema from "./UserSchema.js";

export const addUser = (userObj) => {
  return UserSchema(userObj).save();
};

export const getSingleUser = (filter) => {
  return UserSchema.findOne(filter);
};

export const updateUser = (_id, obj) => {
  return UserSchema.findByIdAndUpdate(_id, obj, { new: true });
};

export const deleteUser = (_id) => {
  return UserSchema.findByIdAndDelete(_id);
};
