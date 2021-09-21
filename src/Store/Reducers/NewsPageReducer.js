const ADD_POST = "ADD-POST";

const initialState = {
    posts: ["1 day", "PC", "work day"],
};

const newsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            if (1) {
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
export default newsPageReducer;
