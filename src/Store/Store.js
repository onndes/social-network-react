import messagesPageReducerReducer from "./Reducers/MessagesPageReducer";
import NewsPageReducer from "./Reducers/NewsPageReducer";

const store = {
    state: {
        messagesPage: {
            messageBodyText: "",
            messages: ["Hello"],
        },
        newesPage: {
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
        this.state.newesPage = NewsPageReducer(this.state.newesPage, action);
        this.updateTree(store);
    },
};

export default store;
