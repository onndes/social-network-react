import React from "react";
import NewsPage from "./NewsPage";
import {
    updataInputValueActionCreator,
    addPostActionCreator,
} from "../../Store/Reducers/NewsPageReducer";

const MessagesItemTest = (props) => {
    const updateInput = (text) => {
        props.dispatch(updataInputValueActionCreator(text));
    };

    const clickBtn = () => {
        props.dispatch(addPostActionCreator());
    };

    return <NewsPage clickBtn={clickBtn} updateInput={updateInput} newsPage={props.newsPage} />;
};
export default MessagesItemTest;
