import React from "react";
import { Route, Redirect } from "react-router-dom";
import NewsPageContainer from "../../NewsPage/NewsPageContainer";
import UsersPageContainer from "../../UsersPage/UsersPageContainer";
import ProfilePageContainer from "../../ProfilePage/ProfilePageContainer";
import MyProfilePageContainer from "../../ProfilePage/MyProfilePage/MyProfilePageContainer";
import LoginPageContainer from "../../LoginPage/LoginPageContainer";
import SettingsPageContainer from "../../SettingsPage/SettingsPageContainer";
import MessagesPageContainer from "../../MessagesPage/MessagesPageContainer";

const Main = (props) => {
    return (
        <>
            {props.location.pathname === "/" && <Redirect to='/myprofile' />}
            <Route path='/myprofile' component={MyProfilePageContainer} />
            <Route path='/messages' component={MessagesPageContainer} />
            <Route path='/news' render={() => <NewsPageContainer store={props.store} />} />
            <Route path='/users' component={UsersPageContainer} />
            <Route path='/profile/:userId' component={ProfilePageContainer} />
            <Route path='/login' component={LoginPageContainer} />
            <Route path='/settings' component={SettingsPageContainer} />
        </>
    );
};

export default Main;
