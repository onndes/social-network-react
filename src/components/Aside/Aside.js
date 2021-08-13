import React, { Component } from "react";
import style from "./Aside.module.css";
import { NavLink } from "react-router-dom";

export default class Aside extends Component {
    

    render() {

        return (
            <>
                <aside className={style.aside}>
                    <ul className={style.list}>
                        <li className={style.item}>
                            <NavLink to='/home' activeClassName={style.active}>
                                Home
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
                    </ul>
                </aside>
            </>
        );
    }
}
