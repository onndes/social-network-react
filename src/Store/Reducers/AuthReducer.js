const SET_USER_DATA = "SET-USER-DATA";
const SET_USER_PHOTO = "SET-USER-PHOTO";

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    photo: null,
};

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            };
        case SET_USER_PHOTO:
            return {
                ...state,
                photo: action.photo,
            };
        default:
            return state;
    }
};

export const setUserData = (id, email, login) => {
    return {
        type: SET_USER_DATA,
        data: { id, email, login },
    };
};
export const setUserPhoto = (photo) => {
    return {
        type: SET_USER_PHOTO,
        photo,
    };
};

export default AuthReducer;
