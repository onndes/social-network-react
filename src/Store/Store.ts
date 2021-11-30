import { Action, applyMiddleware, combineReducers, compose, createStore } from "redux";
import { reducer as formReducer } from "redux-form";
import thunkMiddleware, { ThunkAction } from "redux-thunk";
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

// Типизация для state
type RootReducersType = typeof rootReducers;
export type AppStateType = ReturnType<RootReducersType>;

// Типизация для Actions
export type InferActionsTypes<T> = T extends {[keys: string]: (...args: any[]) => infer U} ? U : never
// Типизация Thunks
export type BaseThunkType<A extends Action, P = Promise<void>> =  ThunkAction<P, AppStateType, unknown, A>;

// @ts-ignore
// __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ - для роботы ReduxDev tools в браузере
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;
