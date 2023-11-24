// import { useUserExists } from "../../../utils/UserExists";
import { TUser, TUserOrder } from "./user.interface";
import { UserModel } from "./user.model";


// Create user Sevice
const UserCreateService = async (studentData: TUser) => {
  const result = await UserModel.create(studentData);
  return result
}

// Get all users Service

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

// Get single user Service

const GetSingleUserService = async (userId: string | number) => {
  const result = await UserModel.findOne({ userId });
  const user = await UserModel.isUserExists(userId);
  if (!user) {
    throw new Error("User Not found")
  };
  return result
}

// Update user Service
const GetSingleUserUpdateService = async (userId: string | number, userData: TUser) => {
  const user = await UserModel.isUserExists(userId);
  if (!user) {
    throw new Error("User Not found")
  }
  const result = await UserModel.findOneAndUpdate(
    { userId }, { $set: userData },
    { new: true, runValidators: true }
  )
  return result
}

// Delete user Service

const DeleteSingleUserService = async (userId: string | number) => {
  const user = await UserModel.isUserExists(userId);
  if (!user) {
    throw new Error("User Not found")
  }
  const result = await UserModel.findOneAndDelete({ userId })
  return result
}

// User order update Service
const UserOrderService = async (userId: string | number, orderData: TUserOrder) => {

  const user = await UserModel.isUserExists(userId);
  if (!user) {
    throw new Error("User Not found")
  }
  const result = await UserModel.findOneAndUpdate(
    { userId, orders: { $exists: true } },
    { $push: { orders: orderData } },
    { upsert: true, new: true }
  )
  return result
}

// All orders specific user Service
const SingleUserAllOrderService = async (userId: string | number) => {

  const user = await UserModel.isUserExists(userId);
  if (!user) {
    throw new Error("User Not found")
  }
  const result = await UserModel.findOne({ userId }).select({ "orders": 1, "_id": 0 })
  return result
}

// Claculate orders specific user
const CalculateSingleUserOrderService = async (userId: string | number) => {

  const user = await UserModel.isUserExists(userId);
  if (!user) {
    throw new Error("User Not found")
  }
  const result = await UserModel.findOne({ userId }).select({ "orders": 1, "_id": 0 })
  let totalPrice = 0;
  result?.orders?.forEach((order) => {
    return totalPrice += order.price * order.quantity
  })
  return totalPrice
}


export const UserService = {
  UserCreateService,
  GetAllUserService,
  GetSingleUserService,
  GetSingleUserUpdateService,
  DeleteSingleUserService,
  UserOrderService,
  SingleUserAllOrderService,
  CalculateSingleUserOrderService
} 