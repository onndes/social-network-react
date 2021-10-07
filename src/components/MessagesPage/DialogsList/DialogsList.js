import React from "react";
import s from "./DialogsList.module.css";
import cn from "classnames";
import { NavLink } from "react-router-dom";

const DialogsList = (props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.stub}>Page STUB</div>
            <h2 className={s.title}>Dialogs</h2>
            <ul className={s.wrapperListDialogs}>
                {props.dialogs.map(({ id, userName }) => {
                    return (
                        <li
                            key={id}
                            className={cn(s.itemDialog, {
                                [s.itemDialogOpen]: props.openDialogId === id,
                            })}
                            onClick={() => props.setOpenDialog(id)}>
                            <NavLink to={`/messages/${id}`} activeClassName={s.activeLink}>
                                {userName}
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default DialogsList;
