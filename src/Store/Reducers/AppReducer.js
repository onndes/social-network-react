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

export { setInitialSuccess };
export default AppReducer;
