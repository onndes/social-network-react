<<<<<<< HEAD
// import { ActionsTypes, AppStateType } from "./../Store";
// import { Dispatch } from "redux";
// import { usersAPI, followAPI } from "../../API/API";
// import { UsersTypes } from "../../Types/Types";
// import { updateImmutableObg } from "../../Utils/ObjectHelp";
// import { ThunkAction } from "redux-thunk";

// const FOLLOW = "UsersPageReducer/FOLLOW";
// const UN_FOLLOW = "UsersPageReducer/UN_FOLLOW";
// const SET_USERS = "UsersPageReducer/SET_USERS";
// const CURRENT_PAGE = "UsersPageReducer/CURRENT_PAGE";
// const TOTAL_USERS = "UsersPageReducer/TOTAL_USERS";
// const VISIBLE_PAGE = "UsersPageReducer/VISIBLE_PAGE";
// const LOADING = "UsersPageReducer/LOADING";
// const CURRENT_PAGE_PREW = "UsersPageReducer/CURRENT_PAGE_PREW";
// const TOOGLE_BUTTON_FOLLOW = "UsersPageReducer/TOOGLE_BUTTON_FOLLOW";
// const SET_COUNT_BTN = "UsersPageReducer/SET_COUNT_BTN";

// const initialState = {
//     users: [] as Array<UsersTypes>,
//     pageSize: 10,
//     totalUserCount: 0,
//     currentPage: 1,
//     countBtn: 5,
//     activeBtn: 1,
//     visiblePageBtn: [0, 5] as Array<number>,
//     isLoading: true,
//     currentPagePrew: null as null | number,
//     buttonFollowWork: [] as Array<any>,
// };

// type InitialStateType = typeof initialState;

// const UsersPageReducer = (state = initialState, action: ActioinTypes): InitialStateType => {
//     switch (action.type) {
//         case FOLLOW:
//             return {
//                 ...state,
//                 users: updateImmutableObg(state.users, "id", action.id, { followed: true }),
//             };
//         case UN_FOLLOW:
//             return {
//                 ...state,
//                 users: updateImmutableObg(state.users, "id", action.id, { followed: false }),
//             };
//         case SET_USERS:
//             return {
//                 ...state,
//                 users: [...action.users],
//             };
//         case CURRENT_PAGE:
//             return {
//                 ...state,
//                 currentPage: action.currentPage,
//             };
//         case TOTAL_USERS:
//             return {
//                 ...state,
//                 totalUserCount: action.totalUserCount,
//             };
//         case VISIBLE_PAGE:
//             return {
//                 ...state,
//                 visiblePageBtn: action.visiblePageBtn,
//             };
//         case LOADING:
//             return {
//                 ...state,
//                 isLoading: action.loading,
//             };
//         case CURRENT_PAGE_PREW:
//             return {
//                 ...state,
//                 currentPagePrew: action.currentPagePrew,
//             };
//         case TOOGLE_BUTTON_FOLLOW:
//             return {
//                 ...state,
//                 buttonFollowWork: action.toggleButton
//                     ? [...state.buttonFollowWork, action.userId]
//                     : state.buttonFollowWork.filter((i) => i !== action.userId),
//             };
//         case SET_COUNT_BTN:
//             return {
//                 ...state,

//                 countBtn: action.countBtn,
//             };
//         default:
//             return state;
//     }
// };

// type ActioinTypes = ActionsTypes<typeof actions>;

// export const actions = {
//     followApply: (id: number) => ({ type: FOLLOW, id } as const),
//     unFollowApply: (id: number) => ({ type: UN_FOLLOW, id } as const),
//     setUsers: (users: Array<UsersTypes>) => ({ type: SET_USERS, users }),
//     setCurrentPage: (currentPage: number) => ({ type: CURRENT_PAGE, currentPage } as const),
//     setTotalUsers: (totalUserCount: number) =>
//         ({
//             type: TOTAL_USERS,
//             totalUserCount,
//         } as const),
//     setVisiblePageBtn: (visiblePageBtn: Array<number>) =>
//         ({ type: VISIBLE_PAGE, visiblePageBtn } as const),
//     setLoading: (load: boolean) => ({ type: LOADING, loading: load } as const),
//     setCurrentPagePrew: (currentPagePrew: number) =>
//         ({
//             type: CURRENT_PAGE_PREW,
//             currentPagePrew,
//         } as const),
//     toggleButtonFollow: (toggleButton: any, userId: number) =>
//         ({
//             type: TOOGLE_BUTTON_FOLLOW,
//             toggleButton,
//             userId,
//         } as const),
//     setCountBtn: (countBtn: number) => ({ type: SET_COUNT_BTN, countBtn } as const),
// };

// // =========================== Thunks
// // =========================== Thunks
// // =========================== Thunks

// type GetStateType = () => AppStateType;
// type DispatchType = Dispatch<ActioinTypes>;
// type ThunkActionType = ThunkAction<Promise<void>, AppStateType, unknown, ActioinTypes>;

