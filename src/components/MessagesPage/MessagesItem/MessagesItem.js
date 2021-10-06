import React from "react";
import style from "./MessagesItem.module.css";
import BtnGoBack from './../../../Common/BtnGoBack/BtnGoBack';
const MessagesItemTest = () => {
    const generationMessages = () => {
        const commnetsTempHardCodeTest = [
            "Officia excepteur sit quis amet elit eu tempor mollit labore.",
            "Nulla exercitation veniam esse dolore non nulla.",
            "Et nulla sunt enim dolor.",
            "Ex velit exercitation aliqua amet duis mollit ipsum id sunt reprehenderit voluptate.",
            "Irure officia ex in tempor dolor aliquip in ut sint nisi aliquip.",
        ];
        return commnetsTempHardCodeTest.map((item, i) => {
            let msgStBlock = "";
            let msgSt = "";
            if (i % 2 === 0) {
                msgStBlock = style.msgLeftBlock;
                msgSt = style.msgLeft;
            } else {
                msgStBlock = style.msgRightBlock;
                msgSt = style.msgRight;
            }
            return (
                <div key={i} className={msgStBlock}>
                    <p className={msgSt}>{item}</p>
                </div>
            );
        });
    };

    return (
        <div className={style.reactDiv}>
            <BtnGoBack mb={"10px"} />
            <div className={style.line}></div>
            {generationMessages()}
        </div>
    );
};
export default MessagesItemTest;
