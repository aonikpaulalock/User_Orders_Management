import { Schema, model } from "mongoose";
import { TUser, TUserAdress, TUserFullName, TUserModel, TUserOrder } from "./user.interface";
import bcrypt from "bcrypt"
import config from "../..";
const userFullNameSchema = new Schema<TUserFullName>({
  firstName: {
    type: String,
    required: [true, 'First name is required']
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required']
  },
});

const userAddressSchema = new Schema<TUserAdress>({
  street: {
    type: String,
    required: [true, 'Street is required']
  },
  city: {
    type: String,
    required: [true, 'City is required']
  },
  country: {
    type: String,
    required: [true, 'Country is required']
  },
});

const userOrderSchema = new Schema<TUserOrder>({
  productName: {
    type: String,
    required: [true, 'Product name is required']
  },
  price: {
    type: Number,
    required: [true, 'Price is required']
  },
  quantity: {
    type: Number,
    required: [true, 'Quantity is required']
  },
});

const userMainSchema = new Schema<TUser, TUserModel>({
  userId: {
    type: Number,
    required: [true, 'User ID is required'],
    unique: true
  },
  username: {
    type: String,
    required: [true, 'Username is required'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Password is required']
  },
  fullName: {
    type: userFullNameSchema,
    required: [true, 'Full name is required']
  },
  age: {
    type: Number,
    required: [true, 'Age is required']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true
  },
  isActive: {
    type: String,
    enum: ['active', 'inactive'],
    required: [true, 'Status is required']
  },
  hobbies: {
    type: [String],
    default: []
  },
  address: {
    type: userAddressSchema,
    required: [true, 'Address is required']
  },
  orders: {
    type: [userOrderSchema],
    default: []
  },
});

userMainSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  user.password = await bcrypt.hash(user.password, Number(config.soltRound));
  next();
});

// replace password field
userMainSchema.methods.toJSON = function () {
  const cloneObj = this.toObject();
  delete cloneObj.password
  return cloneObj;
};

// Is user Exists
userMainSchema.statics.isUserExists = async function (userId: number | string) {
  const existingUser = await UserModel.findOne({ userId })
  return existingUser
}



// creating model
export const UserModel = model<TUser, TUserModel>('User', userMainSchema);