import { combineReducers, createStore } from "redux";
import MessagesPageReducer from "./Reducers/MessagesPageReducer";
import NewsPageReducer from "./Reducers/NewsPageReducer";

let reducers = combineReducers({
    messagesPage: MessagesPageReducer,
    newsPage: NewsPageReducer,
});

let store = createStore(reducers);

export default store;
