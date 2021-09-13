import React from "react";
import s from "./Header.module.css";
import iconUser from "../../assets/img/iconUser.png";

const Header = (props) => {
    return (
        <div className={s.wrapper}>
            <header className={s.header}>
                <div className={s.logo}>
                    <div>RR</div>
                </div>
                <div className={s.loginBox}>
                    <div className={s.imgBox}>
                        <img src={props.photo ? props.photo : iconUser} alt='' />
                    </div>
                    <div className={s.userTextBox}>{props.isAuth ? props.login : "Login"}</div>
                    {props.isAuth && (
                        <div className={s.menuUser}>
                            <ul>
                                <li>Pofile</li>
                                <li>Settings</li>
                                <li onClick={props.logoutMe}>Exit</li>
                            </ul> 
                        </div>
                    )}
                </div>
            </header>
        </div>
    );
};
export default Header;
