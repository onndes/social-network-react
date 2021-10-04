import React, { useState, useEffect } from "react";
import s from "./Header.module.css";
import iconUser from "../../assets/img/iconUser.png";
import { NavLink } from "react-router-dom";
import DropdownMenus from "./DropdownMenus/DropdownMenus";

const Header = (props) => {
    const [toggleDrawer, setToggleDrawer] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth + "px");
    const [photo, setPhoto] = useState(props.photo ? props.photo : iconUser);
    const [userName, setUserName] = useState(
        props.isAuth ? props.fullName : <NavLink to='/login'>Login</NavLink>,
    );
    useEffect(() => {
        window.addEventListener("resize", () => setWindowWidth(window.innerWidth + "px"));
        if (windowWidth > "768px") setToggleDrawer(false);
        setPhoto(props.photo ? props.photo : iconUser);
        setUserName(props.isAuth ? props.fullName : <NavLink to='/login'>Login</NavLink>);
    }, [windowWidth, props.photo, props.fullName, props.isAuth]);

    return (
        <div className={s.wrapper}>
            <div className={s.wrapperHeader}>
                <header className={s.header + " appWrapperHeader"}>
                    <div className={s.logo}>
                        <NavLink to='/myprofile' activeClassName={s.active}>
                            RR
                        </NavLink>
                    </div>
                    <div
                        className={toggleDrawer ? s.btnMenuOpen + " " + s.btnMenu : s.btnMenu}
                        onClick={() => setToggleDrawer(!toggleDrawer)}></div>
                    <div className={s.loginBox}>
                        <div className={s.imgBox}>
                            <img src={photo} alt='' />
                        </div>
                        <div className={s.userTextBox}>{userName}</div>
                        {props.isAuth && (
                            <div className={s.menuWrapp}>
                                <ul className={s.menuList}>
                                    <li className={s.menuItem}>
                                        <NavLink to='/myprofile' activeClassName={s.active}>
                                            My profile
                                        </NavLink>
                                    </li>
                                    <li className={s.menuItem}>
                                        <NavLink to='/settings' activeClassName={s.active}>
                                            Settings
                                        </NavLink>
                                    </li>
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
