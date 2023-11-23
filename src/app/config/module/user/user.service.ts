import { TUser } from "./user.interface";
import { UserModel } from "./user.model";


// Create user
const UserCreateService = async (studentData: TUser) => {
  const result = await UserModel.create(studentData);
  return result
}
// Get all users
const GetAllUserService = async () => {
  const result = await UserModel.find();
  return result
}

// Get single user
const GetSingleUserService = async (userId: string | number) => {
  const result = await UserModel.findOne({ userId });
  return result
}

// Update_User
const GetSingleUserUpdateService = async (userId: string | number, userData: TUser) => {
  const result = await UserModel.findOneAndUpdate(
    { userId }, { $set: userData },
    { new: true, runValidators: true }
  )
  return result
}
// Delete_User
const DeleteSingleUserService = async (userId: string | number) => {
  const result = await UserModel.deleteOne({ userId })
  return result
}

export const UserService = {
  UserCreateService,
  GetAllUserService,
  GetSingleUserService,
  GetSingleUserUpdateService,
  DeleteSingleUserService
} 