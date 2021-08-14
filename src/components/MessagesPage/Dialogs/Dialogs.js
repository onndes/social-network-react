import React, { Component } from "react";
import style from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

export default class Dialogs extends Component {
    state = {
        users: [],
    };

    generateDialogs() {
        const { allUsers, idUser } = this.props;
        return allUsers.map((item) => {
            const id = idUser(item);
            return (
                <li key={item.id} className={style.item}>
                    <NavLink to={`/messages/${id}`} activeClassName={style.active}>
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
