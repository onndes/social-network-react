const UPDATE_INPUT_VALUE = "UPDATE-INPUT-VALUE";
const ADD_POST = "ADD-POST";

const initialState = {
    inputValue: "text",
    posts: [],
};

const messagesPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let { inputValue, posts } = state;
            let stateCopy = { ...state };
            if (inputValue.trim()) {
                stateCopy.posts = [...posts, inputValue];
                stateCopy.inputValue = "";
                return stateCopy;
            }
            return state;
        case UPDATE_INPUT_VALUE:
            let stateCopyTwo = { ...state };
            stateCopyTwo.inputValue = action.text;
            return stateCopyTwo;
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
