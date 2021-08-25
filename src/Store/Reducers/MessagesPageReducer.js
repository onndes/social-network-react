const UPDATE_BODY_TEXT = "UPDATE_BODY_TEXT";
const MESSAGES_TEXT = "MESSAGES_TEXT";

const initialState = {
    messageBodyText: "",
    messages: ["Hello"],
};

const messagesPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_BODY_TEXT:
            // debugger;
            const newState = { ...state };
            newState.messageBodyText = action.messageBodyText;
            return newState;
        case MESSAGES_TEXT:
            const { messageBodyText, messages } = state;
            const copyState = { ...state };
            if (messageBodyText.trim()) {
                copyState.messages = [...state.messages, state.messageBodyText];
                copyState.messageBodyText = "";
            }
            return copyState;
        default:
            return state;
    }
};

export const updataBodyMessagestextActionCreator = (body) => {
    return { type: UPDATE_BODY_TEXT, messageBodyText: body };
};

export const addMessagesActionCreator = () => {
    return { type: MESSAGES_TEXT };
};

export default messagesPageReducer;
