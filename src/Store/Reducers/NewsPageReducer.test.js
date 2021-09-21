import newsPageReducer, { addPostActionCreator } from "./NewsPageReducer";

const state = {
    posts: ["1 day", "PC", "work day"],
};

it("Adding posts, the length should increase by 1", () => {
    const action = addPostActionCreator("hello");

    const newState = newsPageReducer(state, action);

    expect(newState.posts.length).toBe(4);
});