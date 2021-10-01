import React from "react";
import s from "./CustomFrom.module.css";

const Textarea = (props) => {
    const { input, meta, ...otherProps } = props;

    const hasError = meta.touched && meta.error;
    return (
        <>
            <div className={s.wrapper}>
                <div className={s.textareaWrap + " " + (hasError ? s.textareaError : "")}>
                    <textarea
                        className={s.textarea + " " + (hasError ? s.textareaError : "")}
                        {...input}
                        {...otherProps}
                    />
                </div>
                {hasError && <span className={s.messageError}>{meta.error}</span>}
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
                <div className={s.inputWrap + " " + (hasError ? s.textareaError : "")}>
                    <input
                        className={s.input + " " + (hasError ? s.textareaError : "")}
                        {...input}
                        {...otherProps}
                    />
                </div>
                {hasError && (
                    <span className={s.messageError}>
                        <span>{meta.error}</span>
                    </span>
                )}
            </div>
        </>
    );
};


export { Textarea, Input };
