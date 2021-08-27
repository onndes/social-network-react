import React from "react";
import style from "./Header.module.css";

const Header = () => {
    return (
        <div className={style.wrapper}>
            <header className={style.header}>
                <div className={style.logo}>
                    <div>RR</div>
                </div>
            </header>
        </div>
    );
};
export default Header;
