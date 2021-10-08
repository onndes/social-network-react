import { Input } from "../../../Common/CastomFrom/CustomFrom";
import React from "react";
import { Field, reduxForm } from "redux-form";
import s from "./InputTextMessage.module.css";

const InputTextMessage = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.wrapper}>
            <Field
                className={s.input}
                component={Input}
                name={`bodyTextMessage${props.userId}`}
                placeholder={"Your message"}
            />
            <button className={s.btn}>Send</button>
        </form>
    );
};

export default reduxForm({ form: "dialog" })(InputTextMessage);
