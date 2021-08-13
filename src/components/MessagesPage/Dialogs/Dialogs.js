import React, { Component } from "react";
import style from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

export default class Dialogs extends Component {
    state = {
        userName: [
            {
                id: 657951,
                name: "Kiril",
            },
            {
                id: 156753,
                name: "Misha",
            },
            {
                id: 315978,
                name: "Khristina",
            },
            {
                id: 548971,
                name: "Oleg",
            },
            {
                id: 456519,
                name: "Yula",
            },
        ],
    };

    generateDialogs() {
        return this.state.userName.map((item) => {
            return (
                <li key={item.id} className={style.item}>
                    <NavLink
                        to={`/messages/${item.name.toLocaleLowerCase() + item.id}`}
                        activeClassName={style.active}>
                        {item.name}
                    </NavLink>
                </li>
            );
        });
    }

    render() {
        const dialogs = this.generateDialogs();
        return <ul className={style.list}>{dialogs}</ul>;
    }
}
