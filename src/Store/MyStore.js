import messagesPageReducerReducer from "./Reducers/MessagesPageReducer";
import NewsPageReducer from "./Reducers/NewsPageReducer";

const store = {
    state: {
        messagesPage: {
            messageBodyText: "",
            messages: ["Hello"],
        },
        newsPage: {
            inputValue: "text",
            posts: [],
        },
    },

    getState() {
        return this.state;
    },

    updateTree() {},

    subscribe(observer) {
        this.updateTree = observer;
    },

    dispatch(action) {
        this.state.messagesPage = messagesPageReducerReducer(this.state.messagesPage, action);
        this.state.newsPage = NewsPageReducer(this.state.newsPage, action);
        this.updateTree(store);
    },
};

export default store;
