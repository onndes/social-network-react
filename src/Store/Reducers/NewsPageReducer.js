const UPDATE_INPUT_VALUE = "UPDATE-INPUT-VALUE";
const ADD_POST = "ADD-POST";

const initialState = {
    inputValue: "text",
    posts: [],
};

const messagesPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            if (state.inputValue.trim()) {
                return { ...state, posts: [...state.posts, state.inputValue], inputValue: "" };
            }
            return state;
        case UPDATE_INPUT_VALUE:
            return { ...state, inputValue: action.text };
        default:
            return state;
    }
};

export const updataInputValueActionCreator = (text) => {
    return { type: UPDATE_INPUT_VALUE, text: text };
};

export const addPostActionCreator = () => {
    return { type: ADD_POST };
};
export default messagesPageReducer;
