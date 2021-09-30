import { stopSubmit } from "redux-form";
import { authMeAPI, profileAPI } from "../../API/API";

const SET_USER_DATA = "AuthReducer/SET_USER_DATA";
const SET_USER_ADDITIONAL_INFO = "AuthReducer/SET_USER_ADDITIONAL_INFO";
const IS_LOADING = "AuthReducer/IS_LOADING";

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    photo: null,
    isLoading: false,
    fullName: null,
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
        default:
            return state;
    }
};

export const setUserData = (id, email, login) => {
    return {
        type: SET_USER_DATA,
        data: { id, email, login, isAuth: true },
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

export const authMe = () => async (dispatch, getState) => {
    const data = await authMeAPI.getAuthMe();
    if (data.resultCode === 0) {
        const { email, id, login } = data.data;
        dispatch(setUserData(id, email, login));
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
        dispatch(
            stopSubmit("login", {
                _error: data.messages.length < 1 ? "Some error" : data.messages[0],
            }),
        );
    }
    dispatch(setIsLoading(false));
};

export const logoutMe = (userData) => async (dispatch) => {
    const data = await authMeAPI.logout(userData);
    if (data.data.resultCode === 0) {
        dispatch(clearUserData());
    }
};

export default AuthReducer;
