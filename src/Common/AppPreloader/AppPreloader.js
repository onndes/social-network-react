import React from "react";
import appPreloader from "../../assets/img/app_preloader.svg";
import s from "./AppPreloader.module.css"

const AppPreloader = (props) => {
    return (
        <>
            <div className={s.wrapper}>
                <img className={s.svg} src={appPreloader} alt='' />
                <p className={s.text}>RR Loading...</p>
            </div>
        </>
    );
};
export default AppPreloader;
