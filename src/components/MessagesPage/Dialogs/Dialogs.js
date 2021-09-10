import React from "react";
import style from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const Dialogs = () => {
    const generateDialogs = () => {
        return (
            <>
                <li key={1} className={style.item}>
                    <NavLink to={`/messages/${1}`} activeClassName={style.active}>
                        Nikita
                    </NavLink>
                </li>
                <li key={1} className={style.item}>
                    <NavLink to={`/messages/${2}`} activeClassName={style.active}>
                        Alisa
                    </NavLink>
                </li>
            </>
        );
    };

    return <ul className={style.list}>{generateDialogs()}</ul>;
};
export default Dialogs;
