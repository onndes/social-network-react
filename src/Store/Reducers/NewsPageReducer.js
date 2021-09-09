const ADD_POST = "ADD-POST";

const initialState = {
    inputValue: "text",
    posts: [],
};

const messagesPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            if (state.inputValue.trim()) {
                return { ...state, posts: [...state.posts, action.textBody] };
            }
            return state;
        default:
            return state;
    }
};

export const addPostActionCreator = (textBody) => {
    return { type: ADD_POST, textBody };
};
export default messagesPageReducer;
