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
        if (action.type === "ADD-POST") {
            const { inputValue, posts } = this.state.messagesPage;
            if (inputValue.trim()) {
                posts.push(inputValue);
                this.state.messagesPage.inputValue = "";
                this.updateTree(store);
            }
        } else if (action.type === "UPDATE-INPUT-VALUE") {
            this.state.messagesPage.inputValue = action.text;
            this.updateTree(store);
        }
    },
};

const updataInputValueActionCreator = (text) => {
    return { type: "UPDATE-INPUT-VALUE", text: text };
};

const addPostActionCreator = () => {
    return { type: "ADD-POST" };
};

export default store;
export {updataInputValueActionCreator, addPostActionCreator}