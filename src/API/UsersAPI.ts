import { instance } from "./API";

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)

            .then((response) => {
                return response.data;
            });
    },
};
