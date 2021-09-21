import { profileAPI } from "../../API/API";

const SET_PROFILE_DATA = "ProfilePageReducer/SET_PROFILE_DATA ";
const SET_USER_ID = "ProfilePageReducer/SET_USER_ID";
const IS_LOADING = "ProfilePageReducer/IS_LOADING";
const SET_USER_STATUS = "ProfilePageReducer/SET_USER_STATUS";
const PUT_STATUS = "ProfilePageReducer/PUT_STATUS";
const IS_UPDATING_MY_STATUS = "ProfilePageReducer/IS_UPDATING_MY_STATUS";

const initialState = {
    profile: null,
    userId: null,
    isLoading: true,
    userStatus: null,
    status: "",
    isUpdatingMyStatus: false,
};

const ProfilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE_DATA:
            return { ...state, profile: action.profile };
        case SET_USER_ID:
            return { ...state, userId: action.userId };
        case IS_LOADING:
            return { ...state, isLoading: action.loading };
        case SET_USER_STATUS:
            return { ...state, userStatus: action.userStatus };
        case PUT_STATUS:
            return { ...state, status: action.userStatus };
        case IS_UPDATING_MY_STATUS:
            return { ...state, isUpdatingMyStatus: action.isUpdate };
        default:
            return state;
    }
};

export const setProfileData = (profile) => {
    return {
        type: SET_PROFILE_DATA,
        profile,
    };
};

export const setUserId = (userId) => {
    return {
        type: SET_USER_ID,
        userId,
    };
};
export const isLoading = (loading) => {
    return {
        type: IS_LOADING,
        loading,
    };
};
export const setUserStatus = (userStatus) => {
    return {
        type: SET_USER_STATUS,
        userStatus,
    };
};
export const isUpdatingMyStatus = (isUpdate) => {
    return {
        type: IS_UPDATING_MY_STATUS,
        isUpdate,
    };
};

export const getProfile = (userId) => {
    return async (dispatch) => {
        dispatch(setProfileData(null));
        dispatch(isLoading(true));

        const data = await profileAPI.getProfile(userId);
        dispatch(setProfileData(data));
        dispatch(setUserId(data.userId));
        dispatch(isLoading(false));

        const dataStatus = await profileAPI.getProfileStatus(userId);
        dispatch(setUserStatus(dataStatus));
    };
};

export const putStatus = (status) => async (dispatch) => {
    dispatch(isUpdatingMyStatus(true));
    const data = await profileAPI.putStatus(status);
    if (data.resaultCode === 0) {
        dispatch(setUserStatus(status));
    }
    dispatch(isUpdatingMyStatus(false));
};
export default ProfilePageReducer;
