// import { render } from "node-sass";
import React from "react";
import style from "./NewsPage.module.css";
import {
    updataInputValueActionCreator,
    addPostActionCreator,
} from "../../Store/Reducers/NewsPageReducer";

const MessagesItemTest = (props) => {
    // debugger;
    let newPostElement = React.createRef();
    const updateInput = () => {
        let text = newPostElement.current.value;
        props.dispatch(updataInputValueActionCreator(text));
    };

    const updatePost = () => {
        let i = 1;
        return props.newsPage.posts.map((item) => {
            i++;
    return (
        <div className={style.tWrapper}>
            <input
                type='text'
                className={style.tInput}
                value={props.newsPage.inputValue}
                onChange={updateInput}
                ref={newPostElement}
            />
            <button
                onClick={() => props.dispatch(addPostActionCreator())}
                type='submit'
                className={style.tButton}>
                Submit
            </button>
            <div className={style.tBoxMessages}>{post}</div>
        </div>
    );
};
export default MessagesItemTest;
