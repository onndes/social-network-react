const ADD_POST = "ADD_POST";

const initialState = {
    posts: [
        { id: 1, postText: "This is news page" },
        { id: 2, postText: "Test" },
    ],
};

const newsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, { id: state.posts.length + 1, postText: action.textBody }],
            };
        default:
            return state;
    }
};

export const addPostActionCreator = (textBody) => {
    return { type: ADD_POST, textBody };
};

export default newsPageReducer;
