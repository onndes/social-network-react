import React from "react";
import s from "./CustomFrom.module.css";

const Textarea = (props) => {
    const { input, meta, ...otherProps } = props;
    console.log(props);

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

export { Textarea };
