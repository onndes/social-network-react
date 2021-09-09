// import React from "react";
import NewsPage from "./NewsPage";
import { addPostActionCreator } from "../../Store/Reducers/NewsPageReducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        newsPage: state.newsPage,
    };
};

const NewsPageContainer = connect(mapStateToProps, { addPostActionCreator })(NewsPage);

export default NewsPageContainer;
