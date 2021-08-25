import React from "react";

import style from "./MessagesItem.module.css";

const MessagesItemTest = (props) => {
    const onUpdateValue = (e) => {
        props.updateValue(e.target.value);
    };

    const onClickButton = () => {
        props.clickButton();
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
            <div className={style.t_wrapper}>
                <div className={style.t_messagesContainer}>{renderMessages()}</div>
                <div className={style.t_conteinerInputBtn}>
                    <input
                        type='text'
                        placeholder='Enter your messages'
                        className={style.t_input}
                        value={props.messagesPage.messageBodyText}
                        onChange={onUpdateValue}
                        onKeyDown={(e) => (e.key === "Enter" ? onClickButton() : null)}
                    />
                    <button
                        className={style.t_btn}
                        onSubmit={onClickButton}
                        onClick={onClickButton}>
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};
export default MessagesItemTest;
