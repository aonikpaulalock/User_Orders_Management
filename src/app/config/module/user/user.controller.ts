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
      message: error.message || "somethings went wrong",
      error
    })
  }
}
const GetAllUserIntoDB = async (req: Request, res: Response) => {
  try {
    const result = await UserService.GetAllUserService();

    res.status(200).json({
      success: true,
      message: "successfully get data",
      data: result
    })
  }
  catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || "somethings went wrong",
      error
    })
  }
}

const GetSingleUserIntoDB = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const result = await UserService.GetSingleUserService(userId)
    res.status(200).json({
      success: true,
      message: "successfully get data",
      data: result
    })
  }
  catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || "somethings went wrong",
      error
    })
  }
}

export const UserController = {
  createUserIntoDB,
  GetAllUserIntoDB,
  GetSingleUserIntoDB
}