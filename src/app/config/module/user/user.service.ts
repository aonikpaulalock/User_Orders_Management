import { TUser } from "./user.interface";
import { UserModel } from "./user.model";


// Create user
const UserCreateService = async (studentData: TUser) => {
  const result = await UserModel.create(studentData);
  return result
}

// Get all users
const GetAllUserService = async () => {
  const result = await UserModel
    .find()
    .select({
      "username": 1,
      "fullName": 1,
      "age": 1,
      "email": 1,
      "address": 1
    });
  return result
}

// Get single user
const GetSingleUserService = async (userId: string | number) => {
  const result = await UserModel.findOne({ userId });
  if (!UserModel.isUserExists(userId)) {
    throw new Error("User not found")
  }
  return result
}

// Update_User
const GetSingleUserUpdateService = async (userId: string | number, userData: TUser) => {
  if (!UserModel.isUserExists(userId)) {
    throw new Error("User not found")
  }
  const result = await UserModel.findOneAndUpdate(
    { userId }, { $set: userData },
    { new: true, runValidators: true }
  )
  return result
}

// Delete_User
const DeleteSingleUserService = async (userId: string | number) => {
  if (!UserModel.isUserExists(userId)) {
    throw new Error("User not found")
  }
  const result = await UserModel.findOneAndDelete({ userId })
  return result
}

export const UserService = {
  UserCreateService,
  GetAllUserService,
  GetSingleUserService,
  GetSingleUserUpdateService,
  DeleteSingleUserService
} 