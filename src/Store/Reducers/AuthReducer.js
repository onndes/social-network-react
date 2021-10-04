import { stopSubmit } from "redux-form";
import { authMeAPI, profileAPI, securityAPI } from "../../API/API";

const SET_USER_DATA = "AuthReducer/SET_USER_DATA";
const SET_USER_ADDITIONAL_INFO = "AuthReducer/SET_USER_ADDITIONAL_INFO";
const IS_LOADING = "AuthReducer/IS_LOADING";
const CUPTCH_URL = "AuthReducer/CUPTCH_URL";

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    photo: null,
    isLoading: false,
    fullName: null,
    captchaUrl: null,
};

const AuthReducer = (state = initialState, action) => {
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

export const setUserData = (id, email, login, captcha) => {
    return {
        type: SET_USER_DATA,
        data: { id, email, login, isAuth: true, captcha },
    };
};
export const clearUserData = () => {
    return {
        type: SET_USER_DATA,
        data: { id: null, email: null, login: null, isAuth: false, photo: null, fullName: null },
    };
};
export const setAdditionalInfoUser = (photo, fullName) => {
    return {
        type: SET_USER_ADDITIONAL_INFO,
        photo,
        fullName,
    };
};
export const setIsLoading = (isLoading) => {
    return {
        type: IS_LOADING,
        isLoading,
    };
};
export const setCuptchUrl = (captchaUrl) => {
    return {
        type: CUPTCH_URL,
        captchaUrl,
    };
};
// ============================================================
export const authMe = () => async (dispatch, getState) => {
    const data = await authMeAPI.getAuthMe();
    if (data.resultCode === 0) {
        const { email, id, login, captcha } = data.data;
        dispatch(setUserData(id, email, login, captcha));
    }

    profileAPI.getProfile(getState().auth.id).then((data) => {
        dispatch(setAdditionalInfoUser(data.photos.small, data.fullName));
    });
};

export const getAdditionalInfoUser = () => async (dispatch, getState) => {
    profileAPI.getProfile(getState().auth.id).then((data) => {
        dispatch(setAdditionalInfoUser(data.photos.small, data.fullName));
    });
};

export const loginMe = (userData) => async (dispatch) => {
    dispatch(setIsLoading(true));
    const data = await authMeAPI.login(userData);
    if (data.resultCode === 0) {
        dispatch(authMe(data.userId));
    } else {
        if (data.resultCode === 10) {
            dispatch(getCuptchaUrl());
        }
        dispatch(
            stopSubmit("login", {
                _error: data.messages.length < 1 ? "Some error" : data.messages[0],
            }),
        );
    }
    dispatch(setIsLoading(false));
};

export const logoutMe = (userData) => async (dispatch) => {
    if (window.confirm("Do you really want to leave?")) {
        const data = await authMeAPI.logout(userData);
        if (data.data.resultCode === 0) {
            dispatch(clearUserData());
        }
    }
};
export const getCuptchaUrl = () => async (dispatch) => {
    const data = await securityAPI.captcha();
    dispatch(setCuptchUrl(data.url));
};

export default AuthReducer;
