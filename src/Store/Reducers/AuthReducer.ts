import { stopSubmit } from "redux-form";
import { ResultCodeEnum } from "../../API/API";
import { authMeAPI, LoginResultCodeEnum } from "../../API/AuthMeAPI";
import { profileAPI } from "../../API/ProfileAPI";
import { securityAPI } from "../../API/SecurityAPI";

// NO TYPED
// NO TYPED
// NO TYPED

const SET_USER_DATA = "AuthReducer/SET_USER_DATA";
const SET_USER_ADDITIONAL_INFO = "AuthReducer/SET_USER_ADDITIONAL_INFO";
const IS_LOADING = "AuthReducer/IS_LOADING";
const CUPTCH_URL = "AuthReducer/CUPTCH_URL";

const initialState = {
    id: null as null | number,
    email: null as null | string,
    login: null as null | string,
    isAuth: false,
    photo: null as null | any,
    isLoading: false,
    fullName: null as null | string,
    captchaUrl: null as null | string,
};
export type InitialStateType = typeof initialState;

const AuthReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            };
        case SET_USER_ADDITIONAL_INFO:
            return {
                ...state,
                photo: action.photo,
                fullName: action.fullName,
            };
        case IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading,
            };

        case CUPTCH_URL:
            return {
                ...state,
                captchaUrl: action.captchaUrl,
            };
        default:
            return state;
    }
};
type UserDataType = {
    id: number | null;
    email: string | null;
    login: string | null;
    isAuth: boolean;
};

type SetUserDataType = {
    type: typeof SET_USER_DATA;
    data: UserDataType;
};
export const setUserData = (
    id: number,
    email: string,
    login: string,
): SetUserDataType => {
    return {
        type: SET_USER_DATA,
        data: { id, email, login, isAuth: true },
    };
};
export const clearUserData = () => {
    return {
        type: SET_USER_DATA,
        data: {
            id: null,
            email: null,
            login: null,
            isAuth: false,
            photo: null,
            fullName: null,
        },
    };
};
type SetAdditionalInfoUserType = {
    type: typeof SET_USER_ADDITIONAL_INFO;
    photo: string;
    fullName: string;
};
export const setAdditionalInfoUser = (
    photo: string,
    fullName: string,
): SetAdditionalInfoUserType => {
    return {
        type: SET_USER_ADDITIONAL_INFO,
        photo,
        fullName,
    };
};
type setIsLoadingType = {
    type: typeof IS_LOADING;
    isLoading: boolean;
};
export const setIsLoading = (isLoading: boolean): setIsLoadingType => {
    return {
        type: IS_LOADING,
        isLoading,
    };
};

type setCuptchUrlType = {
    type: typeof CUPTCH_URL;
    captchaUrl: string;
};
export const setCuptchUrl = (captchaUrl: string): setCuptchUrlType => {
    return {
        type: CUPTCH_URL,
        captchaUrl,
    };
};
// ============================================================
export const authMe = () => async (dispatch: any, getState: any) => {
    const data = await authMeAPI.getAuthMe();
    if (data.resultCode === ResultCodeEnum.Success) {
        const { email, id, login } = data.data;
        dispatch(setUserData(id, email, login));
    }
    profileAPI.getProfile(getState().auth.id).then((data) => {
        const small = data.photos?.small ? data.photos.small : ''
        dispatch(setAdditionalInfoUser(small, data.fullName));
    });
};

export const getAdditionalInfoUser =
    () => async (dispatch: any, getState: any) => {
        profileAPI.getProfile(getState().auth.id).then((data) => {
            dispatch(setAdditionalInfoUser(data.photos.small, data.fullName));
        });
    };

export const loginMe = (userData: any) => async (dispatch: any) => {
    dispatch(setIsLoading(true));

    const data = await authMeAPI.login(userData);

    if (data.resultCode === LoginResultCodeEnum.Success) {
        dispatch(authMe());
    } else {
        if (data.resultCode === LoginResultCodeEnum.Captch) {
            dispatch(getCuptchaUrl());
        }
        dispatch(
            stopSubmit("login", {
                _error:
                    data.messages.length < 1 ? "Some error" : data.messages[0],
            }),
        );
    }
    dispatch(setIsLoading(false));
};

export const logoutMe = () => async (dispatch: any) => {
    if (window.confirm("Do you really want to leave?")) {
        const data = await authMeAPI.logout();
        if (data.resultCode === ResultCodeEnum.Success) {
            dispatch(clearUserData());
        }
    }
};

export const getCuptchaUrl = () => async (dispatch: any) => {
    const data = await securityAPI.captcha();
    dispatch(setCuptchUrl(data.url));
};

export default AuthReducer;
