import axios from "axios";

export const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": process.env.REACT_APP_WEATHER_API_KEY,
    },
});

export enum ResultCodeEnum {
    Success = 0,
    Error = 1,
}

export type ResponseData<D = {}, RC = ResultCodeEnum> = {
    data: D;
    messages: Array<string>;
    resultCode: RC;
};
