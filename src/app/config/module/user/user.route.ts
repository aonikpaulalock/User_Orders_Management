import express from "express";
import { UserController } from "./user.controller";

const router = express.Router();

router
  .get("/", UserController.GetAllUserIntoDB)
  .post("/", UserController.createUserIntoDB)
  .get("/:userId", UserController.GetSingleUserIntoDB)
  .put("/:userId", UserController.GetSingleUserUpdateIntoDB)
  .delete("/:userId", UserController.DeleteSingleUserIntoDB)
  .put("/:userId/orders",UserController.UserOrderUpdateIntoDB)
  .get("/:userId/orders",UserController.SingleUserOrderIntoDB)
  .get("/:userId/orders/total-price",UserController.CalculateSingleUserOrderIntoDB)

export const studentRouter = router;