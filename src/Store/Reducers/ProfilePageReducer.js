import { followAPI, profileAPI } from "../../API/API";
import { getAdditionalInfoUser } from "./AuthReducer";

const SET_PROFILE_DATA = "ProfilePageReducer/SET_PROFILE_DATA ";
const SET_USER_ID = "ProfilePageReducer/SET_USER_ID";
const IS_LOADING = "ProfilePageReducer/IS_LOADING";
const SET_USER_STATUS = "ProfilePageReducer/SET_USER_STATUS";
const PUT_STATUS = "ProfilePageReducer/PUT_STATUS";
const IS_UPDATING_MY_STATUS = "ProfilePageReducer/IS_UPDATING_MY_STATUS";
const SET_FOLLOW_THIS_USER = "ProfilePageReducer/GET_FOLLOW_THIS_USER";
const SET_PHOTO_PROFILE = "ProfilePageReducer/SET_PHOTO_PROFILE";
const IS_UPDATE_PHOTO = "ProfilePageReducer/IS_UPDATE_PHOTO";

const initialState = {
    profile: null,
    userId: null,
    isLoading: true,
    userStatus: null,
    status: "",
    isUpdatingMyStatus: false,
    follow: null,
    isUpdatePhoto: false,
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
        case SET_FOLLOW_THIS_USER:
            return { ...state, follow: action.follow };
        case SET_PHOTO_PROFILE:
            return { ...state, profile: { ...state.profile, photos: action.image } };
        case IS_UPDATE_PHOTO:
            return { ...state, isUpdatePhoto: action.isUpdatePhoto };
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
export const setFollowThisUser = (follow) => {
    return {
        type: SET_FOLLOW_THIS_USER,
        follow,
    };
};
export const setPhotoPofile = (image) => {
    return {
        type: SET_PHOTO_PROFILE,
        image,
    };
};
export const isUpdatePhoto = (isUpdatePhoto) => {
    return {
        type: IS_UPDATE_PHOTO,
        isUpdatePhoto,
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

export const getFollowThisUser = (id) => async (dispatch) => {
    const data = await followAPI.checkFollow(id);
    if (data.status === 200) {
        dispatch(setFollowThisUser(data.data));
    }
};
export const uploadImg = (image) => async (dispatch, getState) => {
    dispatch(isUpdatePhoto(true));
    const data = await profileAPI.updateFoto(image);
    if (data.resultCode === 0) {
        dispatch(setPhotoPofile(data.data.photos));
        dispatch(getAdditionalInfoUser(getState().auth.id));
    }
    dispatch(isUpdatePhoto(false));
};
export const upadateProfileInfo = (profileInfo) => async (dispatch, getState) => {
    const data = await profileAPI.updateProfileInfo(profileInfo);
    if (data.resultCode === 0) {
        dispatch(getProfile(getState().auth.id));
        dispatch(getAdditionalInfoUser(getState().auth.id));
    } else {
        // return Promise.reject(data.data.messages[0])
    }
};

export default ProfilePageReducer;
