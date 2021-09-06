import React, { Component } from "react";
import { connect } from "react-redux";
import MessagesPage from "./MessagesPage";

class MessageseContainer extends Component {
    render() {
        return <MessagesPage {...this.props} />;
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    };
};

const MessagesPageContainer = connect(mapStateToProps, {})(MessageseContainer);
export default MessagesPageContainer;
