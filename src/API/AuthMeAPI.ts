import { AuthMeDataType } from './../Types/Types';
import { instance, ResponseData } from './API';


type LoginDataType = {
  email: string;
  password: number;
  rememberMe: boolean;
  captcha: null | string;
};
export enum LoginResultCodeEnum {
  Success = 0,
  Error = 1,
  Captch = 10,
}

export const authMeAPI = {
  getAuthMe() {
      return instance.get<ResponseData<AuthMeDataType>>(`auth/me`).then((response) => response.data);
  },
  login({ email, password, rememberMe = false, captcha = null }: LoginDataType) {
      return instance
          .post<ResponseData<{userId: number}, LoginResultCodeEnum>>("auth/login", { email, password, rememberMe, captcha })
          .then((response) => response.data);
  },
  logout() {
      return instance.delete<ResponseData>("auth/login").then((res) => res.data);
  },
};