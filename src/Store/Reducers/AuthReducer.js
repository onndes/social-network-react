import { stopSubmit } from "redux-form";
import { authMeAPI, profileAPI } from "../../API/API";

const SET_USER_DATA = "SET-USER-DATA";
const SET_USER_PHOTO = "SET-USER-PHOTO";
const IS_LOADING = "IS_LOADING";

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    photo: null,
    isLoading: false,
};

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            };
        case SET_USER_PHOTO:
            return {
                ...state,
                photo: action.photo,
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
        data: { id: null, email: null, login: null, isAuth: false, photo: null },
    };
};
export const setUserPhoto = (photo) => {
    return {
        type: SET_USER_PHOTO,
        photo,
    };
};
export const setIsLoading = (isLoading) => {
    return {
        type: IS_LOADING,
        isLoading,
    };
};

export const authMe = (id) => (dispatch) => {
    return authMeAPI.getAuthMe().then((data) => {
        if (data.resultCode === 0) {
            const { email, id, login } = data.data;
            dispatch(setUserData(id, email, login));
        }
    });

    // if (id) {
    //     profileAPI.getProfile(id).then((data) => {
    //         dispatch(setUserPhoto(data.photos.small));
    //     });
    // }
};

export const loginMe = (userData) => (dispatch) => {
    dispatch(setIsLoading(true));
    authMeAPI.login(userData).then((data) => {
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
    });
};

export const logoutMe = (userData) => (dispatch) => {
    authMeAPI.logout(userData).then((data) => {
        if (data.resultCode === 0) {
            dispatch(clearUserData());
        }
    });
};

export default AuthReducer;
