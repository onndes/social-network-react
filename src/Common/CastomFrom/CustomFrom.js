import React from "react";
import s from "./CustomFrom.module.css";

const ErrorInfo = ({ textError }) => {
    return (
        <span className={s.messageErrorBox}>
            <span className={s.messageError}>{textError}</span>
        </span>
    );
};

const Textarea = (props) => {
    const { input, meta, ...otherProps } = props;
    const hasError = meta.touched && meta.error;
    return (
        <>
            <div className={s.wrapper}>
                <div className={s.textareaWrap + " " + (hasError ? s.textareaErrorWrapp : " ")}>
                    <textarea
                        className={s.textarea + " " + (hasError ? s.textareaError : " ")}
                        {...input}
                        {...otherProps}
                    />
                </div>
                {hasError && <ErrorInfo textError={meta.error} />}
            </div>
        </>
    );
};

const Input = (props) => {
    const { input, meta, ...otherProps } = props;

    const hasError = meta.touched && meta.error;
    return (
        <>
            <div className={s.wrapper}>
                <div className={s.inputWrap + " " + (hasError ? s.inputErrorWrap : "")}>
                    <input
                        className={s.input + " " + (hasError ? s.textareaError : "")}
                        {...input}
                        {...otherProps}
                    />
                </div>
                {hasError && <ErrorInfo textError={meta.error} />}
            </div>
        </>
    );
};

export { Textarea, Input };
