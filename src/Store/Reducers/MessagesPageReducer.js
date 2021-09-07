const UPDATE_BODY_TEXT = "UPDATE_BODY_TEXT";
const MESSAGES_TEXT = "MESSAGES_TEXT";

const initialState = {
    messageBodyText: "",
    messages: ["Hello"],
};

const messagesPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_BODY_TEXT:
            return { ...state, messageBodyText: action.messageBodyText };

        case MESSAGES_TEXT:
            if (state.messageBodyText.trim()) {
                return {
                    ...state,
                    messages: [...state.messages, state.messageBodyText],
                    messageBodyText: "",
                };
            }
            return state;
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


