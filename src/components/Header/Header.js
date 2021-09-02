import React from "react";
import style from "./Header.module.css";
import iconUser from "../../assets/img/iconUser.png";

const Header = (props) => {
    return (
        <div className={style.wrapper}>
            <header className={style.header}>
                <div className={style.logo}>
                    <div>RR</div>
                </div>
                <div className={style.loginBox}>
                    <div className={style.imgBox}>
                        <img src={props.photo ? props.photo : iconUser} alt='' />
                    </div>
                    {props.isAuth ? props.login : "Login"}
                </div>
            </header>
        </div>
    );
};
export default Header;
