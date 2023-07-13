import { UserModel } from "./user.model";

export interface ApiResponseModel {
  status: string;
  data: UserModel[];
  message: string;
}