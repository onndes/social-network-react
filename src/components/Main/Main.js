import React from "react";
import { Route } from "react-router-dom";
import style from "./Main.module.css";
import MessagesPageContainer from "../MessagesPage/MessagesPageContainer";
import NewsPageContainer from "../NewsPage/NewsPageContainer";
import UsersPageContainer from "../UsersPage/UsersPageContainer";
import ProfilePageContainer from "../ProfilePage/ProfilePageContainer";
import LoginPage from "./../LoginPage/LoginPage";

const Main = (props) => {
    return (
        <div className={style.wrapper}>
            <Route path='/messages'>
                <MessagesPageContainer
                    getAllUsers={props.getAllUsers}
                    getAllComments={props.getAllComments}
                    store={props.store}
                />
            </Route>
            <Route path='/news' render={() => <NewsPageContainer store={props.store} />} />
            <Route path='/users' component={UsersPageContainer} />
            <Route path='/profile/:userId' component={ProfilePageContainer} />
            <Route path='/login' component={LoginPage} />
        </div>
    );
};

export default Main;
