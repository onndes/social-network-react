import React from "react";
import appPreloader from "../../assets/img/app_preloader.svg";
import appPreloaderDots from "../../assets/img/app_preloared_dots.svg";
import s from "./AppPreloader.module.css";

const AppPreloader = (props) => {
    return (
        <>
              <div className={s.wrapper}>
                  <img className={s.svg} src={appPreloader} alt='' />
                  <div className={s.textWrapp}>
                      <p className={s.text}>RR Loading</p>
                      <img className={s.svgDots} src={appPreloaderDots} alt='' />
                  </div>
              </div>
        </>
    );
};
export default AppPreloader;
