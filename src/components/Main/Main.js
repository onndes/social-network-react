import React from "react";
import { Route } from "react-router-dom";
import MessagesPageContainer from "../MessagesPage/MessagesPageContainer";
import NewsPageContainer from "../NewsPage/NewsPageContainer";
import UsersPageContainer from "../UsersPage/UsersPageContainer";
import ProfilePageContainer from "../ProfilePage/ProfilePageContainer";
import MyProfilePageContainer from "../MyProfilePage/MyProfilePageContainer";
import LoginPageContainer from "./../LoginPage/LoginPageContainer";
import s from './Main.module.css'
const Main = (props) => {
    return (
        <>
            <div className={s.wrapp}>
                <Route path='/myprofile' component={MyProfilePageContainer} />
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
                <Route path='/login' component={LoginPageContainer} />
            </div>
        </>
    );
};

export default Main;
