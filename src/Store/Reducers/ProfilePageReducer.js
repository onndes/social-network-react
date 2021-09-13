import { profileAPI } from "../../API/API";

const SET_PROFILE_DATA = "SET-PROFILE-DATA ";
const SET_USER_ID = "SET-USER-ID";
const IS_LOADING = "IS-LOADING";
const SET_USER_STATUS = "SET_USER_STATUS";
const PUT_STATUS = "PUT-STATUS"
const IS_UPDATING_MY_STATUS = "IS_UPDATING_MY_STATUS"

const initialState = {
    profile: null,
    userId: null,
    isLoading: true,
    userStatus: null,
    status: '',
    isUpdatingMyStatus: false
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
        type: IS_UPDATING_MY_STATUS, isUpdate
    };
};

export const getProfile = (userId) => {
    return (dispatch) => {
        dispatch(setProfileData(null));
        dispatch(isLoading(true));

        profileAPI.getProfile(userId).then((data) => {
            dispatch(setProfileData(data));
            dispatch(setUserId(data.userId));
            dispatch(isLoading(false));
        });

        profileAPI.getProfileStatus(userId).then((data) => {
            dispatch(setUserStatus(data));
        });
    };
};

export const putStatus = (status) => (dispatch) => {
    dispatch(isUpdatingMyStatus(true))
    profileAPI.putStatus(status).then((data) => {
        if (data.resaultCode === 0) {
            dispatch(setUserStatus(status))
        }
        dispatch(isUpdatingMyStatus(false))
    })
}
export default ProfilePageReducer;
