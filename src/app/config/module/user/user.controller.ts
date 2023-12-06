/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express"
import { UserService } from "./user.service";
import { UserZodValidationSchema } from "./user.zod.validation";

// Create a new user
const createUserIntoDB = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    const userValidationWithZod = UserZodValidationSchema.parse(user)
    const result = await UserService.UserCreateService(userValidationWithZod)
    res.status(200).json({
      success: true,
      message: "User created successfully!",
      data: result
    })
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || "Failed to create user",
      error: {
        code: 400,
        description: "User not found!"
      }
    })
  }
}

// List of all users
const GetAllUserIntoDB = async (req: Request, res: Response) => {
  try {
    const result = await UserService.GetAllUserService();

    res.status(200).json({
      success: true,
      message: "Users fetched successfully!",
      data: result
    })
  }
  catch (error: any) {
    res.status(400).json({
      success: false,
      message: "Failed to fetch",
      error: {
        code: 400,
        description: "User not found!"
      }
    })
  }
}

// Specific user by ID
const GetSingleUserIntoDB = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const result = await UserService.GetSingleUserService(userId)
    res.status(200).json({
      success: true,
      message: "User fetched successfully!",
      data: result
    })
  }
  catch (error: any) {
    res.status(400).json({
      success: false,
      message: "Failed to fetch",
      error: {
        code: 400,
        description: "User not found!"
      }
    })
  }
}

// Update user information
const GetSingleUserUpdateIntoDB = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const { user } = req.body;
    const result = await UserService.GetSingleUserUpdateService(userId, user)
    res.status(200).json({
      success: true,
      message: "User updated successfully!",
      data: result
    })
  }
  catch (error: any) {
    res.status(400).json({
      success: false,
      message: "Failed to update",
      error: {
        code: 400,
        description: "User not found!"
      }
    })
  }
}

// Delete a user

const DeleteSingleUserIntoDB = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    await UserService.DeleteSingleUserService(userId)
    res.status(200).json({
      success: true,
      message: "User deleted successfully!",
      data: null
    })
  }
  catch (error: any) {
    res.status(400).json({
      success: false,
      message: "Failed to delete",
      error: {
        code: 400,
        description: "User not found!"
      }
    })
  }
}


// Add New Product in Order

const UserOrderUpdateIntoDB = async (req: Request, res: Response) => {
  try {

    const { userId } = req.params;
    const orders = req.body;

    const result = await UserService.UserOrderService(userId, orders)

    res.status(200).json({
      success: true,
      message: "Order created successfully!",
      data: result
    })
  }

  catch (error: any) {
    res.status(400).json({
      success: false,
      message: "Failed to create order",
      error: {
        code: 400,
        description: "User not found!"
      }
    })
  }
}

// All orders for a specific user

const SingleUserOrderIntoDB = async (req: Request, res: Response) => {
  try {

    const { userId } = req.params;

    const result = await UserService.SingleUserAllOrderService(userId)

    res.status(200).json({
      success: true,
      message: "Order fetched successfully!",
      data: result
    })
  }

  catch (error: any) {
    res.status(400).json({
      success: false,
      message: "Failed to fetch",
      error: {
        code: 400,
        description: "User not found!"
      }
    })
  }
}

//  Calculate Total Price of Orders for a Specific User
const CalculateSingleUserOrderIntoDB = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const totalPrice = await UserService.CalculateSingleUserOrderService(userId)

    res.status(200).json({
      success: true,
      message: "Total price calculated successfully!",
      data: { totalPrice }
    })
  }

  catch (error: any) {
    res.status(400).json({
      success: false,
      message: "Failed to calculate",
      error: {
        code: 400,
        description: "User not found!"
      }
    })
  }
}


export const UserController = {
  createUserIntoDB,
  GetAllUserIntoDB,
  GetSingleUserIntoDB,
  GetSingleUserUpdateIntoDB,
  DeleteSingleUserIntoDB,
  UserOrderUpdateIntoDB,
  SingleUserOrderIntoDB,
  CalculateSingleUserOrderIntoDB
}