import React from "react";
import style from "./LoginPage.module.css";
import { Field, reduxForm } from "redux-form";
import { requireFillIn } from "../../Common/Validate/Validate";
import { Input } from "../../Common/CastomFrom/CustomFrom";
import { Redirect } from "react-router-dom";
import Preloader from "../../Common/Preloader/Preloader";

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
            <div className={style.inputBox + " " + style.inputBoxBtn}>
                {props.isLoading ? (
                    <Preloader height={"30px"} />
                ) : (
                    <button className={style.btn}>Login</button>
                )}
            </div>
        </form>
    );
};

const LoginReducerFrom = reduxForm({ form: "login" })(LoginFrom);

const LoginPage = (props) => {
    if (props.isAuth) {
        return <Redirect to='/myprofile' />;
    }
    const onSubmit = (data) => {
        props.loginMe(data);
    };

    return (
        <div className={style.wrapper}>
            <h1 className={style.loginTitle}>Log in</h1>
            <LoginReducerFrom onSubmit={onSubmit} isLoading={props.isLoading} />
        </div>
    );
};

export default LoginPage;
