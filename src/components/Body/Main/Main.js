import React from "react";
import { Route } from "react-router-dom";
import NewsPageContainer from "../../NewsPage/NewsPageContainer";
import UsersPageContainer from "../../UsersPage/UsersPageContainer";
import ProfilePageContainer from "../../ProfilePage/ProfilePageContainer";
import MyProfilePageContainer from "../../ProfilePage/MyProfilePage/MyProfilePageContainer";
import LoginPageContainer from "../../LoginPage/LoginPageContainer";
import s from "./Main.module.css";
import withSuspense from "./../../../HOC/withSuspense";

const MessagesPageContainer = React.lazy(() => import("../../MessagesPage/MessagesPageContainer"));

const Main = (props) => {
    return (
        <>
            <div className={s.wrapp}>
                <Route path='/myprofile' component={MyProfilePageContainer} />
                <Route path='/messages' render={withSuspense(MessagesPageContainer)}></Route>
                <Route path='/news' render={() => <NewsPageContainer store={props.store} />} />
                <Route path='/users' component={UsersPageContainer} />
                <Route path='/profile/:userId' component={ProfilePageContainer} />
                <Route path='/login' component={LoginPageContainer} />
            </div>
        </>
    );
};

export default Main;
