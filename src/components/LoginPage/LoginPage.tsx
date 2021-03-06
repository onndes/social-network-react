import React from "react";
import s from "./LoginPage.module.css";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { requireFillIn } from "../../Common/Validate/Validate";
import { Input } from "../../Common/CastomFrom/CustomFrom";
import { Redirect } from "react-router-dom";
import Preloader from "../../Common/Preloader/Preloader";

type MyPropsFormType = {
    captchaUrl: string | null;
    isLoading: boolean;
};

const LoginFrom: React.FC<InjectedFormProps<DataOnSubmitType, MyPropsFormType> & MyPropsFormType> =
    (props) => {
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
                            autoFocus
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

const LoginReducerFrom = reduxForm<DataOnSubmitType, MyPropsFormType>({ form: "login" })(LoginFrom);

type DataOnSubmitType = {
    mail: string;
    password: string;
    rememberMe: boolean;
    captcha: string | null;
};


type LoginPageType = {
    data?: DataOnSubmitType;
    isAuth: boolean;
    captchaUrl: string | null;
    isLoading: boolean;
    loginMe: (data: DataOnSubmitType) => void;
};
const LoginPage: React.FC<LoginPageType> = (props) => {
    if (props.isAuth) {
        return <Redirect to='/myprofile' />;
    }
    const onSubmit = (data: DataOnSubmitType) => {
        return props.loginMe(data);
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
