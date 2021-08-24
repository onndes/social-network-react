// import { render } from "node-sass";
import React from "react";
import style from "./NewsPage.module.css";
import {
    updataInputValueActionCreator,
    addPostActionCreator,
} from "../../Store/Reducers/NewsPageReducer";

const MessagesItemTest = (props) => {
    const updateInput = (e) => {
        let text = e.target.value;
        props.dispatch(updataInputValueActionCreator(text));
    };

    const updatePost = () => {
        let i = 1;
        return props.newsPage.posts.map((item) => {
            i++;
            return <p key={i}>{item}</p>;
        });
    };
    const post = updatePost();

    return (
        <div className={style.Wrapper}>
            <input
                type='text'
                className={style.Input}
                value={props.newsPage.inputValue}
                onChange={updateInput}
            />
            <button
                onClick={() => props.dispatch(addPostActionCreator())}
                type='submit'
                className={style.Button}>
                Submit
            </button>
            <div className={style.BoxMessages}>{post}</div>
        </div>
    );
};
export default MessagesItemTest;
