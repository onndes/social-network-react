import React, { useState } from "react";
import s from "./Header.module.css";
import iconUser from "../../assets/img/iconUser.png";
import { NavLink } from "react-router-dom";

const Header = (props) => {
    const [toggleDrawer, setToggleDrawer] = useState(false);

    return (
        <div className={s.wrapper}>
            <header className={s.header + " appWrapper"}>
                <div className={s.logo}>
                    <div>RR</div>
                </div>
                <div
                    className={toggleDrawer ? s.btnMenu + ` ${s.btnMenuOpen}` : s.btnMenu}
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
            {toggleDrawer && (
                <DropdownMenus toggleDrawer={toggleDrawer} setToggleDrawer={setToggleDrawer} />
            )}
        </div>
    );
};

export default Header;

const DropdownMenus = ({ toggleDrawer, setToggleDrawer }) => {
    return (
        <div className={s.SwipeableDrawer} anchor={"top"} open={toggleDrawer}>
            <div className={s.conentDropMenu}>
                <ul className={s.list}>
                    <li className={s.item}>
                        <NavLink
                            to='/myprofile'
                            activeClassName={s.active}
                            onClick={() => setToggleDrawer(!toggleDrawer)}>
                            My profile
                        </NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink
                            to='/messages'
                            activeClassName={s.active}
                            onClick={() => setToggleDrawer(!toggleDrawer)}>
                            Messages
                        </NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink
                            to='/news'
                            activeClassName={s.active}
                            onClick={() => setToggleDrawer(!toggleDrawer)}>
                            News
                        </NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink
                            to='/users'
                            activeClassName={s.active}
                            onClick={() => setToggleDrawer(!toggleDrawer)}>
                            Users
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};
