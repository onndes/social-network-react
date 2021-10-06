import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import MessagesPage from "./MessagesPage";
import { setOpenDialog } from "./../../Store/Reducers/MessagesPageReducer";

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

export default compose(connect(mapStateToProps, { setOpenDialog }))(DialogsPageContainer);
