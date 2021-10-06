import React from "react";
import s from "./Dialogs.module.css";
import cn from "classname";

const Dialogs = (props) => {
    return (
        <div className={s.wrapper}>
            <h2 className={s.title}>Dialogs</h2>
            <ul className={s.wrapperListDialogs}>
                {props.dialogs.map((dialog) => {
                    return (
                        <li
                            key={dialog.id}
                            className={cn(s.itemDialog, {
                                itemDialogOpen: props.openDialogId === dialog.id,
                            })}>
                            {dialog.userName}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Dialogs;
