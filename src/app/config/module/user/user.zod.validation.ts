import { z } from 'zod';

const UserFullNameZodValidation = z.object({
  firstName: z.string(),
  lastName: z.string(),
});

const UserAddressZodValidation = z.object({
  street: z.string(),
  city: z.string(),
  country: z.string(),
});

const UserOrderZodValidation = z.object({
  productName: z.string(),
  price: z.number(),
  quantity: z.number(),
});

export const UserZodValidationSchema = z.object({
    userId: z.number(),
    username: z.string(),
    password: z.string(),
    fullName: UserFullNameZodValidation,
    age: z.number(),
    email: z.string().email(),
    isActive: z.enum(['active', 'inactive']),
    hobbies: z.array(z.string()),
    address: UserAddressZodValidation,
    orders: z.array(UserOrderZodValidation).optional(),
});