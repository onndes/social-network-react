import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "80f91154-9634-44fc-a875-b81e7897c21e",
    },
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then((responce) => responce.data);
    },
};
export const followAPI = {
    follow(userId) {
        return instance.post(`follow/${userId}`).then((responce) => responce.data);
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`).then((responce) => responce.data);
    },
};

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`).then((responce) => responce.data);
    },
    getProfileStatus(userId) {
        return instance.get(`profile/status/${userId}`).then((responce) => responce.data);
    },
    getProfileMe() {
        return instance.get(`auth/me`).then((responce) => responce.data);
    },
};

export const authMeAPI = {
    getAuthMe() {
        return instance.get(`auth/me`).then((responce) => responce.data);
    },
};
