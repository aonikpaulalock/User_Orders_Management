/* eslint-disable no-unused-vars */
import { Model } from "mongoose";

export type TUserFullName = {
  firstName: string;
  lastName: string
}

export type TUserAdress = {
  street: string;
  city: string;
  country: string
}

export type TUserOrder = {
  productName: string;
  price: number;
  quantity: number;
}

export type TUser = {
  userId: number;
  username: string;
  password: string;
  fullName: TUserFullName;
  age: number;
  email: string;
  isActive: boolean;
  hobbies: Array<string>;
  address: TUserAdress;
  orders?: Array<TUserOrder>;
}

// Static methods
export interface TUserModel extends Model<TUser> {
  isUserExists(userId: string | number): Promise<TUser | null>
}
