import React from "react";
import s from "./PreloaderLine.module.css";
const PreloaderLine = (props) => {
    
    return (
        <div  className={s.styleWrapp}>
            <div className={s.box}>
                <div className={s.loader}></div>
            </div>
        </div>
    );
};

export default PreloaderLine;
