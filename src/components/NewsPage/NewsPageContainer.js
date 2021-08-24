import React from "react";
import NewsPage from "./NewsPage";
import {
    updataInputValueActionCreator,
    addPostActionCreator,
} from "../../Store/Reducers/NewsPageReducer";

const MessagesItemTest = ({ store: { dispatch, getState } }) => {
    const updateInput = (text) => {
        dispatch(updataInputValueActionCreator(text));
    };

    const clickBtn = () => {
        dispatch(addPostActionCreator());
    };

    return (
        <NewsPage clickBtn={clickBtn} updateInput={updateInput} newsPage={getState().newsPage} />
    );
};
export default MessagesItemTest;
