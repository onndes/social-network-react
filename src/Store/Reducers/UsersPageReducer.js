const FOLLOW = "FOLLOW";
const UN_FOLLOW = "UN-FOLLOW";
const SET_USERS = "SET-USERS";
const CURRENT_PAGE = "CURRENT-PAGE";
const TOTAL_USERS = "TOTAL-USERS";
const VISIBLE_PAGE = "VISIBLE-PAGE";
const LOADING = "LOADING";

const initialState = {
    users: [],
    pageSize: 10,
    totalUserCount: 0,
    currentPage: 1,
    visiblePageBtn: [1, 6],
    isLoading: true,
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
                users: [...action.users],
            };
        case CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            };
        case TOTAL_USERS:
            return {
                ...state,
                totalUserCount: action.totalUserCount,
            };
        case VISIBLE_PAGE:
            return {
                ...state,
                visiblePageBtn: action.visiblePageBtn,
            };
        case LOADING:
            
            return {
                ...state,
                isLoading: action.loading,
            };
        default:
            return state;
    }
};

export const follow = (id) => {
    return { type: FOLLOW, id };
};
export const unFollow = (id) => {
    return { type: UN_FOLLOW, id };
};
export const setUsers = (users) => {
    return { type: SET_USERS, users };
};
export const setCurrentPage = (currentPage) => {
    return { type: CURRENT_PAGE, currentPage: currentPage };
};
export const setTotalUsers = (totalUserCount) => {
    return { type: TOTAL_USERS, totalUserCount: totalUserCount };
};
export const setVisiblePageBtn = (visiblePageBtn) => {
    return { type: VISIBLE_PAGE, visiblePageBtn: visiblePageBtn };
};
export const setLoading = (load) => {
    return { type: LOADING, loading: load };
};

export default UsersPageReducer;
