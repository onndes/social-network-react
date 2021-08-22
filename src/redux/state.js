const UPDATE_INPUT_VALUE = "UPDATE-INPUT-VALUE";
const ADD_POST = "ADD-POST";
const store = {
    state: {
        messagesPage: {},
        newesPage: {
            inputValue: "text",
            posts: [],
        },
    },

    updateTree() {},

    subscribe(observer) {
        this.updateTree = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            const { inputValue, posts } = this.state.newesPage;
            if (inputValue.trim()) {
                posts.push(inputValue);
                this.state.newesPage.inputValue = "";
                this.updateTree(store);
            }
        } else if (action.type === UPDATE_INPUT_VALUE) {
            this.state.newesPage.inputValue = action.text;
            this.updateTree(store);
        }
    },
};

export const updataInputValueActionCreator = (text) => {
    return { type: UPDATE_INPUT_VALUE, text: text };
};

export const addPostActionCreator = () => {
    return { type: ADD_POST };
};
console.log("test");
console.log("test");
export default store;
