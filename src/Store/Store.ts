import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { reducer as formReducer } from "redux-form";
import thunkMiddleware from "redux-thunk";
import NewsPageReducer from "./Reducers/NewsPageReducer";
import UsersPageReducer from "./Reducers/UsersPageReducer";
import ProfilePageReducer from "./Reducers/ProfilePageReducer";
import AuthReducer from "./Reducers/AuthReducer";
import AppReducer from "./Reducers/AppReducer";
import MessagesPageReducer from "./Reducers/MessagesPageReducer";

let rootReducers = combineReducers({
    newsPage: NewsPageReducer,
    usersPage: UsersPageReducer,
    profilePage: ProfilePageReducer,
    auth: AuthReducer,
    form: formReducer,
    app: AppReducer,
    messagesPage: MessagesPageReducer,
});


type RootReducersType = typeof rootReducers;
export type AppStateType = ReturnType<RootReducersType>;

type PropTypes<T> = T extends {[key: string]: infer U } ? U : never;
export type ActionsTypes<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<PropTypes<T>>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;
