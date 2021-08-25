// import { render } from "node-sass";
import React from "react";
import style from "./NewsPage.module.css";

const MessagesItemTest = (props) => {
  
    const onUpdateInput = (e) => {
        let text = e.target.value;
        props.updateInput(text);
    };

    const updatePost = () => {
        let i = 1;
        return props.newsPage.posts.map((item) => {
            i++;
            return <p key={i}>{item}</p>;
        });
    };
    const onClickBtn = () => {
        props.clickBtn();
    };

    return (
        <div className={style.Wrapper}>
            <input
                type='text'
                className={style.Input}
                value={props.newsPage.inputValue}
                onChange={onUpdateInput}
            />
            <button onClick={onClickBtn} type='submit' className={style.Button}>
                Submit
            </button>
            <div className={style.BoxMessages}>{updatePost()}</div>
        </div>
    );
};
export default MessagesItemTest;
