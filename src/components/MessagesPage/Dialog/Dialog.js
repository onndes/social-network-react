import React from "react";
import s from "./Dialog.module.css";
import cn from "classnames";
import BtnGoBack from "./../../../Common/BtnGoBack/BtnGoBack";
import InputTextMessage from "./../InputTextMessage/InputTextMessage";

const Dialog = (props) => {
    return (
        <div className={s.wrapper}>
            {props.windowWidth < 576 && (
                <div onClick={() => props.setOpenDialog(null)}>
                    <BtnGoBack mb={"10px"} backLink={"/messages"} />
                    <div className={s.line}></div>
                </div>
            )}
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
            <InputTextMessage />
        </div>
    );
};

export default Dialog;
