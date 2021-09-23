import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import MessagesPageReducer from "./Reducers/MessagesPageReducer";
import NewsPageReducer from "./Reducers/NewsPageReducer";
import UsersPageReducer from "./Reducers/UsersPageReducer";
import ProfilePageReducer from "./Reducers/ProfilePageReducer";
import AuthReducer from "./Reducers/AuthReducer";
import { reducer as formReducer } from "redux-form";
import AppReducer from "./Reducers/AppReducer";

let reducers = combineReducers({
    messagesPage: MessagesPageReducer,
    newsPage: NewsPageReducer,
    usersPage: UsersPageReducer,
    profilePage: ProfilePageReducer,
    auth: AuthReducer,
    form: formReducer,
    app: AppReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;
