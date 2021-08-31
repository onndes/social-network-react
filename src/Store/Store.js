import { combineReducers, createStore } from "redux";
import MessagesPageReducer from "./Reducers/MessagesPageReducer";
import NewsPageReducer from "./Reducers/NewsPageReducer";
import UsersPageReducer from "./Reducers/UsersPageReducer";
import ProfilePageReducer from "./Reducers/ProfilePageReducer";

let reducers = combineReducers({
    messagesPage: MessagesPageReducer,
    newsPage: NewsPageReducer,
    usersPage: UsersPageReducer,
    profilePage: ProfilePageReducer,
});

let store = createStore(reducers);

export default store;
