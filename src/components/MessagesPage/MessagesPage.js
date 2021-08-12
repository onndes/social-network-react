import React, { Component } from "react";
import style from "./MessagesPage.module.css";
import { Link } from "react-router-dom";

export default class MessagesPage extends Component {
    render() {
        return (
            <>
                <main className={style.wrapper}>
                    <h3 className={style.title}>Диалоги</h3>
                    <ul className={style.list}>
                        <li className={style.item}>
                            <Link>Dima</Link>
                        </li>
                        <li className={style.item}>
                            <Link>Sveta</Link>
                        </li>
                        <li className={style.item}>
                            <Link>Oleg</Link>
                        </li>
                        <li className={style.item}>
                            <Link>Khrisitina</Link>
                        </li>
                        <li className={style.item}>
                            <Link>Bogdan</Link>
                        </li>
                    </ul>
                </main>
            </>
        );
    }
}
