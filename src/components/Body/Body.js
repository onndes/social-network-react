import React from "react";
import Aside from "../Aside/Aside";
import Main from "../Main/Main";
// Redirect
import { Route } from "react-router-dom";
import style from "./Body.module.css";

const Body = (props) => {
    const renderMainContent = () => {
        return (
            <div className={style.appBody}>
                <div className={style.div1}>
                    <Aside />
                </div>
                <div className={style.div2}>
                    <Main {...props} />
                </div>
            </div>
        );
    };

    return (
        <>
            <Route path='' render={() => renderMainContent()} />
            {/* {props.isAuth && <Redirect to='/myprofile' />} */}
        </>
    );
};

export default Body;
