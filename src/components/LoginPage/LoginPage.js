import React from "react";
import style from "./LoginPage.module.css";
import { Field, reduxForm } from "redux-form";
import { requireFillIn } from "../../Common/Validate/Validate";
import { Input } from "../../Common/CastomFrom/CustomFrom";
import { Redirect } from "react-router-dom";

const LoginFrom = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.form}>
            <div className={style.inputBox}>
                <label className={style.label}>Login</label>
                <Field
                    className={style.input}
                    component={Input}
                    name={"email"}
                    placeholder={"Email"}
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
                <Field component={"input"} type={"checkbox"} name={"rememberMe"} />
            </div>
            <div className={style.inputBox}>
                <button className={style.btn}>Login</button>
            </div>
        </form>
    );
};

const LoginReducerFrom = reduxForm({ form: "login" })(LoginFrom);

const LoginPage = (props) => {
    if (props.isAuth) {
        return <Redirect to='/myprofile' />;
    } else if (!props.isAuth) {
        <Redirect to='/login' />;
    }
    const onSubmit = (data) => {
        props.loginMe(data);
    };

    return (
        <div className={style.wrapper}>
            <h1 className={style.loginTitle}>Log in</h1>
            <LoginReducerFrom onSubmit={onSubmit} />
        </div>
    );
};

export default LoginPage;
