import NewsPage from "./NewsPage";
import { addPostActionCreator } from "../../Store/Reducers/NewsPageReducer";
import { connect } from "react-redux";
import { reset } from "redux-form";

let mapStateToProps = (state) => {
    return {
        newsPage: state.newsPage,
    };
};

const NewsPageContainer = connect(mapStateToProps, { addPostActionCreator, reset })(NewsPage);

export default NewsPageContainer;
