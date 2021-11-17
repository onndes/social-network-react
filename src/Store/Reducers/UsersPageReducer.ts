import { AppStateType } from './../Store';
import { Dispatch } from "react";
import { usersAPI, followAPI } from "../../API/API";
import { UsersTypes } from "../../Types/Types";
import { updateImmutableObg } from "../../Utils/ObjectHelp";
import { ThunkAction } from 'redux-thunk';

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
    users: [] as Array<UsersTypes>,
    pageSize: 10,
    totalUserCount: 0,
    currentPage: 1,
    countBtn: 5,
    activeBtn: 1,
    visiblePageBtn: [0, 5] as Array<number>,
    isLoading: true,
    currentPagePrew: null as null | number,
    buttonFollowWork: [] as Array<any>,
};

type InitialStateType = typeof initialState;

const UsersPageReducer = (state = initialState, action: any): InitialStateType => {
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

type ActioinTypes =
    | FollowApplyType
    | UnFollowApplyType
    | SetUsersType
    | SetCurrentPageType
    | SetTotalUsersType
    | SetVisiblePageBtnType
    | SetLoadingType
    | SetCurrentPagePrewType
    | SetCountBtnType
    | ToggleButtonFollowType;


type FollowApplyType = {
    type: typeof FOLLOW;
    id: number;
};
export const followApply = (id: number): FollowApplyType => {
    return { type: FOLLOW, id };
};
type UnFollowApplyType = {
    type: typeof UN_FOLLOW;
    id: number;
};
export const unFollowApply = (id: number): UnFollowApplyType => {
    return { type: UN_FOLLOW, id };
};
type SetUsersType = {
    type: typeof SET_USERS;
    users: UsersTypes;
};
export const setUsers = (users: UsersTypes): SetUsersType => {
    return { type: SET_USERS, users };
};
type SetCurrentPageType = {
    type: typeof CURRENT_PAGE;
    currentPage: number;
};
export const setCurrentPage = (currentPage: number): SetCurrentPageType => {
    return { type: CURRENT_PAGE, currentPage: currentPage };
};
type SetTotalUsersType = {
    type: typeof TOTAL_USERS;
    totalUserCount: number;
};
export const setTotalUsers = (totalUserCount: number): SetTotalUsersType => {
    return { type: TOTAL_USERS, totalUserCount: totalUserCount };
};
type SetVisiblePageBtnType = {
    type: typeof VISIBLE_PAGE;
    visiblePageBtn: number;
};
export const setVisiblePageBtn = (visiblePageBtn: number): SetVisiblePageBtnType => {
    return { type: VISIBLE_PAGE, visiblePageBtn };
};
type SetLoadingType = {
    type: typeof LOADING;
    loading: boolean;
};
export const setLoading = (load: boolean): SetLoadingType => {
    return { type: LOADING, loading: load };
};
type SetCurrentPagePrewType = {
    type: typeof CURRENT_PAGE_PREW;
    currentPagePrew: number;
};
export const setCurrentPagePrew = (currentPagePrew: number): SetCurrentPagePrewType => {
    return { type: CURRENT_PAGE_PREW, currentPagePrew: currentPagePrew };
};
type ToggleButtonFollowType = {
    type: typeof TOOGLE_BUTTON_FOLLOW;
    userId: number;
    toggleButton: number;
};
export const toggleButtonFollow = (toggleButton: any, userId: number): ToggleButtonFollowType => {
    return { type: TOOGLE_BUTTON_FOLLOW, toggleButton, userId };
};
type SetCountBtnType = {
    type: typeof SET_COUNT_BTN;
    countBtn: number;
};
export const setCountBtn = (countBtn: number): SetCountBtnType => {
    return { type: SET_COUNT_BTN, countBtn };
};

type GetStateType = () => AppStateType
type DispatchType = Dispatch<ActioinTypes>
type ThunkActionType = ThunkAction<Promise<void>, AppStateType, unknown, ActioinTypes >

export const getUsers = (currentPage: number, pageSize: number) => {
    return async (dispatch: DispatchType) => {
        dispatch(setLoading(true));
        const data = await usersAPI.getUsers(currentPage, pageSize);
        dispatch(setUsers(data.items));
        dispatch(setTotalUsers(data.totalCount));
        dispatch(setLoading(false));
    };
};
export const getUsersClickBtn = (
    page: number,
    totalUserCount: number,
    pageSize: number,
    isGet: any,
) => {
    return async (dispatch: DispatchType, getState: GetStateType) => {
        dispatch(setLoading(true));
        dispatch(setCurrentPage(page));

        const data = await usersAPI.getUsers(page, pageSize);
        dispatch(setUsers(data.items));

        dispatch(setLoading(false));
    };
};

const _followUnFollow = async (dispatch: any, userId: number, followApi: any, followApply: any) => {
    dispatch(toggleButtonFollow(true, userId));
    const data = await followApi(userId);
    if (data.resultCode === 0) {
        dispatch(followApply(userId));
    } else if (data.status === 429) {
        alert("Ошибка. Status: 429 зазончились delete/post/put запросы на API");
    }
    dispatch(toggleButtonFollow(false, userId));
};

export const follow = (userId: number) => {
    return (dispatch: DispatchType) => {
        _followUnFollow(dispatch, userId, followAPI.follow, followApply);
    };
};
export const unFollow = (userId: number): ThunkActionType  => {
    return async (dispatch: DispatchType) => {
        _followUnFollow(dispatch, userId, followAPI.unFollow, unFollowApply);
    };
};
export default UsersPageReducer;
