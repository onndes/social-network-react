// import { render } from "node-sass";
import React from "react";
import style from "./MessagesItem.module.css";

const MessagesItemTest = (props) => {
    let newPostElement = React.createRef();
    const updateInput = () => {
        let text = newPostElement.current.value;
        props.dispatch({ type: "UPDATE-INPUT-VALUE", text: text });
    };
    const updatePost = () => {
        let i = 1;
        return props.messagesPage.posts.map((item) => {
            i++;
            return <p key={i}>{item}</p>;
        });
    };
    const post = updatePost();

    return (
        <div className={style.tWrapper}>
            <input
                type='text'
                className={style.tInput}
                value={props.messagesPage.inputValue}
                onChange={updateInput}
                ref={newPostElement}
            />
            <button
                onClick={() => props.dispatch({ type: "ADD-POST" })}
                type='submit'
                className={style.tButton}>
                Submit
            </button>
            <div className={style.tBoxMessages}>{post}</div>
        </div>
    );
};
export default MessagesItemTest;
