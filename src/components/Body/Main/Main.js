import React from "react";
import { Route } from "react-router-dom";
import NewsPageContainer from "../../NewsPage/NewsPageContainer";
import UsersPageContainer from "../../UsersPage/UsersPageContainer";
import ProfilePageContainer from "../../ProfilePage/ProfilePageContainer";
import MyProfilePageContainer from "../../ProfilePage/MyProfilePage/MyProfilePageContainer";
import LoginPageContainer from "../../LoginPage/LoginPageContainer";
// import ProfileInfoModified from "../../ProfilePage/MyProfilePage/ProfileInfoModified/ProfileInfoModified";
import s from "./Main.module.css";
import withSuspense from "./../../../HOC/withSuspense";
import SettingsPageContainer from "../../SettingsPage/SettingsPageContainer";

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
                <Route path='/settings' component={SettingsPageContainer} />
                {/* <Route path='/my-profile-info-modified' component={ProfileInfoModified} /> */}
            </div>
        </>
    );
};

export default Main;
