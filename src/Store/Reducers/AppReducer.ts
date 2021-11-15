import { authMe } from "./AuthReducer";
import { getUsers } from "./UsersPageReducer";

const INITIAL_SUCCESS = "AppReducer/INITIAL_SUCCESS";

const initialState = {
    initialSucsses: false,
};

export type InitialStateType = typeof initialState;

const AppReducer = (state = initialState, action: any): InitialStateType => {
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

type SetInitialSuccessType = {
  type: typeof INITIAL_SUCCESS,
}
const setInitialSuccess = (): SetInitialSuccessType => {
    return {
        type: INITIAL_SUCCESS,
    };
};

const startInitial = () => (dispatch: any) => {
    const authMePromise = dispatch(authMe());
    const getUsersPromise = dispatch(getUsers(1, 10));

    Promise.all([authMePromise, getUsersPromise]).then(() => {
        dispatch(setInitialSuccess());
    });
};

export { startInitial };
export default AppReducer;
