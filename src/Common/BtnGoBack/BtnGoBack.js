import React from "react";
import s from "./BtnGoBack.module.css";
import { useHistory } from "react-router-dom";

const BtnGoBack = ({ mt = 0, mb = 0, mr = 0, ml = 0 }) => {
    let history = useHistory();
    const style = {
        "margin-top": mt,
        "margin-right": mr,
        "margin-bottom": mb,
        "margin-left": ml,
    };
    return (
        <div className={s.btnWrapper} style={style}>
            <button onClick={history.goBack} type='button' className={s.btn}>
                ← Back
            </button>
        </div>
    );
};
export default BtnGoBack;
