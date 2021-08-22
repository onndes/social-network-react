const UPDATE_INPUT_VALUE = "UPDATE-INPUT-VALUE";
const ADD_POST = "ADD-POST";
const UPDATE_BODY_TEXT = "UPDATE_BODY_TEXT";
const MESSAGES_TEXT = "MESSAGES_TEXT";
const store = {
    state: {
        messagesPage: {
            messageBodyText: "",
            messages: [
                "Hello"
            ],
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
        if (action.type === MESSAGES_TEXT) {
            const { messageBodyText, messages } = this.state.messagesPage;
            if (messageBodyText.trim()) {
                messages.push(messageBodyText);
                this.state.messagesPage.messageBodyText = "";
                this.updateTree(store);
            }
        } else if (action.type === UPDATE_BODY_TEXT) {
            this.state.messagesPage.messageBodyText = action.messageBodyText;
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

export const updataBodyMessagestextActionCreator = (body) => {
    return { type: UPDATE_BODY_TEXT, messageBodyText: body };
};

export const addMessagesActionCreator = () => {
    return { type: MESSAGES_TEXT };
};
export default store;
