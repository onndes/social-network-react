import React from "react";
import s from "./BtnGoBack.module.css";
import { NavLink } from "react-router-dom";

const BtnGoBack = ({ mt = 0, mb = 0, mr = 0, ml = 0, backLink = "/myprofile" }) => {
    const style = {
        "marginTop": mt,
        "marginRight": mr,
        "marginBottom": mb,
        "marginLeft": ml,
    };
    return (
        <div className={s.btnWrapper} style={style}>
            <button type='button' className={s.btn}>
                <NavLink to={backLink} activeClassName={style.active}>
                    ← Back
                </NavLink>
            </button>
        </div>
    );
};
export default BtnGoBack;
