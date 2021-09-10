const MESSAGES_TEXT = "MESSAGES_TEXT";

const initialState = {
    messages: ["Hello"],
};

const messagesPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case MESSAGES_TEXT:
            if (1) {
                return {
                    ...state,
                    messages: [...state.messages, action.messagesBody],
                };
            }
            return state;
        default:
            return state;
    }
};

export const addMessagesActionCreator = (messagesBody) => {
    return { type: MESSAGES_TEXT, messagesBody };
};

export default messagesPageReducer;
