const ADD_POST = "NewsPageReducer/ADD_POST";
const DELETE_POST = "NewsPageReducer/DELETE_POST";

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
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter((post) => post.id !== action.id),
            };
        default:
            return state;
    }
};

export const addPostActionCreator = (textBody) => {
    return { type: ADD_POST, textBody };
};
export const deletePostActionCreator = (id) => {
    return { type: DELETE_POST, id };
};

export default newsPageReducer;
