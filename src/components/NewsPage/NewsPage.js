// import { render } from "node-sass";
import React from "react";
import style from "./NewsPage.module.css";
import { reduxForm } from "redux-form";
import { Field } from "redux-form";

const MessagesItemTest = (props) => {
    const updatePost = () => {
        let i = 1;
        return props.newsPage.posts.map((item) => {
            i++;
            return <p key={i}>{item}</p>;
        });
    };

    const inputText = (text) => {
        console.log(text);
    };
    return (
        <div className={style.Wrapper}>
            <FromRedux onSubmit={inputText} />
            <div className={style.BoxMessages}>ds</div>
        </div>
    );
};

const Form = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={"inputBodyText"} className={style.Input} component={"input"} />
            <button className={style.Button}>Submit</button>
        </form>
    );
};

const FromRedux = reduxForm({ form: "inputNews" })(Form);
export default MessagesItemTest;
