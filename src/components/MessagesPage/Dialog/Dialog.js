import React, { useEffect, useRef } from "react";
import s from "./Dialog.module.css";
import cn from "classnames";
import BtnGoBack from "./../../../Common/BtnGoBack/BtnGoBack";
import InputTextMessage from "./../InputTextMessage/InputTextMessage";

const Dialog = (props) => {
    const userId = +props.match.params.userId;
    const divRef = useRef(null);
    useEffect(() => {
        divRef.current.scrollIntoView({ behavior: "auto", block: "end", inline: "nearest" });
    });

    const sendMessage = (data) => {
        const bodyTextMessage = data[`bodyTextMessage${userId}`];
        if (bodyTextMessage && bodyTextMessage.trim()) {
            props.addMessage(bodyTextMessage, userId);
            props.reset("dialog");
        }
    };

    return (
        <>
            {props.windowWidth < 576 && (
                <div className={s.wrapperBtnLine} onClick={() => props.setOpenDialog(null)}>
                    <div className={s.wrappBtn}>
                        <BtnGoBack mb={"0px"} backLink={"/messages"} />
                    </div>
                    <div className={s.line}></div>
                </div>
            )}
            <div className={s.dialogWrapper} ref={divRef}>
                <div className={s.messagesWrapper}>
                    {props.dialogs[userId].messages.map((message) => {
                        return (
                            <div key={message.id} className={s.messageBox}>
                                <p
                                    className={cn(
                                        s.bodyMessage,
                                        { [s.notMyMessage]: !message.myMessages },
                                        { [s.myMessage]: message.myMessages },
                                    )}>
                                    {message.bodyMessages}
                                </p>
                            </div>
                        );
                    })}
                </div>
                <div className={s.inputTextMessage}>
                    <InputTextMessage onSubmit={sendMessage} userId={userId} />
                </div>
            </div>
        </>
    );
};

export default Dialog;
