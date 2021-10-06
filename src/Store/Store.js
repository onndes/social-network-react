import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { reducer as formReducer } from "redux-form";
import thunkMiddleware from "redux-thunk";
import NewsPageReducer from "./Reducers/NewsPageReducer";
import UsersPageReducer from "./Reducers/UsersPageReducer";
import ProfilePageReducer from "./Reducers/ProfilePageReducer";
import AuthReducer from "./Reducers/AuthReducer";
import AppReducer from "./Reducers/AppReducer";
import MessagesPageReducer from "./Reducers/MessagesPageReducer";

let reducers = combineReducers({
    newsPage: NewsPageReducer,
    usersPage: UsersPageReducer,
    profilePage: ProfilePageReducer,
    auth: AuthReducer,
    form: formReducer,
    app: AppReducer,
    messagesPage: MessagesPageReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;
