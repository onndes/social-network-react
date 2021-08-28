const FOLLOW = "FOLLOW";
const UN_FOLLOW = "UN-FOLLOW";
const SET_USERS = "SET-USERS";

const initialState = {
    users: [],
};

const UsersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.id) {
                        return { ...user, follow: true };
                    }
                    return user;
                }),
            };
        case UN_FOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.id) {
                        return { ...user, follow: false };
                    }
                    return user;
                }),
            };
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users],
            };
        default:
            return state;
    }
};

export const followAC = (id) => {
    return { type: FOLLOW, id };
};
export const unFollowAC = (id) => {
    return { type: UN_FOLLOW, id };
};
export const setUsersAC = (users) => {
    return { type: SET_USERS, users };
};
export default UsersPageReducer;
