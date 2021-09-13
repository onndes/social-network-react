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

            .then((response) => {
                let data = response.data;
                data.items.forEach(
                    (user) =>
                        (user.status = user.status ? user.status : "no status [check api.js]"),
                );
                return data;
            });
    },
};

export const followAPI = {
    follow(userId) {
        return instance
            .post(`follow/${userId}`)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error.response;
            });
    },
    unFollow(userId) {
        return instance
            .delete(`follow/${userId}`)
            .then((response) => response.data)
            .catch((error) => {
                return error.response;
            });
    },
};

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`).then((response) => response.data);
    },
    getProfileStatus(userId) {
        return instance.get(`profile/status/${userId}`).then((response) => response.data);
    },
    getProfileMe() {
        return instance.get(`auth/me`).then((response) => response.data);
    },
    putStatus(status) {
        return instance.put(`profile/status`, { status: status }).then((response) => response.data);
    },
};

export const authMeAPI = {
    getAuthMe() {
        return instance.get(`auth/me`).then((response) => response.data);
    },
    login({ email, password, rememberMe = false }) {
        return instance
            .post("auth/login", { email, password, rememberMe })
            .then((response) => response.data);
    },
    logout() {
        return instance.delete("auth/login");
    },
};
