import express from "express";
import { UserController } from "./user.controller";

const router = express.Router();

router
  .get("/:userId", UserController.GetSingleUserIntoDB)
  .get("/", UserController.GetAllUserIntoDB)
  .post("/", UserController.createUserIntoDB)

export const studentRouter = router;