import React from "react";
import style from "./Aside.module.css";
import { NavLink } from "react-router-dom";

const Aside = () => {
    return (
        <>
            <aside className={style.aside}>
                <ul className={style.list}>
                    <li className={style.item}>
                        <NavLink to='/myprofile' activeClassName={style.active}>
                            My profile
                        </NavLink>
                    </li>
                    <li className={style.item}>
                        <NavLink to='/messages' activeClassName={style.active}>
                            Messages
                        </NavLink>
                    </li>
                    <li className={style.item}>
                        <NavLink to='/news' activeClassName={style.active}>
                            News
                        </NavLink>
                    </li>
                    <li className={style.item}>
                        <NavLink to='/users' activeClassName={style.active}>
                            Users
                        </NavLink>
                    </li>
                    <li className={style.item}>
                        <NavLink to='/settings' activeClassName={style.active}>
                            Settings
                        </NavLink>
                    </li>
                    <li className={style.item}>
                        <NavLink to='/test' activeClassName={style.active}>
                            Test
                        </NavLink>
                    </li>
                </ul>
            </aside>
        </>
    );
};
export default Aside;
