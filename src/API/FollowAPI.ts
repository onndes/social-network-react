import { instance, ResponseData } from "./API";


export const followAPI = {
  follow(userId: number) {
      return instance
          .post<ResponseData>(`follow/${userId}`)
          .then((response) => {
              return response.data;
          })
          .catch((error) => {
              return error.response;
          });
  },
  unFollow(userId: number) {
      return instance
          .delete<ResponseData>(`follow/${userId}`)
          .then((response) => response.data)
          .catch((error) => {
              return error.response;
          });
  },
  checkFollow(userId: number) {
      return instance
          .get<boolean>(`follow/${userId}`)
          .then((response) => response)
          .catch((error) => {
              return error.response;
          });
  },
};