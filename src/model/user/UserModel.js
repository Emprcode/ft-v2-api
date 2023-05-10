import UserSchema from "./UserSchema";

export const addUser = (userObj) => {
  return UserSchema(userObj).save();
};

export const getSingleUser = (_id) => {
  return UserSchema.findById(_id);
};

export const updateUser = (_id, obj) => {
  return UserSchema.findByIdAndUpdate(_id, obj, { new: true });
};

export const deleteUser = (_id) => {
  return UserSchema.findByIdAndDelete(_id);
};