// export const getUsers = (currentPage: number, pageSize: number): ThunkActionType => {
//     return async (dispatch: DispatchType) => {
//         dispatch(actions.setLoading(true));
//         const data = await usersAPI.getUsers(currentPage, pageSize);
//         dispatch(actions.setUsers(data.items));
//         dispatch(actions.setTotalUsers(data.totalCount));
//         dispatch(actions.setLoading(false));
//     };
// };
// export const getUsersClickBtn = (
//     page: number,
//     totalUserCount: number,
//     pageSize: number,
//     isGet: any,
// ): ThunkActionType => {
//     return async (dispatch: DispatchType, getState: GetStateType) => {
//         dispatch(actions.setLoading(true));
//         dispatch(actions.setCurrentPage(page));

//         const data = await usersAPI.getUsers(page, pageSize);
//         dispatch(actions.setUsers(data.items));

//         dispatch(actions.setLoading(false));
//     };
// };

// const _followUnFollow = async (dispatch: any, userId: number, followApi: any, followApply: any) => {
//     dispatch(actions.toggleButtonFollow(true, userId));
//     const data = await followApi(userId);
//     if (data.resultCode === 0) {
//         dispatch(followApply(userId));
//     } else if (data.status === 429) {
//         alert("Ошибка. Status: 429 зазончились delete/post/put запросы на API");
//     }
//     dispatch(actions.toggleButtonFollow(false, userId));
// };

// export const follow = (userId: number): ThunkActionType => {
//     return async (dispatch: DispatchType) => {
//         _followUnFollow(dispatch, userId, followAPI.follow, actions.followApply);
//     };
// };
// export const unFollow = (userId: number): ThunkActionType => {
//     return async (dispatch: DispatchType) => {
//         _followUnFollow(dispatch, userId, followAPI.unFollow, actions.unFollowApply);
//     };
// };
// export default UsersPageReducer;
=======
import { ActionsTypes, AppStateType } from "./../Store";
import { Dispatch } from "redux";
import { usersAPI, followAPI } from "../../API/API";
import { UsersTypes } from "../../Types/Types";
import { updateImmutableObg } from "../../Utils/ObjectHelp";
import { ThunkAction } from "redux-thunk";

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

const UsersPageReducer = (state = initialState, action: ActioinTypes): InitialStateType => {
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

type ActioinTypes = ActionsTypes<typeof actions>;

export const actions = {
    followApply: (id: number) => ({ type: FOLLOW, id } as const),
    unFollowApply: (id: number) => ({ type: UN_FOLLOW, id } as const),
    setUsers: (users: Array<UsersTypes>) => ({ type: SET_USERS, users }),
    setCurrentPage: (currentPage: number) => ({ type: CURRENT_PAGE, currentPage } as const),
    setTotalUsers: (totalUserCount: number) =>
        ({
            type: TOTAL_USERS,
            totalUserCount,
        } as const),
    setVisiblePageBtn: (visiblePageBtn: Array<number>) =>
        ({ type: VISIBLE_PAGE, visiblePageBtn } as const),
    setLoading: (load: boolean) => ({ type: LOADING, loading: load } as const),
    setCurrentPagePrew: (currentPagePrew: number) =>
        ({
            type: CURRENT_PAGE_PREW,
            currentPagePrew,
        } as const),
    toggleButtonFollow: (toggleButton: any, userId: number) =>
        ({
            type: TOOGLE_BUTTON_FOLLOW,
            toggleButton,
            userId,
        } as const),
    setCountBtn: (countBtn: number) => ({ type: SET_COUNT_BTN, countBtn } as const),
};

// =========================== Thunks
// =========================== Thunks
// =========================== Thunks

type GetStateType = () => AppStateType;
type DispatchType = Dispatch<ActioinTypes>;
type ThunkActionType = ThunkAction<Promise<void>, AppStateType, unknown, ActioinTypes>;

export const getUsers = (currentPage: number, pageSize: number): ThunkActionType => {
    return async (dispatch: DispatchType) => {
        dispatch(actions.setLoading(true));
        const data = await usersAPI.getUsers(currentPage, pageSize);
        dispatch(actions.setUsers(data.items));
        dispatch(actions.setTotalUsers(data.totalCount));
        dispatch(actions.setLoading(false));
    };
};
export const getUsersClickBtn = (
    page: number,
    totalUserCount: number,
    pageSize: number,
    isGet: any,
): ThunkActionType => {
    return async (dispatch: DispatchType, getState: GetStateType) => {
        dispatch(actions.setLoading(true));
        dispatch(actions.setCurrentPage(page));

        const data = await usersAPI.getUsers(page, pageSize);
        dispatch(actions.setUsers(data.items));

        dispatch(actions.setLoading(false));
    };
};

const _followUnFollow = async (dispatch: any, userId: number, followApi: any, followApply: any) => {
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
    return async (dispatch: DispatchType) => {
        _followUnFollow(dispatch, userId, followAPI.follow, actions.followApply);
    };
};
export const unFollow = (userId: number): ThunkActionType => {
    return async (dispatch: DispatchType) => {
        _followUnFollow(dispatch, userId, followAPI.unFollow, actions.unFollowApply);
    };
};
export default UsersPageReducer;
>>>>>>> b631e2e648d0a8ee39515ea67886677de3f7712e
