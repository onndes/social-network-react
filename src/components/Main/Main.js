import React from "react";
import { Route } from "react-router-dom";
import style from "./Main.module.css";
import MessagesPage from "../MessagesPage/MessagesPage";
import NewsPageContainer from "../NewsPage/NewsPageContainer";
import HomePage from "../HomePage/HomePage";
import UsersPageContainer from "../UsersPage/UsersPageContainer";
const Main = (props) => {
    return (
        <div className={style.wrapper}>
            <Route path='/home' component={HomePage} />
            <Route path='/messages'>
                <MessagesPage
                    getAllUsers={props.getAllUsers}
                    getAllComments={props.getAllComments}
                    store={props.store}
                />
            </Route>
            <Route path='/news' render={() => <NewsPageContainer store={props.store} />} />
            <Route path='/users' component={UsersPageContainer} />
        </div>
    );
};
export default Main;
