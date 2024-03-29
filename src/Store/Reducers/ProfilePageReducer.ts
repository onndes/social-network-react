import { profileAPI } from "./../../API/ProfileAPI";
import { ResultCodeEnum } from "../../API/API";
import { getAdditionalInfoUser } from "./AuthReducer";
import { stopSubmit } from "redux-form";
import { ProfileType } from "../../Types/Types";
import { AppStateType } from "../Store";
import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { followAPI } from "../../API/FollowAPI";

const SET_PROFILE_DATA = "ProfilePageReducer/SET_PROFILE_DATA ";
const SET_USER_ID = "ProfilePageReducer/SET_USER_ID";
const IS_LOADING = "ProfilePageReducer/IS_LOADING";
const SET_USER_STATUS = "ProfilePageReducer/SET_USER_STATUS";
const IS_UPDATING_MY_STATUS = "ProfilePageReducer/IS_UPDATING_MY_STATUS";
const SET_FOLLOW_THIS_USER = "ProfilePageReducer/GET_FOLLOW_THIS_USER";
const SET_PHOTO_PROFILE = "ProfilePageReducer/SET_PHOTO_PROFILE";
const IS_UPDATE_PHOTO = "ProfilePageReducer/IS_UPDATE_PHOTO";

const initialState = {
    profile: null as null | ProfileType | any,
    userId: null as null | number,
    isLoading: true,
    userStatus: null as null | string,
    isUpdatingMyStatus: false,
    follow: null as null | boolean,
    isUpdatePhoto: false,
};
type InitialStateType = typeof initialState;

const ProfilePageReducer = (
    state = initialState,
    action: ActionsTypes,
): InitialStateType => {
    switch (action.type) {
        case SET_PROFILE_DATA:
            return { ...state, profile: action.profile };
        case SET_USER_ID:
            return { ...state, userId: action.userId };
        case IS_LOADING:
            return { ...state, isLoading: action.loading };
        case SET_USER_STATUS:
            return { ...state, userStatus: action.userStatus };
        case IS_UPDATING_MY_STATUS:
            return { ...state, isUpdatingMyStatus: action.isUpdate };
        case SET_FOLLOW_THIS_USER:
            return { ...state, follow: action.follow };
        case SET_PHOTO_PROFILE:
            return {
                ...state,
                profile: { ...state.profile, photos: action.image },
            };
        case IS_UPDATE_PHOTO:
            return { ...state, isUpdatePhoto: action.isUpdatePhoto };
        default:
            return state;
    }
};

type ActionsTypes =
    | SetProfileDataType
    | SetUserIdType
    | IsLoadingType
    | SetUserStatusType
    | IsUpdatingMyStatusType
    | SetFollowThisUserType
    | SetPhotoPofile
    | IsUpdatePhoto;

type SetProfileDataType = {
    type: typeof SET_PROFILE_DATA;
    profile: ProfileType | null;
};
export const setProfileData = (
    profile: ProfileType | null,
): SetProfileDataType => {
    return {
        type: SET_PROFILE_DATA,
        profile,
    };
};
type SetUserIdType = {
    type: typeof SET_USER_ID;
    userId: number;
};
export const setUserId = (userId: number): SetUserIdType => {
    return {
        type: SET_USER_ID,
        userId,
    };
};
type IsLoadingType = {
    type: typeof IS_LOADING;
    loading: boolean;
};
export const isLoading = (loading: boolean): IsLoadingType => {
    return {
        type: IS_LOADING,
        loading,
    };
};
type SetUserStatusType = {
    type: typeof SET_USER_STATUS;
    userStatus: string;
};
export const setUserStatus = (userStatus: string): SetUserStatusType => {
    return {
        type: SET_USER_STATUS,
        userStatus,
    };
};
type IsUpdatingMyStatusType = {
    type: typeof IS_UPDATING_MY_STATUS;
    isUpdate: boolean;
};
export const isUpdatingMyStatus = (
    isUpdate: boolean,
): IsUpdatingMyStatusType => {
    return {
        type: IS_UPDATING_MY_STATUS,
        isUpdate,
    };
};
type SetFollowThisUserType = {
    type: typeof SET_FOLLOW_THIS_USER;
    follow: boolean;
};
export const setFollowThisUser = (follow: boolean): SetFollowThisUserType => {
    return {
        type: SET_FOLLOW_THIS_USER,
        follow,
    };
};
type SetPhotoPofile = {
    type: typeof SET_PHOTO_PROFILE;
    image: any;
};
export const setPhotoPofile = (image: any): SetPhotoPofile => {
    return {
        type: SET_PHOTO_PROFILE,
        image,
    };
};
type IsUpdatePhoto = {
    type: typeof IS_UPDATE_PHOTO;
    isUpdatePhoto: boolean;
};
export const isUpdatePhoto = (isUpdatePhoto: boolean): IsUpdatePhoto => {
    return {
        type: IS_UPDATE_PHOTO,
        isUpdatePhoto,
    };
};

type GetStateType = () => AppStateType;
type DispatchType = Dispatch<ActionsTypes>;
type ThunkActionType = ThunkAction<
    Promise<void>,
    AppStateType,
    unknown,
    ActionsTypes
>;

export const getProfile = (userId: number): ThunkActionType => {
    return async (dispatch: any) => {
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

export const putStatus = (status: string) => async (dispatch: DispatchType) => {
    dispatch(isUpdatingMyStatus(true));
    const data = await profileAPI.putStatus(status);
    if (data.resultCode === ResultCodeEnum.Success) {
        dispatch(setUserStatus(status));
    }
    dispatch(isUpdatingMyStatus(false));
};

export const getFollowThisUser =
    (id: number) => async (dispatch: DispatchType) => {
        const data = await followAPI.checkFollow(id);
        if (data.status === 200) {
            dispatch(setFollowThisUser(data.data));
        }
    };
export const uploadImg =
    (image: File) => async (dispatch: any, getState: GetStateType) => {
        dispatch(isUpdatePhoto(true));
        const data = await profileAPI.updateFoto(image);

        if (data.resultCode === ResultCodeEnum.Success) {
            dispatch(setPhotoPofile(data.data.photos));
            dispatch(getAdditionalInfoUser());
        }
        dispatch(isUpdatePhoto(false));
    };
export const upadateProfileInfo =
    (profileInfo: any) => async (dispatch: any, getState: any) => {
        const data = await profileAPI.updateProfileInfo(profileInfo);
        if (data.resultCode === ResultCodeEnum.Success) {
            dispatch(getProfile(getState().auth.id));
            dispatch(getAdditionalInfoUser());
        } else {
            var regExp = /\([^)]+\)/;
            var matches = regExp.exec(data.messages[0]);
            dispatch(stopSubmit("modifiedProfile", { _error: matches }));
        }
    };

export default ProfilePageReducer;
