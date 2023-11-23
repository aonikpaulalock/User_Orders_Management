import { TUser } from "./user.interface";
import { UserModel } from "./user.model";

const UserCreateService = async (studentData: TUser) => {

  // const student = new Student(studentData) // instance method
  // // Custom instace methods
  // if (await student.isUserExists(student.id)) {
  //   throw Error("User Already Exists")
  // }
  // // student.isUserExists
  // const result = student.save()
  // if (await Student.isUserExists(studentData.id)) {
  //   throw Error("User static already exists")
  // }
  // bulid in static method
  const result = await UserModel.create(studentData);
  return result
}

const GetAllUserService = async () => {
  const result = await UserModel.find();
  return result
}
const GetSingleUserService = async (userId: string) => {
  const result = await UserModel.findOne({ userId });
  return result
}

export const UserService = {
  UserCreateService,
  GetAllUserService,
  GetSingleUserService
} 