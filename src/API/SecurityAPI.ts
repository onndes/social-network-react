import { instance } from "./API";

export const securityAPI = {
  captcha() {
    return instance
    .get<{ url: string }>(`security/get-captcha-url`)
    .then((response) => response.data);
  },
};