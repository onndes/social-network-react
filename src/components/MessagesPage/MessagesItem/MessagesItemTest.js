import React from "react";
import {
    updataBodyMessagestextActionCreator,
    addMessagesActionCreator,
} from "../../../Store/Reducers/MessagesPageReducer";
import style from "./MessagesItem.module.css";

const MessagesItemTest = (props) => {
    let state = props.store.getState().messagesPage;

    const onUpdateValue = (e) => {
        let body = e.target.value;
        props.store.dispatch(updataBodyMessagestextActionCreator(body));
    };
    const onClickButton = () => {
        props.store.dispatch(addMessagesActionCreator());
    };

    const renderMessages = () => {
        let key = 1;
        return state.messages.map((message) => {
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
                        value={state.messageBodyText}
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
