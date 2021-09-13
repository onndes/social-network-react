import React from "react";
import style from "./LoginPage.module.css";
import { Field, reduxForm } from "redux-form";
import { requireFillIn } from "../../Common/Validate/Validate";
import { Input } from "../../Common/CastomFrom/CustomFrom";

const LoginFrom = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.form}>
            <div className={style.inputBox}>
                <label className={style.label}>Login</label>
                <Field
                    className={style.input}
                    component={Input}
                    name={"login"}
                    placeholder={"login"}
                    validate={[requireFillIn]}
                />
            </div>
            <div className={style.inputBox}>
                <label className={style.label}>Password</label>
                <Field
                    className={style.input}
                    component={Input}
                    type={"password"}
                    name={"password"}
                    placeholder={"password"}
                    validate={[requireFillIn]}
                />
            </div>
            <div className={style.inputBox + " " + style.inputBoxCheckbox}>
                <label className={style.label + " " + style.labelRemember}>Remember me</label>
                <Field component={"input"} type={"checkbox"} name={"remember"} />
            </div>
            <div className={style.inputBox}>
                <button className={style.btn}>Login</button>
            </div>
        </form>
    );
};

const LoginReducerFrom = reduxForm({ form: "login" })(LoginFrom);

const LoginPage = () => {
    const onSubmit = (fromData) => {
        console.log(fromData);
    };

    return (
        <div className={style.wrapper}>
            <h1 className={style.loginTitle}>Log in</h1>
            <LoginReducerFrom onSubmit={onSubmit} />
        </div>
    );
};

export default LoginPage;
