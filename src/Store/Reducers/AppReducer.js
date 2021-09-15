import { authMe } from "./AuthReducer";
import { getUsers } from "./UsersPageReducer";

const INITIAL_SUCCESS = "INITIAL_SUCCESS";

const initialState = {
    initialSucsses: false,
};

const AppReducer = (state = initialState, action) => {
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

const setInitialSuccess = () => {
    return {
        type: INITIAL_SUCCESS,
    };
};

const startInitial = () => (dispatch) => {
    const authMePromise = dispatch(authMe());
    const getUsersPromise = dispatch(getUsers(1, 10));

    Promise.all([authMePromise, getUsersPromise]).then(() => {
        dispatch(setInitialSuccess());
    });
};

export { startInitial };
export default AppReducer;
