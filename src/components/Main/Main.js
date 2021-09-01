import React from "react";
import { Route } from "react-router-dom";
import style from "./Main.module.css";
import MessagesPage from "../MessagesPage/MessagesPage";
import NewsPageContainer from "../NewsPage/NewsPageContainer";
import MyProfile from "../MyProfile/MyProfile";
import UsersPageContainer from "../UsersPage/UsersPageContainer";
import ProfilePageContainer from "../ProfilePage/ProfilePageContainer";

const Main = (props) => {
    return (
        <div className={style.wrapper}>
            <Route path='/myprofile' component={MyProfile} />
            <Route path='/messages'>
                <MessagesPage
                    getAllUsers={props.getAllUsers}
                    getAllComments={props.getAllComments}
                    store={props.store}
                />
            </Route>
            <Route path='/news' render={() => <NewsPageContainer store={props.store} />} />
            <Route path='/users' component={UsersPageContainer} />
            <Route path='/profile/:userId' component={ProfilePageContainer} />
        </div>
    );
};

export default Main;
