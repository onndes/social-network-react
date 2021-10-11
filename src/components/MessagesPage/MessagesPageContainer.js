import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import MessagesPage from "./MessagesPage";
import { setOpenDialog, addMessage } from "./../../Store/Reducers/MessagesPageReducer";
import withWindowWidth from "./../../HOC/withWindowWidth";
import { withRouter } from "react-router-dom";
import { reset } from "redux-form";
import withAuthRedirect from './../../HOC/withAuthRedirect';

class DialogsPageContainer extends React.Component {
    render() {
        return <MessagesPage {...this.props} />;
    }
}

const mapStateToProps = (state) => {
    return {
        dialogs: state.messagesPage.dialogs,
        openDialogId: state.messagesPage.openDialogId,
    };
};

export default compose(
    connect(mapStateToProps, { setOpenDialog, addMessage, reset }),
    withWindowWidth,
    withRouter,
    withAuthRedirect,
)(DialogsPageContainer);
