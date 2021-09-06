import { usersAPI, followAPI } from "../../API/API";

const FOLLOW = "FOLLOW";
const UN_FOLLOW = "UN-FOLLOW";
const SET_USERS = "SET-USERS";
const CURRENT_PAGE = "CURRENT-PAGE";
const TOTAL_USERS = "TOTAL-USERS";
const VISIBLE_PAGE = "VISIBLE-PAGE";
const LOADING = "LOADING";
const CURRENT_PAGE_PREW = "CURRENT-PAGE-PREW";
const TOOGLE_BUTTON_FOLLOW = "TOOGLE-BUTTON-FOLLOW";

const initialState = {
    users: [],
    pageSize: 10,
    totalUserCount: 0,
    currentPage: 1,
    visiblePageBtn: [0, 7],
    isLoading: true,
    currentPagePrew: null,
    buttonFollowWork: [],
};

const UsersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.id) {
                        return { ...user, followed: true };
                    }
                    return user;
                }),
            };
        case UN_FOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.id) {
                        return { ...user, followed: false };
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
            console.log(`Total users: ${action.totalUserCount}`);
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
        case CURRENT_PAGE_PREW:
            return {
                ...state,
                currentPagePrew: action.currentPagePrew,
            };
        case TOOGLE_BUTTON_FOLLOW:
            return {
                ...state,
                buttonFollowWork: action.toggleButton
                    ? [...state.buttonFollowWork, action.userId]
                    : state.buttonFollowWork.filter((i) => i !== action.userId),
            };

        default:
            return state;
    }
};

export const followApply = (id) => {
    return { type: FOLLOW, id };
};
export const unFollowApply = (id) => {
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
    return { type: VISIBLE_PAGE, visiblePageBtn };
};
export const setLoading = (load) => {
    return { type: LOADING, loading: load };
};
export const setCurrentPagePrew = (currentPagePrew) => {
    return { type: CURRENT_PAGE_PREW, currentPagePrew: currentPagePrew };
};
export const toggleButtonFollow = (toggleButton, userId) => {
    return { type: TOOGLE_BUTTON_FOLLOW, toggleButton, userId };
};

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setLoading(true));
        usersAPI.getUsers(currentPage, pageSize).then((data) => {
            dispatch(setUsers(data.items));
            dispatch(setTotalUsers(data.totalCount));
            dispatch(setLoading(false));
        });
    };
};
export const getUsersClickBtn = (page, totalUserCount, pageSize) => {
    return (dispatch) => {
        dispatch(setLoading(true));
        dispatch(setCurrentPage(page));

        const countPage = Math.ceil(totalUserCount / pageSize);

        if (countPage > 7) {
            if (page < 5) {
                dispatch(setVisiblePageBtn([0, 7]));
            } else if (page > countPage - 4) {
                dispatch(setVisiblePageBtn([countPage - 7, countPage]));
            } else {
                dispatch(setVisiblePageBtn([page - 4, page + 3]));
            }
        } else {
            dispatch(setVisiblePageBtn([0, countPage]));
        }

        usersAPI.getUsers(page, pageSize).then((data) => {
            dispatch(setUsers(data.items));
            dispatch(setLoading(false));
        });
    };
};

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleButtonFollow(true, userId));
        followAPI.follow(userId).then((data) => {
            if (data.resultCode === 0) {
                dispatch(followApply(userId));
            } else if (data.status === 429) {
                alert("Ошибка. Status: 429 зазончились delete/post/put запросы на API");
            }
            dispatch(toggleButtonFollow(false, userId));
        });
    };
};
export const unFollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleButtonFollow(true, userId));
        followAPI.unFollow(userId).then((data) => {
            if (data.resultCode === 0) {
                dispatch(unFollowApply(userId));
            } else if (data.status === 429) {
                alert("Ошибка. status: 429 зазончились delete/post/put запросы на API");
            }
            dispatch(toggleButtonFollow(false, userId));
        });
    };
};
export default UsersPageReducer;
