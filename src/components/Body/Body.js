import React from "react";
import { Route } from "react-router-dom";
import Aside from "./Aside/Aside";
import Main from "./Main/Main";
import style from "./Body.module.css";

const Body = (props) => {
    const renderMainContent = () => {
        return (
            <div className={style.appBody + " appWrapper"}>
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
        </>
    );
};

export default Body;
