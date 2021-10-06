import React from "react";
import style from "./MessagesItemTest.module.css";
import { Field, reduxForm } from "redux-form";
import BtnGoBack from "./../../../Common/BtnGoBack/BtnGoBack";

const MessagesItemTest = (props) => {
    const onClickButton = (text) => {
        props.addMessagesActionCreator(text.inputBodyValue);
    };

    const renderMessages = () => {
        let key = 1;
        return props.messagesPage.messages.map((message) => {
            key++;
            return (
                <p className={style.t_myMessage} key={key}>
                    {message}
                </p>
            );
        });
    };

    return (
        <div className={style.t_mainWrapper}>
            <BtnGoBack mb={"10px"} />
            <div className={style.line}></div>
            <div className={style.t_wrapper}>
                <div className={style.t_messagesContainer}>{renderMessages()}</div>
                <div className={style.t_conteinerInputBtn}>
                    <FormReducer onSubmit={onClickButton} />
                </div>
            </div>
        </div>
    );
};
const Form = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                type='text'
                placeholder='Enter your messages'
                className={style.t_input}
                component={"input"}
                name='inputBodyValue'
            />
            <button className={style.t_btn}>Send</button>
        </form>
    );
};
const FormReducer = reduxForm({ form: "messageInput" })(Form);

export default MessagesItemTest;
