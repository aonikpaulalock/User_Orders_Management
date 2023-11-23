import { TUser, TUserOrder } from "./user.interface";
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

// user order update
const UserOrderService = async (userId: string | number, orderData: TUserOrder) => {

  if (!UserModel.isUserExists(userId)) {
    throw new Error("User not found")
  }

  // const { productName, price, quantity } = orderData
  const result = await UserModel.findOneAndUpdate(
    { userId, orders: { $exists: true } },
    { $push: { orders: orderData } },
    { upsert: true, new: true }
  )
  return result
}

// All orders for a specific user
const SingleUserAllOrderService = async (userId: string | number) => {

  if (!UserModel.isUserExists(userId)) {
    throw new Error("User not found")
  }
  const result = await UserModel.findOne({ userId }).select({ "orders": 1, "_id": 0 })
  return result
}

// All orders for a specific user
const CalculateSingleUserOrderService = async (userId: string | number) => {

  if (!UserModel.isUserExists(userId)) {
    throw new Error("User not found")
  }
  const result = await UserModel.findOne({ userId }).select({ "orders": 1, "_id": 0 })
  let totalPrice = 0;
  result?.orders?.forEach((order) => {
    return totalPrice += order.price * order.quantity
  })
  return  totalPrice 
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