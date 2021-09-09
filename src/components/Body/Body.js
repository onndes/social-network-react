import React from "react";
import Aside from "../Aside/Aside";
import LoginPage from "../LoginPage/LoginPage";
import Main from "../Main/Main";

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

    return props.isAuth ? renderMainContent() : <LoginPage />;
};

export default Body;
