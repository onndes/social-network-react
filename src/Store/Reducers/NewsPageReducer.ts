const ADD_POST = "NewsPageReducer/ADD_POST";
const DELETE_POST = "NewsPageReducer/DELETE_POST";

type PostsTypes = {
    id: number | null;
    postText: string | null;
};
const initialState = {
    posts: [
        { id: 1, postText: "This is news page" },
        { id: 2, postText: "Test" },
    ] as Array<PostsTypes>,
};

export type InitialStateType = typeof initialState

const newsPageReducer = (state = initialState, action: any) => {
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

export const addPostActionCreator = (textBody: string) => {
    return { type: ADD_POST, textBody };
};
export const deletePostActionCreator = (id: number) => {
    return { type: DELETE_POST, id };
};

export default newsPageReducer;
