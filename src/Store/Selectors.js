// Trial selectors
import { createSelector } from "reselect";

export const getProfilePage = (state) => {
    return state.profilePage.profile;
};

export const getUserStatus = (state) => {
    return state.profilePage.userStatus;
};

export const checkGetUserStatus = createSelector(getUserStatus, (status) => {
    return status ? status : "no status";
});
