import React, { useState, useEffect } from "react";
import s from "./Header.module.css";
import iconUser from "../../assets/img/iconUser.png";
import { NavLink } from "react-router-dom";
import DropdownMenus from "./DropdownMenus/DropdownMenus";

const Header = (props) => {
    const [toggleDrawer, setToggleDrawer] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth + "px");

    useEffect(() => {
        window.addEventListener("resize", () => setWindowWidth(window.innerWidth + "px"));
        if (windowWidth > "768px") setToggleDrawer(false);
    }, [windowWidth]);

    return (
        <div className={s.wrapper}>
            <div className={s.wrapperHeader}>
                <header className={s.header + " appWrapperHeader"}>
                    <div className={s.logo}>
                        <div>RR</div>
                    </div>
                    <div
                        className={toggleDrawer ? s.btnMenuOpen + " " + s.btnMenu : s.btnMenu}
                        onClick={() => setToggleDrawer(!toggleDrawer)}></div>
                    <div className={s.loginBox}>
                        <div className={s.imgBox}>
                            <img src={props.photo ? props.photo : iconUser} alt='' />
                        </div>
                        <div className={s.userTextBox}>
                            {props.isAuth ? props.login : <NavLink to='/login'>Login</NavLink>}
                        </div>
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
            {toggleDrawer && (
                <DropdownMenus toggleDrawer={toggleDrawer} setToggleDrawer={setToggleDrawer} />
            )}
        </div>
    );
};

export default Header;
