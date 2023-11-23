import { Request, Response } from "express"
import { UserService } from "./user.service";
import { UserZodValidationSchema } from "./user.zod.validation";

const createUserIntoDB = async (req: Request, res: Response) => {
  try {
    const { user } = await req.body;
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
      message: "Failed to create user",
      error: {
        code: 400,
        description: error.message
      }
    })
  }
}
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
        description: error.message
      }
    })
  }
}

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
        description: error.message
      }
    })
  }
}


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
      message: "Failed to update user",
      error: {
        code: 400,
        description: error.message
      }
    })
  }
}
const DeleteSingleUserIntoDB = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const result = await UserService.DeleteSingleUserService(userId)
    res.status(200).json({
      success: true,
      message: "User deleted successfully!",
      data: result
    })
  }
  catch (error: any) {
    res.status(400).json({
      success: false,
      message: "Failed to delete data",
      error: {
        code: 400,
        description: error.message
      }
    })
  }
}


export const UserController = {
  createUserIntoDB,
  GetAllUserIntoDB,
  GetSingleUserIntoDB,
  GetSingleUserUpdateIntoDB,
  DeleteSingleUserIntoDB
}