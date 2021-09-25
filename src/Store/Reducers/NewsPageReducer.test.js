// import newsPageReducer, { addPostActionCreator, deletePostActionCreator } from "./NewsPageReducer";

// const state = {
//     posts: [
//         { id: 1, postText: "This is news page" },
//         { id: 2, postText: "Test" },
//     ],
// };

// it("Adding posts, the length should increase by 1", () => {
//     const action = addPostActionCreator("hello");

//     const newState = newsPageReducer(state, action);

//     expect(newState.posts.length).toBe(3);
// });

// it("Test of a new way, removal of post", () => {
//     const action = deletePostActionCreator(1);

//     const newState = newsPageReducer(state, action);

//     expect(newState.posts.length).toBe(1);
// });