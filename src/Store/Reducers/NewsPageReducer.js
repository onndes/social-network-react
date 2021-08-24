const UPDATE_INPUT_VALUE = "UPDATE-INPUT-VALUE";
const ADD_POST = "ADD-POST";

const initialState = {
    inputValue: "text",
    posts: [],
};

const messagesPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const { inputValue, posts } = state;
            if (inputValue.trim()) {
                posts.push(inputValue);
                state.inputValue = "";
            }
            return state;
        case UPDATE_INPUT_VALUE:
            state.inputValue = action.text;
            return state;
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
