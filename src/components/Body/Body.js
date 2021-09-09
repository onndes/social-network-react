import React from "react";
import Aside from "../Aside/Aside";
import LoginPage from "../LoginPage/LoginPage";
import Main from "../Main/Main";
import { Route, Redirect } from "react-router-dom";

const Body = (props) => {
    const renderMainContent = () => {
        return (
            <div className='app-body'>
                <div>
                    <Aside />
                </div>
                <div>
                    <Main {...props} />
                </div>
            </div>
        );
    };

    return (
        <div>
            <Route path='' render={() => renderMainContent()} />
            {props.isAuth && <Redirect to='/myprofile' />}
        </div>
    );
};

export default Body;
