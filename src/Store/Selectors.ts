import { AppStateType } from './Store';
// Trial selectors
import { createSelector } from "reselect";
import userImg from "../assets/img/iconUser.png";

export const getProfilePage = (state: AppStateType) => {
    return state.profilePage.profile;
};

export const getUserStatus = (state: AppStateType) => {
    return state.profilePage.userStatus;
};

export const checkGetUserStatus = createSelector(getUserStatus, (status) => {
    return status ? status : "no status";
});


const getUsers = (state: AppStateType) => {
    return state.usersPage.users;
};

export const checkGetUsers = createSelector(getUsers, (users) => {
    if (users.length > 0) {
        const res = users;
        res.forEach((user) => {
            user.status = user.status || "no status";
            user.photos.small = user.photos.small || userImg;
            user.photos.large = user.photos.large || userImg;
        });
        return res;
    }
    return users;
});
