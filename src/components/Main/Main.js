import React from "react";
import { Route } from "react-router-dom";
import MessagesPageContainer from "../MessagesPage/MessagesPageContainer";
import NewsPageContainer from "../NewsPage/NewsPageContainer";
import UsersPageContainer from "../UsersPage/UsersPageContainer";
import ProfilePageContainer from "../ProfilePage/ProfilePageContainer";
import MyProfilePageContainer from "../MyProfilePage/MyProfilePageContainer";
import LoginPageContainer from "./../LoginPage/LoginPageContainer";

const Main = (props) => {
    return (
        <>
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
        </>
    );
};

export default Main;
