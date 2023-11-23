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
exports.UserService = void 0;
const user_model_1 = require("./user.model");
// Create user
const UserCreateService = (studentData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.UserModel.create(studentData);
    return result;
});
// Get all users
const GetAllUserService = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.UserModel
        .find()
        .select({
        "username": 1,
        "fullName": 1,
        "age": 1,
        "email": 1,
        "address": 1
    });
    return result;
});
// Get single user
const GetSingleUserService = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.UserModel.findOne({ userId });
    if (!user_model_1.UserModel.isUserExists(userId)) {
        throw new Error("User not found");
    }
    return result;
});
// Update_User
const GetSingleUserUpdateService = (userId, userData) => __awaiter(void 0, void 0, void 0, function* () {
    if (!user_model_1.UserModel.isUserExists(userId)) {
        throw new Error("User not found");
    }
    const result = yield user_model_1.UserModel.findOneAndUpdate({ userId }, { $set: userData }, { new: true, runValidators: true });
    return result;
});
// Delete_User
const DeleteSingleUserService = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    if (!user_model_1.UserModel.isUserExists(userId)) {
        throw new Error("User not found");
    }
    const result = yield user_model_1.UserModel.findOneAndDelete({ userId });
    return result;
});
// user order update
const UserOrderService = (userId, orderData) => __awaiter(void 0, void 0, void 0, function* () {
    if (!user_model_1.UserModel.isUserExists(userId)) {
        throw new Error("User not found");
    }
    // const { productName, price, quantity } = orderData
    const result = yield user_model_1.UserModel.findOneAndUpdate({ userId, orders: { $exists: true } }, { $push: { orders: orderData } }, { upsert: true, new: true });
    return result;
});
// All orders for a specific user
const SingleUserAllOrderService = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    if (!user_model_1.UserModel.isUserExists(userId)) {
        throw new Error("User not found");
    }
    const result = yield user_model_1.UserModel.findOne({ userId }).select({ "orders": 1, "_id": 0 });
    return result;
});
exports.UserService = {
    UserCreateService,
    GetAllUserService,
    GetSingleUserService,
    GetSingleUserUpdateService,
    DeleteSingleUserService,
    UserOrderService,
    SingleUserAllOrderService
};
