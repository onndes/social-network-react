// import { render } from "node-sass";
import React from "react";
import s from "./NewsPage.module.css";
// import s2 from "./../../Common/CastomFrom/CastomFrom.module.css";
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
        <div className={s.wrapper}>
            <p className={s.pageStub}>[page stub]</p>
            <FromRedux className={s.FromRedux} onSubmit={inputText} />
            <div className={s.BoxMessages}>{updatePost()}</div>
        </div>
    );
};

const maxLength = maxLengthCreater(15);

const Form = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.form}>
            <div className={s.textareaFieldWrapp}>
                <Field
                    validate={[requireFillIn, maxLength]}
                    name='inputBodyText'
                    className={s.Input}
                    component={Textarea}
                />
            </div>
            <button className={s.Button}>Submit</button>
        </form>
    );
};

const FromRedux = reduxForm({ form: "inputNews" })(Form);

export default MessagesItemTest;
