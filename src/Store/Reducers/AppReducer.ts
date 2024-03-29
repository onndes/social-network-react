import { BaseThunkType, InferActionsTypes } from "../Store";
import { authMe } from "./AuthReducer";
import { getUsers } from "./UsersPageReducer";

const INITIAL_SUCCESS = "AppReducer/INITIAL_SUCCESS";

const initialState = {
    initialSucsses: false,
};

export type InitialStateType = typeof initialState;

const AppReducer = (
    state = initialState,
    action: ActionsTypes,
): InitialStateType => {
    switch (action.type) {
        case INITIAL_SUCCESS:
            return {
                ...state,
                initialSucsses: true,
            };
        default:
            return state;
    }
};

export type ActionsTypes = InferActionsTypes<typeof actions>;

export const actions = {
    setInitialSuccess: () => ({ type: INITIAL_SUCCESS } as const),
};

type ThunkActionType = BaseThunkType<ActionsTypes>;

// Инициализаци приложения
const startInitial = (): ThunkActionType => (dispatch) => {
    const authMePromise = dispatch(authMe());
    const getUsersPromise = dispatch(getUsers(1, 10));
    return Promise.all([authMePromise, getUsersPromise]).then(() => {
        dispatch(actions.setInitialSuccess());
    });
};

export { startInitial };
export default AppReducer;
