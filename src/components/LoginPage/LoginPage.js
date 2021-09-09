import React from "react";
import style from "./LoginPage.module.css";
import {Field, reduxForm} from "redux-form";


const LoginFrom = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.form}>
            <div className={style.inputBox}>
                <label className={style.label}>Login</label>
                <Field className={style.input} component={'input'} name={'login'} placeholder={'login'}/>
            </div>
            <div className={style.inputBox}>
                <label className={style.label}>Password</label>
                <Field className={style.input}  component={'input'} type={'password'} name={'password'} placeholder={'password'}/>
            </div>
            <div className={style.inputBox + " " + style.inputBoxCheckbox}>
                <label className={style.label + " " + style.labelRemember}>Remember me</label>
                <Field component={'input'} type={'checkbox'} name={'remember'}/>

            </div>
            <div className={style.inputBox}>
                <button className={style.btn}>Login</button>
            </div>
        </form>
    )
}

const LoginReducerFrom = reduxForm({form: 'login'})(LoginFrom)

const LoginPage = () => {
    const onSubmit = (fromData) => {
        console.log(fromData)
    }

    return <div className={style.wrapper}>
        <h1 className={style.loginTitle}>Log in</h1>
        <LoginReducerFrom onSubmit={onSubmit}/>
    </div>;
};

export default LoginPage;
