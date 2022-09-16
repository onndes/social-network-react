import { BaseThunkType, InferActionsTypes } from "./../Store";
import { UsersTypes } from "../../Types/Types";
import { updateImmutableObg } from "../../Utils/ObjectHelp";
import { usersAPI } from "../../API/UsersAPI";
import { followAPI } from "../../API/FollowAPI";

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

const UsersPageReducer = (
    state = initialState,
    action: ActionsTypes,
): InitialStateType => {
    switch (action.type) {
        case "UsersPageReducer/FOLLOW":
            return {
                ...state,
                users: updateImmutableObg(state.users, "id", action.id, {
                    followed: true,
                }),
            };
        case "UsersPageReducer/UN_FOLLOW":
            return {
                ...state,
                users: updateImmutableObg(state.users, "id", action.id, {
                    followed: false,
                }),
            };
        case "UsersPageReducer/SET_USERS":
            return {
                ...state,
                users: action.users ? [...action.users] : [],
            };
        case "UsersPageReducer/CURRENT_PAGE":
            return {
                ...state,
                currentPage: action.currentPage,
            };
        case "UsersPageReducer/TOTAL_USERS":
            return {
                ...state,
                totalUserCount: action.totalUserCount,
            };
        case "UsersPageReducer/VISIBLE_PAGE":
            return {
                ...state,
                visiblePageBtn: action.visiblePageBtn,
            };
        case "UsersPageReducer/LOADING":
            return {
                ...state,
                isLoading: action.loading,
            };
        case "UsersPageReducer/CURRENT_PAGE_PREW":
            return {
                ...state,
                currentPagePrew: action.currentPagePrew,
            };
        case "UsersPageReducer/TOOGLE_BUTTON_FOLLOW":
            return {
                ...state,
                buttonFollowWork: action.toggleButton
                    ? [...state.buttonFollowWork, action.userId]
                    : state.buttonFollowWork.filter((i) => i !== action.userId),
            };
        case "UsersPageReducer/SET_COUNT_BTN":
            return {
                ...state,
                countBtn: action.countBtn,
            };
        default:
            return state;
    }
};
type ActionsTypes = InferActionsTypes<typeof actions>;

export const actions = {
    followApply: (id: number) =>
        ({ type: "UsersPageReducer/FOLLOW", id } as const),
    unFollowApply: (id: number) =>
        ({ type: "UsersPageReducer/UN_FOLLOW", id } as const),
    setUsers: (users: Array<UsersTypes>) =>
        ({ type: "UsersPageReducer/SET_USERS", users } as const),
    setCurrentPage: (currentPage: number) =>
        ({ type: "UsersPageReducer/CURRENT_PAGE", currentPage } as const),
    setTotalUsers: (totalUserCount: number) =>
        ({
            type: "UsersPageReducer/TOTAL_USERS",
            totalUserCount,
        } as const),
    setVisiblePageBtn: (visiblePageBtn: Array<number>) =>
        ({ type: "UsersPageReducer/VISIBLE_PAGE", visiblePageBtn } as const),
    setLoading: (load: boolean) =>
        ({ type: "UsersPageReducer/LOADING", loading: load } as const),
    setCurrentPagePrew: (currentPagePrew: number | null) =>
        ({
            type: "UsersPageReducer/CURRENT_PAGE_PREW",
            currentPagePrew,
        } as const),
    toggleButtonFollow: (toggleButton: any, userId: number) =>
        ({
            type: "UsersPageReducer/TOOGLE_BUTTON_FOLLOW",
            toggleButton,
            userId,
        } as const),
    setCountBtn: (countBtn: number) =>
        ({ type: "UsersPageReducer/SET_COUNT_BTN", countBtn } as const),
};

type ThunkActionType = BaseThunkType<ActionsTypes>;

export const getUsers = (
    currentPage: number,
    pageSize: number,
): ThunkActionType => {
    return async (dispatch) => {
        dispatch(actions.setLoading(true));
        const data = await usersAPI.getUsers(currentPage, pageSize);

        dispatch(actions.setUsers(data.items));
        dispatch(actions.setTotalUsers(data.totalCount));
        dispatch(actions.setLoading(false));
    };
};
export const getUsersClickBtn = (
    page: number,
    pageSize: number,
): ThunkActionType => {
    return async (dispatch) => {
        dispatch(actions.setLoading(true));
        dispatch(actions.setCurrentPage(page));
        const data = await usersAPI.getUsers(page, pageSize);
        dispatch(actions.setUsers(data.items));
        dispatch(actions.setLoading(false));
    };
};

const _followUnFollow = async (
    dispatch: any,
    userId: number,
    followApi: any,
    followApply: any,
) => {
    dispatch(actions.toggleButtonFollow(true, userId));
    const data = await followApi(userId);
    if (data.resultCode === 0) {
        dispatch(followApply(userId));
    } else if (data.status === 429) {
        alert("Ошибка. Status: 429 зазончились delete/post/put запросы на API");
    }
    dispatch(actions.toggleButtonFollow(false, userId));
};

export const follow = (userId: number): ThunkActionType => {
    return async (dispatch) => {
        _followUnFollow(
            dispatch,
            userId,
            followAPI.follow,
            actions.followApply,
        );
    };
};

export const unFollow = (userId: number): ThunkActionType => {
    return async (dispatch) => {
        _followUnFollow(
            dispatch,
            userId,
            followAPI.unFollow,
            actions.unFollowApply,
        );
    };
};
export default UsersPageReducer;
