import React, { useEffect, useRef } from "react";
import s from "./Dialog.module.css";
import cn from "classnames";
import BtnGoBack from "./../../../Common/BtnGoBack/BtnGoBack";
import InputTextMessage from "./../InputTextMessage/InputTextMessage";

const Dialog = (props) => {
    const divRef = useRef(null);
    useEffect(() => {
        divRef.current.scrollIntoView({ behavior: "auto", block: "end", inline: "nearest" });
    });

    const sendMessage = (data) => {
        props.addMessage(data.bodyTextMessage, +props.match.params.userId);
        props.reset("dialog");
    };

    return (
        <>
            {props.windowWidth < 576 && (
                <div className={s.wrapperBtnLine} onClick={() => props.setOpenDialog(null)}>
                    <BtnGoBack mb={"10px"} backLink={"/messages"} />
                    <div className={s.line}></div>
                </div>
            )}
            <div className={s.dialogWrapper} ref={divRef}>
                <div className={s.messagesWrapper}>
                    {props.dialogs[props.match.params.userId].messages.map((message) => {
                        return (
                            <div key={message.id} className={s.messageBox}>
                                <p
                                    className={cn(
                                        s.bodyMessage,
                                        {
                                            [s.notMyMessage]: !message.myMessages,
                                        },
                                        {
                                            [s.myMessage]: message.myMessages,
                                        },
                                    )}>
                                    {message.bodyMessages}
                                </p>
                            </div>
                        );
                    })}
                </div>
                <div className={s.inputTextMessage}>
                    <InputTextMessage onSubmit={sendMessage} />
                </div>
            </div>
        </>
    );
};

export default Dialog;
