import React, { Component } from "react";
import style from "./Aside.module.css";
import { Link } from "react-router-dom";

export default class Aside extends Component {
    render() {
        return (
            <>
                <aside className={style.aside}>
                    <ul className={style.list}>
                        <li className={style.item}>
                            <Link to='/home'>Home</Link>
                        </li>
                        <li className={style.item}>
                            <Link to='/messages'>Messages</Link>
                        </li>
                        <li className={style.item}>
                            <Link to='/news'>News</Link>
                        </li>
                    </ul>
                </aside>
            </>
        );
    }
}
