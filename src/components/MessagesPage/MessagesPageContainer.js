import React, { Component } from "react";
import { connect } from "react-redux";
import MessagesPage from "./MessagesPage";
import withAuthRedirect from "../../HOC/withAuthRedirect";

class MessageseContainer extends Component {
    render() {
        return <MessagesPage {...this.props} />;
    }
}

const mapStateToProps = (state) => {
    return {};
};

const MessageseContainerHoc = withAuthRedirect(MessageseContainer);

const MessagesPageContainer = connect(mapStateToProps, {})(MessageseContainerHoc);
export default MessagesPageContainer;
