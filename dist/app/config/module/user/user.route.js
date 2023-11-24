"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const router = express_1.default.Router();
router
    // User Api Endpoint
    .get("/", user_controller_1.UserController.GetAllUserIntoDB)
    .post("/", user_controller_1.UserController.createUserIntoDB)
    .get("/:userId", user_controller_1.UserController.GetSingleUserIntoDB)
    .put("/:userId", user_controller_1.UserController.GetSingleUserUpdateIntoDB)
    .delete("/:userId", user_controller_1.UserController.DeleteSingleUserIntoDB)
    // User Orders api Endpoint
    .put("/:userId/orders", user_controller_1.UserController.UserOrderUpdateIntoDB)
    .get("/:userId/orders", user_controller_1.UserController.SingleUserOrderIntoDB)
    .get("/:userId/orders/total-price", user_controller_1.UserController.CalculateSingleUserOrderIntoDB);
exports.studentRouter = router;
