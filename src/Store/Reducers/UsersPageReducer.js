import { usersAPI, followAPI } from "../../API/API";
import { updateImmutableObg } from "./../../Utils/ObjectHelp";

const FOLLOW = "UsersPageReducer/FOLLOW";
const UN_FOLLOW = "UsersPageReducer/UN_FOLLOW";
const SET_USERS = "UsersPageReducer/SET_USERS";
const CURRENT_PAGE = "UsersPageReducer/CURRENT_PAGE";
const TOTAL_USERS = "UsersPageReducer/TOTAL_USERS";
const VISIBLE_PAGE = "UsersPageReducer/VISIBLE_PAGE";
const LOADING = "UsersPageReducer/LOADING";
const CURRENT_PAGE_PREW = "UsersPageReducer/CURRENT_PAGE_PREW";
const TOOGLE_BUTTON_FOLLOW = "UsersPageReducer/TOOGLE_BUTTON_FOLLOW";
const SET_COUNT_BTN = "UsersPageReducer/SET_COUNT_BTN";

const initialState = {
    users: [],
    pageSize: 10,
    totalUserCount: 0,
    currentPage: 1,
    countBtn: 5,
    activeBtn: 1,
    visiblePageBtn: [0, 5],
    isLoading: true,
    currentPagePrew: null,
    buttonFollowWork: [],
};

const UsersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateImmutableObg(state.users, "id", action.id, { followed: true }),
            };
        case UN_FOLLOW:
            return {
                ...state,
                users: updateImmutableObg(state.users, "id", action.id, { followed: false }),
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
        case SET_COUNT_BTN:
            return {
                ...state,
                countBtn: action.countBtn,
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
export const setCountBtn = (countBtn) => {
    return { type: SET_COUNT_BTN, countBtn };
};

export const getUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(setLoading(true));
        const data = await usersAPI.getUsers(currentPage, pageSize);
        dispatch(setUsers(data.items));
        dispatch(setTotalUsers(data.totalCount));
        dispatch(setLoading(false));
    };
};
export const getUsersClickBtn = (page, totalUserCount, pageSize, isGet) => {
    return async (dispatch, getState) => {
        dispatch(setLoading(true));
        dispatch(setCurrentPage(page));

        const data = await usersAPI.getUsers(page, pageSize);
        dispatch(setUsers(data.items));
        
        dispatch(setLoading(false));
    };
};

const followUnFollow = async (dispatch, userId, followApi, followApply) => {
    dispatch(toggleButtonFollow(true, userId));
    const data = await followApi(userId);
    if (data.resultCode === 0) {
        dispatch(followApply(userId));
    } else if (data.status === 429) {
        alert("Ошибка. Status: 429 зазончились delete/post/put запросы на API");
    }
    dispatch(toggleButtonFollow(false, userId));
};

export const follow = (userId) => {
    return (dispatch) => {
        followUnFollow(dispatch, userId, followAPI.follow, followApply);
    };
};
export const unFollow = (userId) => {
    return async (dispatch) => {
        followUnFollow(dispatch, userId, followAPI.unFollow, unFollowApply);
    };
};
export default UsersPageReducer;
