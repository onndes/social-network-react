import React from "react";
import s from "./LoginPage.module.css";
import { Field, reduxForm } from "redux-form";
import { requireFillIn } from "../../Common/Validate/Validate";
import { Input } from "../../Common/CastomFrom/CustomFrom";
import { Redirect } from "react-router-dom";
import Preloader from "../../Common/Preloader/Preloader";

const LoginFrom = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.form}>
            {props.error && (
                <div className={s.errorBox}>
                    <p className={s.errorText}>{props.error}</p>
                </div>
            )}

            <div className={s.inputBox}>
                <label className={s.label}>Login</label>
                <Field
                    className={s.input}
                    component={Input}
                    name={"email"}
                    placeholder={"Email"}
                    validate={[requireFillIn]}
                />
            </div>
            <div className={s.inputBox}>
                <label className={s.label}>Password</label>
                <Field
                    className={s.input}
                    component={Input}
                    type={"password"}
                    name={"password"}
                    placeholder={"Password"}
                    validate={[requireFillIn]}
                />
            </div>
            <div className={s.inputBox + " " + s.inputBoxCheckbox}>
                <label className={s.label + " " + s.labelRemember}>Remember me</label>
                <Field component={"input"} type={"checkbox"} name={"rememberMe"} />
            </div>
            {props.captchaUrl && (
                <div className={s.inputBox}>
                    <div className={s.captchaImgBox}>
                        <img src={props.captchaUrl} alt='' />
                    </div>
                    <Field
                        className={s.input}
                        component={Input}
                        validate={[requireFillIn]}
                        name={"captcha"}
                    />
                </div>
            )}

            <div className={s.inputBox + " " + s.inputBoxBtn}>
                {props.isLoading ? (
                    <Preloader height={"30px"} />
                ) : (
                    <button className={s.btn}>Login</button>
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
        <div className={s.wrapper}>
            <h1 className={s.loginTitle}>Log in</h1>
            <LoginReducerFrom
                captchaUrl={props.captchaUrl}
                onSubmit={onSubmit}
                isLoading={props.isLoading}
            />
        </div>
    );
};

export default LoginPage;
