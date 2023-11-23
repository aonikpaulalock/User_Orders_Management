import express from "express";
import { UserController } from "./user.controller";

const router = express.Router();

router
  .get("/", UserController.GetAllUserIntoDB)
  .post("/", UserController.createUserIntoDB)
  .get("/:userId", UserController.GetSingleUserIntoDB)
  .put("/:userId", UserController.GetSingleUserUpdateIntoDB)
  .delete("/:userId", UserController.DeleteSingleUserIntoDB)

export const studentRouter = router;