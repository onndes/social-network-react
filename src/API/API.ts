import { AuthMeDataType, PhotosType, ProfileType } from "./../Types/Types";
import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "80f91154-9634-44fc-a875-b81e7897c21e",
    },
});

export enum ResultCodeEnum {
    Success = 0,
    Error = 1,
}

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)

            .then((response) => {
                return response.data;
            });
    },
};

export const followAPI = {
    follow(userId: number) {
        return instance
            .post(`follow/${userId}`)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error.response;
            });
    },
    unFollow(userId: number) {
        return instance
            .delete(`follow/${userId}`)
            .then((response) => response.data)
            .catch((error) => {
                return error.response;
            });
    },
    checkFollow(userId: number) {
        return instance
            .get(`follow/${userId}`)
            .then((response) => response)
            .catch((error) => {
                return error.response;
            });
    },
};


type ResponseDataStatusType = {
  resultCode: ResultCodeEnum
  messages: Array<string>
  data: {}
}

type UpdatePhotoType = {
  resultCode: ResultCodeEnum
  messages: Array<string>
  data: {photos: PhotosType}
}
export const profileAPI = {
    getProfile(userId: number) {
        return instance.get<ProfileType>(`profile/${userId}`).then((response) => response.data);
    },
    getProfileStatus(userId: number) {
        return instance.get<string>(`profile/status/${userId}`).then((response) => response.data);
    },
    getProfileMe() {
        return instance.get<AuthMeResponseType>(`auth/me`).then((response) => response.data);
    },
    putStatus(status: string) {
        return instance.put<ResponseDataStatusType>(`profile/status`, { status }).then((response) => response.data);
    },  
    updateFoto(photo: string) {
        const formData = new FormData();
        formData.append("image", photo);
        return instance
            .put<UpdatePhotoType>(`profile/photo`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((response) => response.data);
    },
    updateProfileInfo(profileInfo: ProfileType) {
        return instance.put<ResponseDataStatusType>(`profile`, profileInfo).then((response) => response.data);
    },
};

// authMeAPI start =========================================

export enum LoginResultCodeEnum {
    Success = 0,
    Error = 1,
    Captch = 10,
}
type LoginDataType = {
    email: string;
    password: number;
    rememberMe: boolean;
    captcha: null | string;
};
type AuthMeResponseType = {
    resultCode: ResultCodeEnum;
    messages: Array<string>;
    data: AuthMeDataType;
};
type LoginResponseType = {
    resultCode: LoginResultCodeEnum;
    messages: Array<string>;
    data: {
        userId: number;
    };
};
type LogoutResponseType = {
    resultCode: ResultCodeEnum;
    messages: Array<string>;
    data: {};
};

export const authMeAPI = {
    getAuthMe() {
        return instance.get<AuthMeResponseType>(`auth/me`).then((response) => response.data);
    },
    login({ email, password, rememberMe = false, captcha = null }: LoginDataType) {
        return instance
            .post<LoginResponseType>("auth/login", { email, password, rememberMe, captcha })
            .then((response) => response.data);
    },
    logout() {
        return instance.delete<LogoutResponseType>("auth/login").then((res) => res.data);
    },
};

// authMeAPI end =========================================

export const securityAPI = {
    captcha() {
        return instance
            .get<{ url: string }>(`security/get-captcha-url`)
            .then((response) => response.data);
    },
};
