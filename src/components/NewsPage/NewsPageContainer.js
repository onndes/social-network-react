// import React from "react";
import NewsPage from "./NewsPage";
import {
    updataInputValueActionCreator,
    addPostActionCreator,
} from "../../Store/Reducers/NewsPageReducer";
import { connect } from "react-redux";



let mapStateToProps = (state) => {
    return {
        newsPage: state.newsPage,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        clickBtn: () => {
            dispatch(addPostActionCreator());
        },
        updateInput: (text) => {
            return dispatch(updataInputValueActionCreator(text));
        },
    };
};

const NewsPageContainer = connect(mapStateToProps, mapDispatchToProps)(NewsPage);

export default NewsPageContainer;
