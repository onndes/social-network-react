const UPDATE_INPUT_VALUE = "UPDATE-INPUT-VALUE";
const ADD_POST = "ADD-POST";
const store = {
    state: {
        messagesPage: {
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
            const { inputValue, posts } = this.state.messagesPage;
            if (inputValue.trim()) {
                posts.push(inputValue);
                this.state.messagesPage.inputValue = "";
                this.updateTree(store);
            }
        } else if (action.type === UPDATE_INPUT_VALUE) {
            this.state.messagesPage.inputValue = action.text;
            this.updateTree(store);
        }
    },
};

const updataInputValueActionCreator = (text) => {
    return { type: UPDATE_INPUT_VALUE, text: text };
};

const addPostActionCreator = () => {
    return { type: ADD_POST };
};
console.log('test')
export default store;
export { updataInputValueActionCreator, addPostActionCreator };
