"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_service_1 = require("./user.service");
const user_zod_validation_1 = require("./user.zod.validation");
const createUserIntoDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user } = yield req.body;
        const userValidationWithZod = user_zod_validation_1.UserZodValidationSchema.parse(user);
        const result = yield user_service_1.UserService.UserCreateService(userValidationWithZod);
        res.status(200).json({
            success: true,
            message: "User created successfully!",
            data: result
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to create user",
            error: {
                code: 400,
                description: error.message
            }
        });
    }
});
const GetAllUserIntoDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_service_1.UserService.GetAllUserService();
        res.status(200).json({
            success: true,
            message: "Users fetched successfully!",
            data: result
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to fetch",
            error: {
                code: 400,
                description: error.message
            }
        });
    }
});
const GetSingleUserIntoDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const result = yield user_service_1.UserService.GetSingleUserService(userId);
        res.status(200).json({
            success: true,
            message: "User fetched successfully!",
            data: result
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to fetch",
            error: {
                code: 400,
                description: error.message
            }
        });
    }
});
const GetSingleUserUpdateIntoDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const { user } = req.body;
        const result = yield user_service_1.UserService.GetSingleUserUpdateService(userId, user);
        res.status(200).json({
            success: true,
            message: "User updated successfully!",
            data: result
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to update user",
            error: {
                code: 400,
                description: error.message
            }
        });
    }
});
const DeleteSingleUserIntoDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const result = yield user_service_1.UserService.DeleteSingleUserService(userId);
        res.status(200).json({
            success: true,
            message: "User deleted successfully!",
            data: result
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to delete data",
            error: {
                code: 400,
                description: error.message
            }
        });
    }
});
// Order_Update
const UserOrderUpdateIntoDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const orders = req.body;
        const result = yield user_service_1.UserService.UserOrderService(userId, orders);
        res.status(200).json({
            success: true,
            message: "Order update successfully!",
            data: result
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to order",
            error: {
                code: 400,
                description: error.message
            }
        });
    }
});
// Single user alll Order
const SingleUserOrderIntoDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const result = yield user_service_1.UserService.SingleUserAllOrderService(userId);
        res.status(200).json({
            success: true,
            message: "Order fetched successfully!",
            data: result
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to order",
            error: {
                code: 400,
                description: error.message
            }
        });
    }
});
exports.UserController = {
    createUserIntoDB,
    GetAllUserIntoDB,
    GetSingleUserIntoDB,
    GetSingleUserUpdateIntoDB,
    DeleteSingleUserIntoDB,
    UserOrderUpdateIntoDB,
    SingleUserOrderIntoDB
};
