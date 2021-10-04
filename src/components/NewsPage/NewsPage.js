// import { render } from "node-sass";
import React from "react";
import style from "./NewsPage.module.css";
// import style2 from "./../../Common/CastomFrom/CastomFrom.module.css";
import { reduxForm } from "redux-form";
import { Field } from "redux-form";
import { maxLengthCreater, requireFillIn } from "../../Common/Validate/Validate";
import { Textarea } from "../../Common/CastomFrom/CustomFrom";

const MessagesItemTest = (props) => {
    const updatePost = () => {
        return props.newsPage.posts.map((item) => {
            return <p key={item.id}>{item.postText}</p>;
        });
    };

    const inputText = (text) => {
        props.addPostActionCreator(text.inputBodyText);
    };
    return (
        <div className={style.wrapper}>
            <FromRedux className={style.FromRedux} onSubmit={inputText} />
            <div className={style.BoxMessages}>{updatePost()}</div>
        </div>
    );
};

const maxLength = maxLengthCreater(15);

const Form = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.form}>
            <div className={style.textareaFieldWrapp}>
                <Field
                    validate={[requireFillIn, maxLength]}
                    name='inputBodyText'
                    className={style.Input}
                    component={Textarea}
                />
            </div>
            <button className={style.Button}>Submit</button>
        </form>
    );
};

const FromRedux = reduxForm({ form: "inputNews" })(Form);

export default MessagesItemTest;
