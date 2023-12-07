"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserZodValidationSchema = void 0;
const zod_1 = require("zod");
const UserFullNameZodValidation = zod_1.z.object({
    firstName: zod_1.z.string(),
    lastName: zod_1.z.string(),
});
const UserAddressZodValidation = zod_1.z.object({
    street: zod_1.z.string(),
    city: zod_1.z.string(),
    country: zod_1.z.string(),
});
const UserOrderZodValidation = zod_1.z.object({
    productName: zod_1.z.string(),
    price: zod_1.z.number(),
    quantity: zod_1.z.number(),
});
exports.UserZodValidationSchema = zod_1.z.object({
    userId: zod_1.z.number(),
    username: zod_1.z.string(),
    password: zod_1.z.string(),
    fullName: UserFullNameZodValidation,
    age: zod_1.z.number(),
    email: zod_1.z.string().email(),
    isActive: zod_1.z.boolean(),
    hobbies: zod_1.z.array(zod_1.z.string()),
    address: UserAddressZodValidation,
    orders: zod_1.z.array(UserOrderZodValidation).optional(),
});
